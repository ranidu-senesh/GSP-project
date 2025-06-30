import{View,Text,StyleSheet}from 'react-native';

export default function ReviewWidget(){
    return(
       <View>
        <Text>
         <Text style={{fontWeight:'bold',}}>5/5 – Fresh, Flavorful & Perfect for Every Meal!</Text> 

"These organic bell peppers are a game-changer! So crisp and sweet—especially the red ones.
 I love that they’re pesticide-free and last longer than store-bought ones. Used them in fajitas 
 and salads, and even my kids snack on them raw. Worth every penny!"

–     Sarah T.
        </Text>
       </View>
    )

}

const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
justifyContent:'center'
    }
})