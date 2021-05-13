import React, { useState, useEffect } from "react";
import { Button, StyleSheet, View, ActivityIndicator, DefaultTheme} from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import firebase from "../database/firebase";

const UserList = (props) => {

    const [users, setUser] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect( () =>{
        firebase.db.collection('users').onSnapshot(querySnapshot =>{
            const users = []
            querySnapshot.docs.forEach(doc => {
                const {nombre,email,telefono} = doc.data()
                users.push({
                    id : doc.id,
                    nombre,
                    email,
                    telefono
                })
            })
            setUser(users);
            setLoader(false)
        })
        
    }); 

    const styles = StyleSheet.create({
        color:{
            flex:1 ,
            backgroundColor: 'rgba(255,255,255,1)'
        },
        lista:{
            marginTop: 20
        }
    })
    

    if (loader) {
        return (
            <View style={styles.color}>
                <ActivityIndicator size="large" color="#9e9e9e" />
            </View>
        )
    }

    return (
        <ScrollView style={styles.color}>
            <Button
                onPress={() => props.navigation.navigate("CreateUser")}
                title="Create User"
            />
            {users.map((user) => {
                return (
                    <ListItem
                        key={user.id}
                        bottomDivider
                        style = { styles.color}
                        onPress={() => {
                            props.navigation.navigate('UserDetails', { userId : user.id })
                        }}
                    >
                        <ListItem.Chevron />
                        <Avatar
                            source={{
                                uri:
                                    "https://rockcontent.com/es/wp-content/uploads/sites/3/2019/02/foto-de-perfil-para-instagram.png",
                            }}
                            rounded
                        />
                        <ListItem.Content>
                            <ListItem.Title>{user.nombre}</ListItem.Title>
                            <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                );
            })}
        </ScrollView>
    );

}

export default UserList;