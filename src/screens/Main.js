import React, {useEffect, useState} from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase';
import 'firebase/firestore';
import {logginOut} from '../../API/firebaseMethods';
import {registerCollection} from '../../API/firebaseMethods';


export default function Main({ navigation }) {

  const [state,setState] = useState({
    name: "",
    description: "",
    codeName: ""
  });
  
  /*let currentUserUID = firebase.auth().currentUser.uid;
  const [firstName, setFirstName] = useState('');

  const [state,setState] = useState({
    name: "",
    description: "",
    codeName: ""
  }); 

  const db = firebase.firestore();
  
  /*const emptyState = () => {
    setName('');
    setDescription('');
    setCodeName('');
  };

  const handlePress = () => {
    if(!name || !description || !codeName) {
      Alert.alert('Por favor rellene todos los campos')
    } else {
      registerCollection(
        name,
        description,
        codeName
      );
      emptyState();
    }
  } */
  
  /*
  useEffect(() => {
    async function getUserInfo() {
      let doc = await firebase
        .firestore()
        .collection('users')
        .doc(currentUserUID)
        .get();

      if(!doc.exists) {
        Alert.alert('Datos no encontrados!')
      } else {
        let dataObj = doc.data();
        setFirstName(dataObj.firstName)
      }
    }
    getUserInfo();
  })*/  

  const closeSession = () => {
    /*logginOut();*/
    firebase.auth().signOut();
    navigation.navigate('SignIn');
  };

  const handleChangeText = (name, value) => {
    setState({...state, [name]: value});
  }

  const saveCollector = async () => {
    if(state.name === '' || state.description === '' || state.codeName === '') {
      Alert.alert("Por favor rellene los campos")
    } else {
      await firebase.firestore().collection('collectors').add({
        name: state.name,
        description: state.description,
        codeName: state.codeName
      })
      setState("");
      Alert.alert("Colector agregado","Los datos han sido correctamente ingresados")
    }
  }
  
  return(
   <View style={styles.container}>
      <Text style={styles.title}>Agrega Colector</Text>
      <TextInput
        style={styles.input}
        placeholder='Nombre'
        onChangeText={(value) => handleChangeText("name", value)}
      />
      <TextInput
        style={styles.input}
        placeholder='Descripción'
        onChangeText={(value) => handleChangeText("description", value)}
      />
      <TextInput
        style={styles.input}
        placeholder='Nombre del codigo'
        onChangeText={(value) => handleChangeText("codeName", value)}
        /*onChangeText={(codeName) => setCodeName(codeName)}*/
      />

      <TouchableOpacity style={styles.buttonAdd} onPress={() => saveCollector()}>
        <Text style={styles.buttonText}>Agregar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonList} onPress={() => navigation.navigate('Lista')}>
        <Text style={styles.buttonText}>Lista de colectores</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={closeSession}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
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
    marginTop: 100,
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
    backgroundColor: '#e63946',
    height: 35,
    width: 250,
    marginTop: 120,
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

  buttonList: {
    backgroundColor: '#ee9b00',
    height: 35,
    width: 250,
    marginTop: 25,
    alignSelf: 'center',
    borderRadius: 10
  },

  buttonAdd: {
    backgroundColor: '#1d3557',
    height: 35,
    width: 250,
    marginTop: 25,
    alignSelf: 'center',
    borderRadius: 10
  }
})