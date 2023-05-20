import React, { useEffect } from 'react';
import {View, Text, TouchableOpacity,StyleSheet,Alert} from 'react-native';
import Background from '../utils/Background';
import Btn from '../utils/Btn';
import {darkGreen} from '../utils/colorConstants';
import Field from '../utils/Field';
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../../firebase';
//import firestore from '@react-native-firebase/firestore';
//import { auth } from '../../firebase';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { Keyboard } from 'react-native';


const NewRegister = (props) => {

  const[firstName,setfirstName]=useState('');
  const[lastName,setlastName]=useState('');
  const[email,setEmail]=useState('');
  const[contactNumber,setcontactNumber]=useState('');
  const[password,setPassword]=useState('');
  const[confirmPassword,setconfirmPassword]=useState('');
  const[age,setage]=useState('');
  const[weight,setweight]=useState('');
  const[height,setheight]=useState('');
  const [bmi, setBmi] = useState(null);

  const registerUser=async(firstName,lastName,email,contactNumber,password,confirmPassword,age,weight,height,bmi)=>{
      await firebase.auth().createUserWithEmailAndPassword(email,password)
      /*.then(()=>{
        firebase.auth().currentUser.sendEmailVerification({
          handleCodeInApp:true,
          url:'nutribuddy-d5816.firebaseapp.com',
        })*/
        .then(()=>{
          alert('Registered Successfully!')
        })
        .catch(error=>{
          if (error.code === 'auth/email-already-in-use') {
            alert('That email address is already in use!');
          }
      
          if (error.code === 'auth/invalid-email') {
            alert('That email address is invalid!');
          }
          alert(error.message)
        })
        .then(()=>{
          firebase.firestore().collection('userDetails')
          .doc(firebase.auth().currentUser.uid)
          .set({
            firstName:firstName,
            lastName:lastName,
            email:email,
            contactNumber:contactNumber,
            password:password,
            confirmPassword:confirmPassword,
            age:age,
            weight:weight,
            height:height,
            bmi:bmi,
            
          })
        })
        .catch((error)=>{
          alert(error.message)
        })
      
      /*.catch((error=>{
        alert(error.message)
      }))*/
  }

 // const users =firestore().collection('UserDetails').get();
  /*const [inputs, setInputs] = React.useState({
    firstName: '',
    lastName:'',
    email: '',
    contactNumber: '',
    password: '',
    confirmPassword: '',
    age: '',
    weight: '',
    height: '',

  });*/

  /*const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const[IsSubmit,setIsSubmit]=React.useState(false);
//addref=firebase.firestore().collection('userDetails');
const [addData,setaddData]=useState('');*/
   
  /*const saveData=()=>{
    auth.firestore().collection('userDetails')
      .add({
        firstName:inputs.firstName,
        lastName:inputs.lastName,
        email:inputs.email,
        contactNumber:inputs.contactNumber,
        password:inputs.password,
        confirmPassword:inputs.confirmPassword,
        age:inputs.age,
        weight:inputs.weight,
        height:inputs.height,
        bmi:bmi
      })
      .then(() => {
        setaddData('');
        console.log('User added!');
        Keyboard.dismiss();
      })
      .catch((error)=>{
        alert(error);
      })

  }*/

  /*const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };*/

  const navigation = useNavigation();

  const navnewLogin =()=>{
    navigation.navigate('newLogin');
  }
  const navnewRegister =()=>{
    navigation.navigate('newRegister');
  }

  //const [weight, setWeight] = useState('');
  //const [height, setHeight] = useState('');
  
  
  const handleCalculateBmi = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height);
    const bmiValue = weightInKg / (heightInM * heightInM);
    setBmi(bmiValue.toFixed(2));
  }

  return (
    <SafeAreaView style={mystyle.container}>
    <ScrollView style={mystyle.scroll}>
          <Text style={mystyle.register}>Register</Text>
          <Text style={mystyle.createAcc}>Create a new account</Text>

          <View style={mystyle.pagebox}>
          
            <Field 
              placeholder="First Name" 
              //onFocus={() => handleError(null, 'firstName')}
              onChangeText={(firstName)=>setfirstName(firstName)} 
              style={{alignSelf:'center',height:'6%'}} 
              value={firstName}
              //error={errors.firstName}
            />
            <Field 
              placeholder="Last Name" 
              //onFocus={() => handleError(null, 'lastName')}
              onChangeText={(lastName)=>setlastName(lastName)}
              value={lastName}
              //error={errors.lastName}
            />
            <Field 
              placeholder="Email / Username" 
              //onFocus={() => handleError(null, 'email')}
              onChangeText={(email)=>setEmail(email)}
              keyboardType={'email-address'}
              value={email}
              //error={errors.email}
            />
            <Field 
              placeholder="Contact Number" 
              //onFocus={() => handleError(null, 'contactNumber')}
              onChangeText={(contactNumber)=>setcontactNumber(contactNumber)}
              keyboardType={'phone-pad'} 
              value={contactNumber}
              //error={errors.contactNumber}
            />
            <Field 
              placeholder="Password" 
              //onFocus={() => handleError(null, 'password')}
              onChangeText={(password)=>setPassword(password)}
              value={password}
              secureTextEntry={true} 
              //error={errors.password}

            />
            <Field 
              placeholder="Confirm Password" 
              //onFocus={() => handleError(null, 'confirmPassword')}
              onChangeText={(confirmPassword)=>setconfirmPassword(confirmPassword)}
              value={confirmPassword}
              secureTextEntry={true} 
              //error={errors.confirmPassword}
            />
            <Field 
              placeholder="Age" 
              //onFocus={() => handleError(null, 'age')}
              onChangeText={(age)=>setage(age)}
              keyboardType={'numeric'} 
              value={age}
              //error={errors.age}
            />
            <Field 
              placeholder="Weight (in kg)" 
              //onFocus={() => handleError(null, 'weight')}
              onChangeText={(weight)=>setweight(weight)}
              keyboardType={'decimal-pad'}
              value={weight} 
              //error={errors.weight}
            
            />
            <Field 
              placeholder="Height (in metre)" 
              //onFocus={() => handleError(null, 'height')}
              onChangeText={(height)=>setheight(height)}
              keyboardType={'decimal-pad'}  
              value={height}
              //error={errors.height}
              
            />

            <TouchableOpacity style={mystyle.button} onPress={handleCalculateBmi}>
        <Text style={mystyle.buttonText}>Calculate BMI</Text>
      </TouchableOpacity>
      {bmi && (
        <Field placeholder="Height (in metre)" value={bmi} />
        
      )}

            <View style={mystyle.bysigningView}>
              <Text style={{ color: 'grey', fontSize: 16,marginLeft:26 }}>By signing in, you agree to our{' '}</Text>
              <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16,marginRight:20}}>Terms & Conditions</Text>
            </View>

            <View style={mystyle.privacypolicyView}>
              <Text style={{ color: 'grey', fontSize: 16 }}>and {" "}</Text>
              <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Privacy Policy</Text>
            </View>

          </View>

          <TouchableOpacity style={mystyle.button} onPress={()=>registerUser(firstName,lastName,email,contactNumber,password,confirmPassword,age,weight,height,bmi)}>
              <Text style={mystyle.textStyle}>Register</Text>
          </TouchableOpacity>

            <View
              style={mystyle.bottomView}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Already have an account ?{' '}</Text>
              <TouchableOpacity onPress={navnewLogin}>
                <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Login</Text>
              </TouchableOpacity>
            </View>
        
      
    </ScrollView>
    </SafeAreaView>
  );
};

