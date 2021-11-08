import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {signIn} from '../../API/firebaseMethods';

export default function SignIn({ navigation }){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePress = () => {
    if(!email){
      Alert.alert('Email es requerido');
    }

    if(!password){
      Alert.alert('Contraseña es requerida');
    }

    signIn(email,password);
    setEmail('');
    setPassword('');
    navigation.navigate('Main');
  };

  return(
    <View style={styles.container}>
      <Text style={styles.titleMain}>Bienvenido</Text>
      <Text style={styles.title}>Accede a tu cuenta</Text>
      <TextInput
        style={styles.input}
        placeholder='Email'
        value={email}
        onChangeText={(email) => setEmail(email)}
        keyboardType='email-address'
        autoCapitalize='none'
      />
      <TextInput
        style={styles.input}
        placeholder='Contraseña'
        value={password}
        onChangeText={(password) => setPassword(password)}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <View style={styles.newUserBox}>
        <Text style={styles.newUser}>¿No tienes una cuenta?</Text>
        <TouchableOpacity style={styles.buttonNewUser} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.buttonText}>Crea una cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a8dadc'
  },

  titleMain: {
    color: '#1d3557',
    textAlign: 'center',
    marginTop: 130,
    fontSize: 24,
    fontWeight: 'bold'
  },

  title: {
    color: '#1d3557',
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 24,
    fontWeight: 'bold'
  },

  input: {
    backgroundColor: '#f1faee',
    height: 45,
    marginVertical: 10,
    marginHorizontal: 15,
    paddingHorizontal: 15,
    borderRadius: 20
  },

  button: {
    backgroundColor: '#1d3557',
    height: 35,
    width: 250,
    marginTop: 25,
    alignSelf: 'center',
    borderRadius: 10
  },

  buttonText: {
    color: '#f1faee',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: .5,
    marginTop: 3
  },

  newUserBox: {
    marginTop: 100
  },

  newUser: {
    color: '#7251B5',
    textAlign: 'center',
    fontSize: 18
  },

  buttonNewUser: {
    backgroundColor: '#e63946',
    height: 35,
    width: 250,
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 10
  }
})