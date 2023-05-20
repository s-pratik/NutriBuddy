import { View, Text,StyleSheet,TextInput } from 'react-native';
import React,{Component} from 'react';

const TextInputWithLabel = ({
    label,
    value,
    placeHolder,
    textStyle,
    isSecure,
    onChangeText,
    props
}) => {
  return (
    <View style={mystyle.container}>
        <TextInput
           value={value} 
           placeholder={placeHolder}
           onChangeText={onChangeText}
           style={inputStyle}
           {...props}
        />
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#c3f0a8'
    },
    inputStyle:{
        height:48,
        borderWidth:1,
        borderColor:'grey'

    }
});

export default TextInputWithLabel;