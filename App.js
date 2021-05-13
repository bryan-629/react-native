import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator}from '@react-navigation/stack'
import CreateUser from './screns/CreateUser';
import UserDetails from './screns/UserDetails';
import UserList from './screns/UsersList';
const Stack = createStackNavigator();
function MyStack(){
  return(
    
    <Stack.Navigator screenOptions={{}}>
        <Stack.Screen name="UserList" component={UserList} options= {{title:'Lista de usuarios'}}/>
      <Stack.Screen name="CreateUser" component={CreateUser} options={{ title: 'Crea un usuario' }}/>
      <Stack.Screen name="UserDetails" component={UserDetails} options={{ title: 'Detalles de usuario' }} />
      </Stack.Navigator>
    
  );
}

export default function App() {
  return (
    <NavigationContainer style={styles.nav}>
      <MyStack></MyStack>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  nav:{
    
    
  },

  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
