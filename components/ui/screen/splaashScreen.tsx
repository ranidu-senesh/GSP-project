import { COLORS, } from "@/constants/colorpallets";
import { useEffect, useRef } from "react";
import { View, StyleSheet, Image, Animated, Text } from "react-native";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
    const logo = require('../../../assets/images/images/logo.png');
    const progress = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(progress, {
            toValue: 100,
            duration: 5000,
            useNativeDriver: false
        }).start(() => {
            onFinish();
        });
    }, []); 

    return (
        <View style={styles.container}>
            <View style={styles.logoWrapper}>
                <Image 
                    source={logo}
                    style={styles.logo}
                    resizeMode={'contain'}
                />
                </View> 
                <Text>Freshly.lk</Text>
              <View style={styles.progressContainer}>
              <Animated.View
              style={[styles.progressbar,
                {width:progress.interpolate({inputRange:[0,100],outputRange:['0%','100%']})}
              ]}
              
              />
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
progressbar:{
    backgroundColor:COLORS.red,
    borderRadius:5,
    height:'100%'
},


    progressContainer:{
width:'80%',
height:7,
backgroundColor:COLORS.darkGray,
overflow:'hidden',
borderRadius:5,
marginTop:10
    },
    logo: {
        height: 175
    },
    logoWrapper: {
        
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});