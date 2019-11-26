import { AppLoading } from "expo";
import React, { useState } from "react";
import { View } from "react-native";
import AppSwitchNavigator from "./navigation/AppSwitchNavigator";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./redux/reducer";
import styles from "./assets/styles";
import { setUsers, setMatches } from "./redux/actions";
import fetch from "./helper/fetchWithTimeout";

import ActionCable from "react-native-actioncable";
import ActionCableProvider from "react-actioncable-provider";

const cable = ActionCable.createConsumer("ws://10.0.2.2:3000/cable");

const store = createStore(reducer);

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <Provider store={store}>
        <ActionCableProvider cable={cable}>
          <View style={styles.container}>
            <AppSwitchNavigator />
          </View>
        </ActionCableProvider>
      </Provider>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    fetch("http://10.0.2.2:3000/users", null, 1000)
      .then(response => response.json())
      .then(users => store.dispatch(setUsers(users))),

    fetch("http://10.0.2.2:3000/matches", null, 1000)
      .then(response => response.json())
      .then(matches => store.dispatch(setMatches(matches)))

    // Asset.loadAsync([
    //   require("./assets/images/robot-dev.png"),
    //   require("./assets/images/robot-prod.png")
    // ]),
    // Font.loadAsync({
    //   // This is the font that we are using for our tab bar
    //   ...Ionicons.font,
    //   // We include SpaceMono because we use it in HomeScreen.js. Feel free to
    //   // remove this if you are not using it in your app
    //   "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf")
    // })
  ]);
}

function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}
