import { View, Text,FlatList,StyleSheet,Pressable } from 'react-native';
import React,{useState,useEffect} from 'react';
import {firebase} from '../../firebase';
import { QuerySnapshot } from '@firebase/firestore';

const fetch = () => {

    const [users,setUsers]=useState([]);
    const fetchedInfo=firebase.firestore().collection('userDetails');

    useEffect(async ()=>{
        fetchedInfo
        .onSnapshot(
            querySnapshot=>{
                const users=[]
                querySnapshot.forEach((doc)=>{
                    const{firstName,lastName,email,contactNumber,age,weight,height,bmi}=doc.data()
                    users.push({
                        id:doc.id,
                        firstName,
                        lastName,
                        email,
                        contactNumber,
                        age,
                        weight,
                        height,
                        bmi,
                    })
                })
                setUsers(users)
            }
        )
    },[])
   return(
    <View style={{flex:1}}>
        <FlatList
            style={{height:'100%'}}
            data={users}
            numColumns={2}
            renderItem={({item})=>(
                <View>
                    <Text>Hello {item.firstName}</Text>
                    <Text>weight: {item.weight}</Text>
                    <Text>BMI: {item.bmi}</Text>
                </View>
            )}
        ></FlatList>
    </View>
   )
}

export default fetch;