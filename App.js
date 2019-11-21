import { AppLoading } from "expo";
import React, { useState } from "react";
import { View } from "react-native";
import AppSwitchNavigator from "./navigation/AppSwitchNavigator";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./redux/reducer";
import styles from "./assets/styles";

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
        <View style={styles.container}>
          <AppSwitchNavigator />
        </View>
      </Provider>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
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
