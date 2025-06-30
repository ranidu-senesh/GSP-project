import{Image, TouchableOpacity} from'react-native';
import homeBookmarkScreen from "@/components/ui/screen/home/homeBookmarkScreen";
import homeCartScreen from "@/components/ui/screen/home/homeCartScreen";
import homeMenuScreen from "@/components/ui/screen/home/homeMenuScreen";
import homeProductScreen from "@/components/ui/screen/home/homeProductScreen";
import homeScreen from "@/components/ui/screen/home/homeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/colorpallets";
import { Text } from '@react-navigation/elements';
const logo = require('@/assets/images/images/logo.png');

const Tab = createBottomTabNavigator();



export default function HomeBottomTabNavigation({navigation}:any) {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Menu') iconName = focused ? 'menu' : 'menu-outline';
                    else if (route.name === 'Cart') iconName = focused ? 'cart' : 'cart-outline';
                    else if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
                    else if (route.name === 'Bookmarks') iconName = focused ? 'heart' : 'heart-outline';
                    else if (route.name === 'Products') iconName = focused ? 'grid' : 'grid-outline';
                    //@ts-ignore

                    return <Ionicons name ={iconName} size={20} color={color} />;
                },
                tabBarActiveTintColor: COLORS.red,
                tabBarInactiveTintColor: COLORS.darkGray
            })}
        >
            <Tab.Screen name="Menu" component={homeMenuScreen} />
            <Tab.Screen name="Cart" component={homeCartScreen} />
            <Tab.Screen name="Home" component={homeScreen}
            options={{
                headerLeft:()=>(
                    <Image source={logo} resizeMode={'contain'}
                    style={{width:90, height:63, marginLeft:10}}
                    />
                ),
                headerTitle:'',

              headerRight:()=>(
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}
                style={{
                    marginRight:10,
                    width:120,
                    backgroundColor:COLORS.red,
                    borderRadius:3,
                    height:35,
                    alignItems:'center',
                    justifyContent:'center'
                }}>

                    <Text> admin console</Text>
                </TouchableOpacity>
              )  
            }}
            
            />
            <Tab.Screen name="Bookmarks" component={homeBookmarkScreen} />
            <Tab.Screen name="Products" component={homeProductScreen} />
        </Tab.Navigator>
    );
}