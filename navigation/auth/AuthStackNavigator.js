import { createStackNavigator } from "react-navigation-stack";

import SignIn from "../../screens/auth/SignIn";
import SignUp from "../../screens/auth/SignUp";
import Splash from "../../screens/auth/Splash";
export default createStackNavigator({
  Splash: Splash,
  SignUp: SignUp,
  SignIn: SignIn
});
