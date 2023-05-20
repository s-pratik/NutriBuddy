import { View, Text,StyleSheet,SafeAreaView,TouchableOpacity } from 'react-native';
import React,{useState,useEffect} from 'react';
import { firebase } from '../../firebase';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const Dashboard = () => {
  const[name,setName]=useState('')

  //change password password
  const changePassword=()=>{
    firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email)
    .then(()=>{
      alert("Password reset email sent")
    }).catch((error)=>{
      alert(error)
    })
  }

  const forgotPassword=()=>{
    firebase.auth().sendPasswordResetEmail(email)
    .then(()=>{
      alert("Password reset email sent")
    }).catch((error)=>{
      alert(error)
    })
  }
  
  useEffect(()=>{
    firebase.firestore().collection('userDetails')
    .doc(firebase.auth().currentUser.uid).get()
    .then((snapshot)=>{
      if(snapshot.exists){
        setName(snapshot.data())
      }
      else{
        console.log('User does not exist')
      }
    })
  }, [])

  return(
      <SafeAreaView style={mystyle.container}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
          Hello, {name.firstName}
        </Text>
        <TouchableOpacity style={mystyle.button}
          onPress={()=>{firebase.auth().signOut()}}>
          <Text style={{fontSize:22,fontWeight:'bold'}}>
            Sign out
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={mystyle.button}
          onPress={()=>changePassword()}>
          <Text style={{fontSize:22,fontWeight:'bold'}}>
            Change Password
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={mystyle.button}
          onPress={()=>forgotPassword()}>
          <Text style={{fontSize:22,fontWeight:'bold'}}>
            Change Password
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
  )
}

export default Dashboard;

const mystyle=StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    width:responsiveWidth(100),
    flexDirection:'column',
    backgroundColor:'#96e665',
    justifyContent:'flex-end'
    
    
  },
  button: {
    backgroundColor: '#4285f4',
    padding: 10, 
    borderRadius: 100, 
    alignItems: 'center',
    width:'90%',
    paddingVertical:5,
    marginVertical:10
  },
})