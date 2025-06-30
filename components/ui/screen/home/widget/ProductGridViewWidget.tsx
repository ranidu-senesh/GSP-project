import { COLORS } from '@/constants/colorpallets';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-paper';

export default function ProductGridViewWidget({navigation}:any) {
    return (
        <TouchableOpacity 
        onPress={()=>navigation.navigate('ProductDetails')}
        style={styles.container}>
            <TouchableOpacity style={styles.bookmark}>
             <Icon size={20} source={'heart-outline'} color={COLORS.light}/>

            </TouchableOpacity>

            <TouchableOpacity style={styles.imageView}>
                <Image source={{uri:'https://static.vecteezy.com/system/resources/previews/035/267/025/non_2x/ai-generated-slice-ripe-mango-with-drops-closeup-of-mango-fruit-free-photo.jpeg'}} 
                style={styles.image} resizeMode={'contain'}/>

              
                </TouchableOpacity>
    <Text style={styles.txtproduct}>Yellow Mango (large)</Text>

    <Text style={styles.price}>LKR 200.00</Text>

   <Text style={styles.qty}>QTY</Text>
 </TouchableOpacity>



       
    );
}

const styles = StyleSheet.create({
    container: {
       width:'100%',
       marginBottom:7,
       padding:10,
       backgroundColor:COLORS.light,
     borderRadius:5
     
    },
    bookmark:{
width:40,
height:40,
backgroundColor:COLORS.Lgreen,
borderRadius:50,
justifyContent:'center',
position:'absolute',
alignItems:'center',
right:10,
top:10,
zIndex:1,
    },

    price:{
     color:COLORS.orange 
    },

    image:{
     width:'100%',
    
     aspectRatio:16/15,


    },
    imageView:{
     backgroundColor:COLORS.light,
     padding:3,
     

    },

    txtproduct:{
        fontWeight:'bold',
        fontSize:18,
        marginTop:5,
        
    },
    qty:{
        textAlign:'right',

    }
});