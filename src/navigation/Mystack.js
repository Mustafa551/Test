import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Myotp from '../screens/auth/otp/Myotp';
import Login from '../screens/auth/login/Login';
import Signup from '../screens/auth/signup/Signup';

const Stack = createNativeStackNavigator();

const Auth = () => {
    <Stack.Navigator>
        <Stack.Screen options={{
            headerShown: false,
        }} name="Myotp" component={Myotp} />
        <Stack.Screen options={{
            headerShown: false,
        }}  name="Login" component={Login} />
        <Stack.Screen options={{
            headerShown: false,
        }}  name="Signup" component={Signup} />
    </Stack.Navigator>
}
const Mystack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen options={{
            headerShown: false,
        }}  name="Auth" component={Auth} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Mystack
