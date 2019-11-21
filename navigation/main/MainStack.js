import styles from "../../assets/styles";
import { createStackNavigator } from "react-navigation";
import Home from "./HomeTab";
import Search from "../../screens/main/Search";

export const MainStack = createStackNavigator(
  {
    HOME: Home,
    SEARCH: Search
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

export default MainStack;
