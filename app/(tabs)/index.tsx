import {Text, StyleSheet,View} from 'react-native';
import { useState } from 'react';
import SplaashScreen from '@/components/ui/screen/splaashScreen';
import Dashboard from '@/components/ui/screen/Dashboard';
import StackNavigator from './navigashion/stack-navigation/StackNavigator';


export default function homeScreen(){
  const [isloading, setIsLoading]=useState(true);
    return(
        <View style={styles.container}>
            {isloading?(
                <SplaashScreen onFinish={()=>{setIsLoading(false)}}/>
                ):(
                    
                <StackNavigator/>
                )}
    


            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
    flex:1,
    backgroundColor:'white'
    
    }
})

