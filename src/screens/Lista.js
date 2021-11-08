import React, {useEffect, useState} from 'react';
import { View, Text, TextInput, StyleSheet, Alert, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase';
import {logginOut} from '../../API/firebaseMethods';
import 'firebase/firestore';

export default function Lista({ navigation }) {
  const [collectors, setCollectors] = useState([])
  const db = firebase.firestore();
  /*let currentUserUID = firebase.auth().currentUser.uid;

  const [firstName, setFirstName] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [code, setCode] = useState('');

  

  

  const emptyState = () => {
    setName('');
    setDescription('');
    setCode('');
  };
  */

  useEffect(() => {
/*    async function getUserInfo() {
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
*/
    firebase.firestore().collection('collectors').onSnapshot(querySnapShot => {
      const collectors = [];
      querySnapShot.docs.forEach(doc => {
        const {name, description, codeName} = doc.data();
        collectors.push({
          id: doc.id,
          name,
          description,
          codeName
        });
      })
      setCollectors(collectors)
    })
  }) 
  
  const handlePress = () => {
  /*  logginOut();*/
    firebase.auth().signOut()
    navigation.navigate('SignIn');
  };


  
  return(
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.buttonAdd} onPress={() => navigation.navigate('Main')}>
        <Text style={styles.buttonText}>Agregar colector</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Colectores agregados</Text>
      
      {
        collectors.map(collector => {
          return(
            <View style={styles.box}>
              <Text style={styles.boxTitle}>{collector.name}</Text>
              <Text style={styles.text}>{collector.description}</Text>
              <Text style={styles.text}>{collector.codeName}</Text>
            </View>
          )
        })
      
      }
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </ScrollView>
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
    marginTop: 20,
    marginBottom: 30,
    fontSize: 24,
    fontWeight: 'bold'
  },

  box: {
    backgroundColor: '#f1faee',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    paddingVertical: 10,
    marginVertical: 10
  },

  boxTitle: {
    color: '#1d3557',
    fontWeight: 'bold',
    fontSize: 20
  },

  text: {
    fontSize: 18
  },

  button: {
    backgroundColor: '#e63946',
    height: 35,
    width: 250,
    marginVertical: 20,
    alignSelf: 'center',
    borderRadius: 10
  },

  buttonAdd: {
    backgroundColor: '#ee9b00',
    height: 35,
    width: 250,
    marginTop: 50,
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
})