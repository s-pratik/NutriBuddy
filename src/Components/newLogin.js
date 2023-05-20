
import {View, Text, StyleSheet, TouchableOpacity,Alert,Keyboard} from 'react-native';
import Background from '../utils/Background';
import Btn from '../utils/Btn';
import { darkGreen } from '../utils/colorConstants';
import Field from '../utils/Field';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../../firebase';
import { useState } from 'react';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";


const Login = (props) => {

  const navigation = useNavigation();

  const forgotPassword=()=>{
    firebase.auth().sendPasswordResetEmail(email)
    .then(()=>{
      alert("Password reset email sent")
    }).catch((error)=>{
      alert(error)
    })
  }

  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

  const loginUser=async(email,password) => {
    try{
        await firebase.auth().signInWithEmailAndPassword(email,password)
        alert("Logged in successfully!")
        navigation.navigate('Home')
    }catch(error){
      alert(error.message)
    }
  }

  const navLogin =()=>{
    useNavigation.navigate('newLogin');
  }
  const navnewRegister =()=>{
    useNavigation.navigate('newRegister');
  }

  return (
      <SafeAreaView style={mystyle.container}>
        <ScrollView style={mystyle.scroll}>
        <Text style={mystyle.login}>Login</Text>
        <View style={mystyle.box}>
          <Text style={mystyle.welcome}>Welcome Back</Text>
          <Text style={mystyle.login_to_acc}>Login to your account</Text>
          <Field 
              placeholder="Email / Username" 
              keyboardType={'email-address'} 
              onChangeText={(email)=>setEmail(email)}
              autoCapitalize="none"
              autoCorrect={false}
              />
          <Field 
              placeholder="Password" 
              secureTextEntry={true} 
              onChangeText={(password)=> setPassword(password)}
              autoCapitalize="none"
              autoCorrect={false}
              />
          <View style={mystyle.forgotpassView}>
            <TouchableOpacity onPress={()=>forgotPassword()}>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>Forgot Password ?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={mystyle.button} onPress={()=>{loginUser(email,password)}} >
              <Text style={mystyle.textStyle}>Login</Text>
          </TouchableOpacity>

          <View style={mystyle.bottomView}>
            <Text style={{ fontSize: 16, fontWeight:"bold" }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("newRegister")}>
            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      
        </ScrollView>
      </SafeAreaView >
     
  
    
  );
  }

export default Login;

const mystyle=StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    width:responsiveWidth(100),
    backgroundColor:'#96e665'
  },
  box:{
    flex:2,
    backgroundColor: 'white',
    height:responsiveHeight(90),
    width:responsiveWidth(100),
    borderTopLeftRadius: 130,
    paddingTop: 50,
    alignItems: 'center',
    paddingHorizontal:20,
  },
  login:{
    color: 'white',
    fontSize: 64,
    fontWeight: 'bold',
    marginVertical: 20,
    alignSelf:'flex-end',
    marginHorizontal:15
  },
  welcome:{
    fontSize: 40, 
    color: darkGreen, 
    fontWeight: 'bold'
  },
  login_to_acc:{
    color: 'grey',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 20,
},
forgotpassView:{
  alignItems: 'flex-end', 
  width: '78%', 
  paddingRight: 16, 
  marginBottom: 200
},
bottomView:{ 
  display: 'flex', 
  flexDirection :'row', 
  justifyContent: "center" 
},
scroll:{
  flex:1,
  width:'100%'
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

buttonText: {
  color: '#fff',
  fontSize: 18,
  fontWeight: 'bold',
}
});