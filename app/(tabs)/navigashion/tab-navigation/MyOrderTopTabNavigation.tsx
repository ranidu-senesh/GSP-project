import{View,Text,StyleSheet}from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyOrderScreen from '@/components/ui/screen/home/others/orders/MyOrderScreen';
//import MyOrderScreen from '@/components/ui/screen/home/others/orders/MyOrderScreen';
import ReturnScreen from '@/components/ui/screen/home/others/orders/ReturnScreen';
import RefundScreen from '@/components/ui/screen/home/others/orders/RefundScreen';

const TopTab = createMaterialTopTabNavigator();

export default function MyOrderTopTabNavigation(){
    return(
       <TopTab.Navigator>
        <TopTab.Screen name={'MyOrder'} options={{title:'MyOrder'}} component={MyOrderScreen}/>
        <TopTab.Screen name={'Return'} component={ReturnScreen}/>
        <TopTab.Screen name={'Refund'} component={RefundScreen}/>
       </TopTab.Navigator>
    )

}

