import { COLORS } from '@/constants/colorpallets';
import { useState } from 'react';
import{View,Text,StyleSheet, TouchableOpacity}from 'react-native';
import { Icon } from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function DisplayTypeWidget({callback}:any){
const[gridState,setGridState]=useState(true);

    return(

        <View style={styles.container}>

            <TouchableOpacity 
            onPress={()=>
                {setGridState(true);
                callback(true);
            
            
                }}
            style={{...styles.button, backgroundColor:gridState? COLORS.blue:COLORS.darkGray }}>
           <Icon size={20} source={'grid'} color={gridState? COLORS.light:COLORS.blue}/>
        </TouchableOpacity>

        
            <TouchableOpacity
            onPress={()=>
                {setGridState(false);
                callback(false);
            
            
                }}

            style={{...styles.button, backgroundColor:gridState? COLORS.darkGray:COLORS.blue }}>
           <Icon size={20} source={'menu'} color={gridState? COLORS.light:COLORS.light}/>
        </TouchableOpacity>



        </View>
    )

}

const styles= StyleSheet.create({
    container:{
       borderWidth:1,
       marginTop:10,
       flexDirection:'row',
       justifyContent:'flex-end',
       marginBottom:10
      
    },
    button:{
       borderWidth:1, 
width:60,
height:25,
justifyContent:'center',
alignItems:'center'
    }

})