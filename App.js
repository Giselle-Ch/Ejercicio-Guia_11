/*
  Inicio de sesión con correo previamente registrado
  Correo: prueba@gmail.com
  Contraseña: 123456
*/

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase';
import apikeys from './config/firebase';

import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import Main from './src/screens/Main';
import Lista from './src/screens/Lista';

const Stack = createStackNavigator();

export default function App(){
  if(!firebase.apps.length){
    console.log('Connected with Firebase')
    firebase.initializeApp(apikeys.firebaseConfig);
  }

  return(
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name='Main' component={Main} options={{ headerShown: false }} />
        <Stack.Screen name='Lista' component={Lista} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}