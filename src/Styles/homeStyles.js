import { View, Text, StyleSheet,Image} from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
  
  
} from "react-native-responsive-dimensions";
import COLORS from '../utils/Colors';
const mystyle= StyleSheet.create({
    container:{
      flex:1,
      
    },
    header:{
      
      height:60,
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
      borderBottomWidth:2,
      borderBottomColor:'#667369',
      elevation:10,
      backgroundColor:'#96e665',
      
     
    
  
    },
    firstText:{
      fontSize: 20,
      fontWeight: '800',
      color:'#000',
    },
  
    secondText:{
      fontSize: 20,
      fontWeight: '800',
      color:'red',
    },
  
    profileView:{
      
      flexDirection:'column',
      backgroundColor:'#c3f0a8',
      height:'30%',
      borderRadius:10,
      margin:6,
      borderColor:COLORS.grey,
      borderWidth:4,
      elevation:10,
      marginTop:10,
      alignItems:'center',
      justifyContent:'center'
      
    },
  
    flatlistView:{
    //flex:4,
    padding:5,
    alignItems:'center',
    height:'100%',
    width:'100%',
    justifyContent:'center'
  
    
    },
  
    itemView:{
      width:'45%',
      height:'90%',
      backgroundColor:'#fff',
      borderColor:'#fff',
      borderRadius:20,
      borderWidth:0.2,
      margin:'3%',
      elevation:4,
      alignItems:'center'
      
    },
  
    imageView:{
      width:'85%',
      height:'75%',
      marginBottom:2,
      alignItems:'center',
      flexWrap:'wrap'
    },
    boxContainer:{
      flex:2,
      width:responsiveWidth(100),
      height:responsiveHeight(58),
      padding:5,
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent:'center',
      alignItems:'center'
    },

    box:{
     
      width:responsiveWidth(42),
      height:responsiveHeight(23),
      padding:3,
      backgroundColor:'white',
      margin:'3%',
      borderRadius:10,
      elevation:8,
      
      flexDirection:'column'
      
    

    },

    inner:{
      flex:1,
      backgroundColor:'#c3f0a8',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:10,
     
    },


    Options:{
      fontSize:responsiveFontSize(2),
      
      
    },
    
  
    }
  
  );

  export default mystyle;