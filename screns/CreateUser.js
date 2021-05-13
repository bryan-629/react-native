import React from 'react';
import { useState } from 'react';
import { View, Button,TextInput,ScrollView,StyleSheet } from 'react-native'
import firebase from '../database/firebase';
import { Value } from 'react-native-reanimated';
const CreateUser = (props) => {

   const [state, setState] = useState({
       nombre : '',
       email: '',
       telefono: ''
   });
   const handlechangeChangeText = (nombre,value) =>{
       setState({ ...state, [nombre]: value })
   }
   const crearteNewUser = async () =>{
       if (state.email ==='' || state.nombre === '' || state.nombre === '') {
           alert('Los campos estan vacios');
       }else{
         await firebase.db.collection('users').add({
               nombre : state.nombre,
               email: state.email,
               telefono: state.telefono
           })
           props.navigation.navigate('UserList')
       }
       
   }

    return (
        <ScrollView style={Styles.container}>
            <View style={Styles.inputs} >
                <TextInput  name="Nombre" placeholder = "Nombre" onChangeText= {(value) => handlechangeChangeText('nombre', value)}/>
            </View>
            <View style={Styles.inputs} >
                <TextInput name="Email" onChangeText={(value) => handlechangeChangeText('email', value)} placeholder="Email" />
            </View>
            <View style={Styles.inputs}>
                <TextInput name="Telefono" onChangeText={(value) => handlechangeChangeText('telefono', value)}  placeholder="Teléfono" />
            </View>
            <View>
                <Button title = "Añadir Usuario" onPress={() =>crearteNewUser()} />
            </View>
        </ScrollView>
    )
}

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:35
    },
    inputs: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    }
})

export default CreateUser;