import { View, Text,useEffect} from 'react-native';
import React from 'react';
import axios from 'axios';

const Recipie = () => {
    useEffect(()=>{
        getData();
    }, []);
  const getData=async()=>{
    const res=await axios.get('http://www.fatsecret.com/recipes');
    console.log(res);
  };
  return(
    <View>
        <Text>ApiRequests</Text>
    </View>
  );
};