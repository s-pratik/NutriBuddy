import { View, Text, StyleSheet,Image} from 'react-native';
import COLORS from '../utils/Colors';
const mystyle= StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#c3f0a8',
      
    },
    login:{
        //paddingTop: 50,
        //paddingHorizontal: 20,
        backgroundColor:'white',
        margin:5,
        borderRadius:8,
        elevation:10,
        borderColor:'#f02222',
        margin:8,
        padding:50

        
        
    },
    Button:{
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        backgroundColor:'black',
        borderRadius:20,
        alignSelf:'center',
        justifyContent:'center'
    
},
}
);

    export default mystyle;