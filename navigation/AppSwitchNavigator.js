import { createAppContainer, createSwitchNavigator } from "react-navigation";

import AuthLoading from "../screens/auth/AuthLoading";
import AuthStack from "./auth/AuthStackNavigator";
import MainStack from "./main/MainStack";

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      AuthLoading: AuthLoading,
      App: MainStack
    },
    { initialRouteName: "AuthLoading" }
  )
);
