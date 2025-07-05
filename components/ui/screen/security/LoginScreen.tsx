import { COLORS } from '@/constants/colorpallets';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as React from 'react';
import { TextInput, Icon } from 'react-native-paper';
import axios from 'axios';
import getBaseUrl from '@/constants/baseURL';
import AsyncStorage from '@react-native-async-storage/async-storage';

const logo = require('@/assets/images/images/logo.png');

export default function LoginScreen({ navigation }: any) {
    const [email, setEmail] = React.useState('');
    const [passwordDisplayState, setPasswordDisplayState] = React.useState(false);
    const [password, setPassword] = React.useState('');

    React.useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            const userRole = await AsyncStorage.getItem('userRole');
            
            if (token) {
                // Navigate based on role
                if (userRole === 'seller') {
                    navigation.navigate('ProductUpload');
                } else {
                    navigation.navigate('homemenu');
                }
            }
        };
        checkToken();
    }, []);

const handleLogin = async () => {
    try {
        // Validate inputs
        if (!email || !password) {
            alert('Please enter both email and password');
            return;
        }

        console.log('Attempting login with:', { username: email, password });

        const response = await axios.post(`${getBaseUrl()}users/login`, {
            username: email,  // Make sure this matches backend expectation
            password         // Field name must match backend
        });

        console.log('Login response:', response.data);

        if (response.data.token) {
            // Store auth data
            await AsyncStorage.setItem('token', response.data.token);
            await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
            await AsyncStorage.setItem('userRole', response.data.user.primaryRole);

            // Navigate based on role
            if (response.data.user.primaryRole === 'seller') {
                navigation.navigate('ProductUpload');
            } else {
                navigation.navigate('process');
            }
        }
    } catch (error: any) {
        console.error('Login failed:', error.response?.data || error.message);
        
        // Show user-friendly error messages
        const errorMessage = error.response?.data?.message || 
                            error.message || 
                            'Login failed. Please try again.';
        
        alert(errorMessage);
    }
}

    return (
        <ScrollView style={styles.container}>
            <View style={styles.logoWrapper}>
                <Image source={logo} style={styles.logo} resizeMode={'contain'}/>
            </View>
            <View style={styles.inputouter}>
                <View style={styles.forGroup}></View>
                
                <TextInput
                    label="Root Email"
                    mode='outlined'
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                
                <View style={styles.forGroup}></View>
                
                <TextInput
                    label="Password"
                    mode='outlined'
                    secureTextEntry={!passwordDisplayState}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    right={<TextInput.Icon 
                        onPress={() => setPasswordDisplayState(!passwordDisplayState)}
                        size={20}
                        icon={passwordDisplayState ? 'eye' : 'eye-off'}
                    />}
                />
                
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Change Password')}
                    style={styles.forgotPasswordButton}
                >
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={handleLogin}
                >
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>

                <Text style={styles.seperateText}>OR</Text>

                <View style={styles.socialLoginWraper}> 
                    <TouchableOpacity style={styles.IconOuter}>
                        <Icon size={20} source="google" />
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.IconOuter}>
                        <Icon size={20} source="facebook" />
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.IconOuter}>
                        <Icon size={20} source="twitter" />
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.IconOuter}>
                        <Icon size={20} source="github" />
                    </TouchableOpacity>
                </View>
                
                <TouchableOpacity 
                    onPress={() => navigation.navigate('signup')}
                    style={styles.emailButton}
                >
                    <Text style={styles.loginText}>Register with the email</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    IconOuter: {
        backgroundColor: COLORS.darkGray,
        borderRadius: 50,
        marginBottom: 30,
        marginHorizontal: 10,
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    socialLoginWraper: {
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'space-between',
        marginHorizontal: 1
    },
    seperateText: {
        textAlign: 'center',
        marginTop: 5
    },
    loginText: {
        color: COLORS.darkGray,
        fontSize: 18,
        fontWeight: 'bold',
    },
    emailButton: {
        backgroundColor: COLORS.red,
        height: 43,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 'auto',
        marginTop: 30
    },
    loginButton: {
        backgroundColor: COLORS.red,
        height: 40,
        justifyContent: 'center',
        marginHorizontal: 'auto',
        width: 150,
        marginBottom: 20,
        marginTop: 20,
        borderRadius: 50,
        alignItems: 'center'
    },
    forgotPasswordText: {
        color: COLORS.primary,
        textDecorationLine: 'underline'
    },
    forgotPasswordButton: {
        alignItems: 'flex-end',
        marginTop: 10
    },
    forGroup: {
        marginBottom: 5,
    },
    inputouter: {
        marginTop: 30,
    },
    logo: {
        width: 140,
        height: 110
    },
    logoWrapper: {
        borderWidth: 1,
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 1,
        backgroundColor: COLORS.red,
        borderRadius: 10,
        padding: 10,
    },
    container: {
        flex: 1,
        padding: 10,
    }
});