import { View, Text,textColor, StyleSheet,Image,Button,onPress,TouchableOpacity} from 'react-native';
import React, { useEffect,useState } from 'react';
import mystyle from '../Styles/firstHomeScreenstyles';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../utils/Colors';
import Btn from '../utils/Btn';
import { firebase } from '../../firebase';
import {onAuthStateChanged} from "firebase/auth";

import { FlatList } from 'react-native-gesture-handler';


const FirstHomeScreen = () => {


  const Header=()=>{
    return(
      <View style={mystyle.header}>
        <Text style={mystyle.firstText}>Nutri</Text>
        <Text style={mystyle.secondText}>Buddy</Text>
      </View>
    );
  };
 
  const navigation = useNavigation();
  
  const navNutrition =()=>{
    navigation.navigate('Nutrition');
  }
  const navRecipie =()=>{
    navigation.navigate('Recipie');
  }
  const navReminder =()=>{
    alert("Please Login to access Reminder");
    navigation.navigate('newLogin');
  }
  const navDietplan =()=>{
    alert("Please Login to access Dietplan");
    navigation.navigate('newLogin');
  }
  const navRegister =()=>{
    navigation.navigate('Register');
  }
  const navLogin =()=>{
    navigation.navigate('Login');
  }
  const navloginNew =()=>{
    navigation.navigate('loginNew');
  }
  const navnewLogin =()=>{
    navigation.navigate('newLogin');
  }
  const navnewRegister =()=>{
    navigation.navigate('newRegister');
  }
  const navDashboard =()=>{
    navigation.navigate('Dashboard');
  }
  const Boxes=()=>{
    return(
      <View style={mystyle.boxContainer}>

        <TouchableOpacity onPress={navNutrition}>
          <View style={mystyle.box}>
            <View style={mystyle.inner}>
              <Image source={require('../images/nutrition.png')} style={mystyle.imageView}></Image>
              <Text style={mystyle.Options}>Nutrition</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={navRecipie}>
          <View style={mystyle.box}>
            <View style={mystyle.inner}>
              <Image source={require('../images/recipie.png')} style={mystyle.imageView}></Image>
              <Text style={mystyle.Options}>Recipie</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={navDietplan}>
          <View style={mystyle.box}>
            <View style={mystyle.inner}>
              <Image source={require('../images/dietplan.png')} style={mystyle.imageView}></Image>
              <Text style={mystyle.Options}>Dietplan</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={navReminder}>
          <View style={mystyle.box}>
            <View style={mystyle.inner}>
              <Image source={require('../images/reminders.png')} style={mystyle.imageView}></Image>
              <Text style={mystyle.Options}>Reminder</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    
    <View style={mystyle.container}>
      
      <Header/>
      <View style={mystyle.profileView} >
        <View
        style={{
            alignItems:'center',
            flexDirection:'column',
            justifyContent:'center',
            margin:40,
        }}
        >
          
          <Text
          style={{
            padding:10,
            fontWeight:'bold'
        }}
          
          >New to NutriBuddy?</Text>
          <Text
          style={{
            padding:5,
            fontWeight:'400',
            fontSize:14
        }}
          >Register Now to access all the features..</Text>
          <TouchableOpacity style={mystyle.button} onPress={navnewRegister}>
              <Text style={mystyle.textStyle}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Boxes/>
    </View>
    
  );
};

export default FirstHomeScreen;