export default NewRegister;

const mystyle=StyleSheet.create({
    container:{
      flex:1,
      alignItems: 'center',
      width:responsiveWidth(100),
      flexDirection:'column',
      backgroundColor:'#96e665',
      justifyContent:'flex-end'
      
      
    },
    register:{
      color: 'white',
      fontSize: 64,
      fontWeight: 'bold',
      marginTop: 2,
      marginStart:100
    },
    createAcc:{
      color: 'white',
      fontSize: 19,
      fontWeight: 'bold',
      marginBottom: 20,
      marginStart:150
    },
    pagebox:{
      backgroundColor: 'white',
      height:responsiveHeight(100),
      width:responsiveWidth(100),
      borderTopLeftRadius: 100,
      paddingTop: 40,
      alignItems: 'center',
      alignSelf:'center',
      paddingLeft:20,
      marginBottom:10,
      marginRight:8,
      marginLeft:8
     
    },
    bysigningView: {
      display: 'flex',
      flexDirection: 'row',
      width: '75%',
      padding: 6,
      justifyContent:'center',
      alignContent:'center',
      marginLeft:5
      
  },
    privacypolicyView:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent :"center",
      width: '78%',
      paddingRight: 16,
      marginBottom: 10,
      marginRight:8
  },
  scroll:{
    flex:1,
    width:'100%',

  },
  bottomView:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom:30
    
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
  },
  bmiText: {
    fontSize: 20,
    marginTop: 20,
  },
textStyle: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold'
}
});