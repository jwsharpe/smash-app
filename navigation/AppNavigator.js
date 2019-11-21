import { createAppContainer, createSwitchNavigator } from "react-navigation";

import AuthLoading from "../screens/auth/AuthLoading";
import AuthStack from "./AuthStackNavigator";
import AppTab from "./AppTab";

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      AuthLoading: AuthLoading,
      App: AppTab
    },
    { initialRouteName: "AuthLoading" }
  )
);
