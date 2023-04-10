import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { GetStarted } from "../screens/GetStarted"
import { Logon } from "../screens/Logon"
import { SignIn } from "../screens/SignIn"
import { Register } from "../screens/Register"


const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes(){
  return(
      // screenOptions serve para personalizar 
      // {headerShown: false} = tira o "header"
      <Navigator screenOptions={{headerShown: false}}>
          <Screen 
              name="getStarted"
              component={GetStarted}
          />

          <Screen 
              name="logon"
              component={Logon}
          />

          <Screen 
              name="signIn"
              component={SignIn}
          />

          <Screen 
              name="register"
              component={Register}
          />

      </Navigator>
  )
}