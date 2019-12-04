import { createStackNavigator } from "react-navigation-stack";
import HomeTab from "./HomeTab";
import SearchScreen from "../../screens/main/Search";
import ProfileScreen from "../../screens/main/Profile";
import MatchScreen from "../../screens/main/Match";
import React from "react";

const MainStack = createStackNavigator(
  {
    HOME: HomeTab,
    SEARCH: SearchScreen,
    PROFILE: ProfileScreen,
    MATCH: MatchScreen
  },

  {
    defaultNavigationOptions: {
      headerTitle: `SmashLO`,
      headerStyle: {
        backgroundColor: "#607D8B",
        elevation: 0,
        height: 12,
        paddingBottom: 20
      },
      headerTitleStyle: {
        fontSize: 14,
        color: "white",
        fontWeight: "bold",
        fontFamily: "sans-serif-light"
      }
    }
  }
);

class mainStack extends React.Component {
  static router = MainStack.router;

  render() {
    return <MainStack navigation={this.props.navigation} />;
  }
}

export default mainStack;
