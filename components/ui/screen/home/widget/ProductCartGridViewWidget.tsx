import { COLORS } from '@/constants/colorpallets';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-paper';

export default function ProductCartGridViewWidget({navigation}:any) {
    const[qty,setQty]=useState(0);
    const changeQty =(value:number)=>{
        if(value <=0){
            return;
        }
     setQty(value);
    }
    return (
        <TouchableOpacity   onPress={()=>navigation.navigate('ProductDetails')}
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

   <View style={styles.buttonBar}>
<TouchableOpacity onPress={()=>changeQty(qty-1)} style={styles.button}>
    <Icon size={20} source={'minus'} color={COLORS.orange}/>
    </TouchableOpacity>
    

    <Text style={{fontWeight:'bold',marginLeft:10, marginRight:10 }}>{qty}</Text>

  <TouchableOpacity onPress={()=>changeQty(qty+1)}  style={styles.button}>
    <Icon size={20} source={'plus'} color={COLORS.orange}/>
    </TouchableOpacity>



    </View>

 </TouchableOpacity>



       
    );
}

const styles = StyleSheet.create({
    container: {
       width:'100%',
       marginBottom:7,
       padding:10,
       backgroundColor:COLORS.Lgreen,
     borderRadius:5
     
    },
    buttonBar:{
        marginTop:20,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',

    },
    button:{
    width:35,
    height:35,
    borderRadius:1,
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center',
    borderColor:COLORS.black
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