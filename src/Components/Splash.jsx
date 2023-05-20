import { View, Text, StyleSheet, Image } from 'react-native';
import React, {useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(()=>{
    setTimeout(() => {
      navigation.navigate('Home');
    },3000);
      
    }, []);
  

  
  return (
    <View style={mystyle.container}>
      <View>
        <Image source={require('../images/logo.png')} style={mystyle.logo}></Image>
      </View>
      <View style={mystyle.centreView}>
          <Text style={mystyle.firstText}>Nutri</Text>
          <Text style={mystyle.secondText}>Buddy</Text>
      </View>
    </View>
  );
};

export default Splash;

const mystyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#96e665',
  },

  centreView:{
    flexDirection:'row'
  },
  
  firstText:{
    fontSize: 30,
    fontWeight: 800,
    color:'#000',
  },

  secondText:{
    fontSize:30,
    fontWeight: 800,
    color:'red',
  },

  logo:{
    width:100,
    height:100,
    tintColor:'#000',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:15
    
  }
});