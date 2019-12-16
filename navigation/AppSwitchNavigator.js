import { createAppContainer, createSwitchNavigator } from "react-navigation";

import AuthLoading from "../screens/auth/AuthLoading";
import AuthStack from "./auth/AuthStackNavigator";
import AppSwitch from "./app/AppSwitch";
import DebugScreen from "../screens/debug";

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      AuthLoading: AuthLoading,
      App: AppSwitch,
      Debug: DebugScreen
    },
    { initialRouteName: "AuthLoading" }
  )
);
