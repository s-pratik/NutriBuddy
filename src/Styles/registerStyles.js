import { View, Text, StyleSheet,Image} from 'react-native';
import COLORS from '../utils/Colors';
const mystyle= StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#c3f0a8'
    },
    scroll:{
        paddingTop:50,
        paddingHorizontal:20,
    },
    viewStyle:{
        marginVertical: 20,
    },
    Button: {
        color: COLORS.black,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    }
    
}
);

    export default mystyle;