import { createStackNavigator } from '@react-navigation/stack';
import HomeBottomTabNavigation from '../tab-navigation/HomeBottomtabnavigation';

import MyOrderTopTabNavigation from '../tab-navigation/MyOrderTopTabNavigation';
import ProductDetailsScreen from '@/components/ui/screen/ProductDetailsScreen';
import LoginScreen from '@/components/ui/screen/security/LoginScreen';
import signupScreen from '@/components/ui/screen/security/signupScreen';
import signupverifyScreenEmail from '@/components/ui/screen/security/signupverifyScreenEmail';
import ProductUploadScreen from '@/components/ui/screen/home/others/orders/ProductUploadScreen';
const stack = createStackNavigator();


export default function stackNavigator(){
return(
    <stack.Navigator>
        <stack.Screen name={'process'}
        options={{headerLeft:()=>null, headerShown:false}}
        
        component={HomeBottomTabNavigation}/>

        <stack.Screen name={'MyOrder'}
        options={{title:'MyOrder'}}
        
        component={MyOrderTopTabNavigation}/>

        <stack.Screen name={'ProductDetails'}
        options={{title:'ProductDetailsScreen'}}
        
        component={ProductDetailsScreen}/>

  <stack.Screen name={'Login'}
        options={{title:'LoginScreen'}}
        component={LoginScreen}/>

        <stack.Screen name={'signup'}
        options={{title:'signupScreen'}}
        component={signupScreen}/>

      <stack.Screen name={'signupverifyEmail'}
        options={{title:'signupverify'}}
        component={signupverifyScreenEmail}/>

        <stack.Screen name={'ProductUpload'}
        options={{title:'Admin panel'}}
        component={ProductUploadScreen}/>
  

    </stack.Navigator>
)
}
