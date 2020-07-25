import React, { useState } from 'react'
import { View } from 'react-native'
import Predict from './src/screens/Predict'
import Login from './src/screens/Login'
import Register from './src/screens/Register'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ContextProvider from './src/contexts/Context'

const AuthStack = createStackNavigator()
const Root = createStackNavigator()

const Auth = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="Login" component={ Login } />
    <AuthStack.Screen name="Register" component={ Register } />
  </AuthStack.Navigator>
)


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <ContextProvider>
      <NavigationContainer>
        <Root.Navigator>
          { !isLoggedIn ? 
            <Root.Screen name="Auth" component={ Auth } options={{ headerShown: false }}/> 
            :
            <Root.Screen name="Predict" component={ Predict } />
          }
        </Root.Navigator>
      </NavigationContainer>
    </ContextProvider>
  )
}