import { View, Text,textColor,StyleSheet } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Btn = ({btnLabel}) => {
    return (
        <TouchableOpacity style={mystyle.container}>
            <Text style={mystyle.textStyle}>
                {btnLabel}
            </Text>

        </TouchableOpacity>
    );
}

export default Btn;

const mystyle=StyleSheet.create({
    container:{
        backgroundColor: "white", 
        borderRadius: 100, 
        alignItems: 'center',
        width:350,
        paddingVertical:5,
        marginVertical:10,
        borderColor:"black"
    },
    textStyle: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold'
    }
});