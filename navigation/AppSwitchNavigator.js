import { createAppContainer, createSwitchNavigator } from "react-navigation";

import AuthLoading from "../screens/auth/AuthLoading";
import AuthStack from "./auth/AuthStackNavigator";
import AppSwitch from "./app/AppSwitch";
export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      AuthLoading: AuthLoading,
      App: AppSwitch
    },
    { initialRouteName: "AuthLoading" }
  )
);
