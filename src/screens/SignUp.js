import React, {useState} from 'react';
import { View, Text, TextInput, Alert, ScrollView, Keyboard, StyleSheet, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { registration } from '../../API/firebaseMethods';

export default function SignUp({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const emptyState = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPass('');
  };

  const handlePress = () => {
    if(!firstName) {
      Alert.alert('Por favor ingrese un nombre'); 
    } else if(!email) {
      Alert.alert('Por favor ingrese un correo');
    } else if(!password) {
      Alert.alert('Por favor ingrese una contraseña');
    } else if(!confirmPass) {
      setPassword('');
      Alert.alert('Por favor escriba la contraseña y su confirmación');
    } else if(password != confirmPass) {
      Alert.alert('Las contraseñas no coinciden');
    } else {
      registration( email, password, lastname, firstName );
      navigation.navigate('SignIn');
      emptyState();
    }
  };

  return(
    <View style={styles.container}>
        <Text style={styles.title}>Crea una cuenta</Text>
        <ScrollView>
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            value={firstName}
            onChangeText={(name) => setFirstName(name)}
          />
          <TextInput
            style={styles.input}
            placeholder="Apellido"
            value={lastname}
            onChangeText={(name) => setLastName(name)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(email) => setEmail(email)}
            keyboardType='email-address'
            autoCapitalize='none'
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            value={password}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirma tu contraseña"
            value={confirmPass}
            onChangeText={(password2) => setConfirmPass(password2)}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>

          <View style={styles.logIn}>
            <Text style={styles.logInText}>¿Ya tienes una cuenta?</Text>
            <TouchableOpacity style={styles.buttonLogIn} onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.buttonText}>Inicia sesión</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a8dadc'
  },

  title: {
    color: '#1d3557',
    textAlign: 'center',
    marginTop: 50,
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
    backgroundColor: '#ee9b00',
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

  logIn: {
    marginTop: 55
  },

  logInText: {
    color: '#7251B5',
    textAlign: 'center',
    fontSize: 18
  },

  buttonLogIn: {
    backgroundColor: '#1d3557',
    height: 35,
    width: 250,
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 10
  },
})