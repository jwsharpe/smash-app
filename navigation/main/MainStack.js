import styles from "../../assets/styles";
import { createStackNavigator } from "react-navigation";
import HomeTab from "./HomeTab";
import SearchScreen from "../../screens/main/Search";
import ProfileScreen from "../../screens/main/Profile";

export const MainStack = createStackNavigator(
  {
    HOME: HomeTab,
    SEARCH: SearchScreen,
    PROFILE: ProfileScreen
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
