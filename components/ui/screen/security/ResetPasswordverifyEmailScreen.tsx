import { COLORS } from '@/constants/colorpallets';
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as React from 'react';
import { TextInput} from 'react-native-paper';

const logo = require('@/assets/images/images/logo.png');

export default function ResetPasswordverifyEmailScreen({navigation}:any) {
    const[email, setEmail]=React.useState('');
    
    return (
        <ScrollView style={styles.container}>
            <View style={styles.logoWrapper}>
<Image source={logo}style={styles.logo }resizeMode={'contain'}/>

            </View>
            <View style = {styles.inputouter}>

    
    
                     <TextInput
          label="Root email here"
          mode='outlined'
          value={email}
          onChangeText={text => setEmail(text)}
        />
<TouchableOpacity 
onPress={()=>navigation.navigate('Change Password')}
style={styles.loginButton}>
    <Text style={styles.loginText}>Change Email</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.forgotPasswordButton}>
    <Text style={styles.forgotPasswordText}>(30) Resend Email</Text>
</TouchableOpacity>
<TouchableOpacity 
onPress={()=>navigation.navigate('change password')}
style={styles.loginButton}>
    <Text style={styles.loginText}>verify</Text>
</TouchableOpacity>
        
</View>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    
    IconOuter:{
backgroundColor:COLORS.darkGray,
borderRadius:50,
marginBottom:30,
marginHorizontal:10,
height:50,
width:50,
alignItems:'center',
justifyContent:'center'

    },
    socialLoginWraper:{
flexDirection:'row',
marginTop:5,
justifyContent:'space-between',
marginHorizontal:1

    },
    seperateText:{
textAlign:'center',
marginTop:5
    },

    loginText:{
color:COLORS.darkGray,
fontSize:18,
fontWeight:'bold',

    },
    emailButton:{
backgroundColor:COLORS.blue,
height:43,
width:300,
justifyContent:'center',
alignItems:'center',
borderRadius:10,
marginHorizontal:'auto',
marginTop:30
    },

    loginButton:{
        backgroundColor:COLORS.red,
        height:40,
        justifyContent:'center',
        marginHorizontal:'auto',
        width:150,
        marginBottom:20,
        marginTop:20,
        borderRadius:50,
        alignItems:'center'
    },

    forgotPasswordText:{
color:COLORS.primary,
textDecorationLine:'underline'
    },

    forgotPasswordButton:{
alignItems:'flex-end',
marginTop:10
    },

    forGroup:{
marginBottom:5,
    },

    inputouter:{
        marginTop:30,
    },

logo:{
width:140,
height:110

},

    logoWrapper:{
borderWidth:1,
alignItems: 'center',
marginTop: 5,
marginBottom:1,
backgroundColor:COLORS.red,
borderRadius:10,
padding:10,
    },


    container: {
        flex: 1,
        padding:10,
        
        
    }
});