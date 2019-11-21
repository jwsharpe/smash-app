import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import ThreadContainer from "../screens/home/Main";
import styles from "../assets/styles";
import {
  createMaterialTopTabNavigator,
  createStackNavigator
} from "react-navigation";

const PUBLIC_MAIN = () => <ThreadContainer hi={"public"} />;
const FRIENDS_MAIN = () => <ThreadContainer hi={"friends"} />;
const ME_MAIN = () => <ThreadContainer hi={"me"} />;

const TopTabNavigator = createMaterialTopTabNavigator(
  {
    PUBLIC: PUBLIC_MAIN,
    FRIENDS: FRIENDS_MAIN,
    ME: ME_MAIN
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 12,
        textAlign: "center",
        fontWeight: "bold"
      },
      style: {
        backgroundColor: "#607D8B"
      }
    }
  }
);

class NAV extends React.Component {
  static router = TopTabNavigator.router;

  render() {
    return (
      <View style={styles.mainContainer}>
        <TopTabNavigator navigation={this.props.navigation} />
        <TouchableOpacity style={styles.fab}>
          <Text style={styles.fabText}>S</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export const AppTab = createStackNavigator(
  {
    NAV: NAV
  },

  {
    defaultNavigationOptions: {
      headerTitle: "SmashLO",
      headerStyle: {
        backgroundColor: "#607D8B",
        elevation: 0,
        height: 12,
        paddingBottom: 20
      },
      headerTitleStyle: {
        fontSize: 14,
        color: "white",
        fontWeight: "bold"
      }
    }
  }
);

export default AppTab;
