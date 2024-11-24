import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Text, Button } from 'react-native-paper';
import MyButton from '../components/MyButton';
import { useRouter } from 'expo-router';

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isShowPassword, setIsShowPassword] = React.useState(false);

    return (
        <SafeAreaView style={loginStyle.container}>
            <View style={loginStyle.logoSection}>
                <Image source={require('../assets/logo.png')} style={loginStyle.logo} />
                <Text variant="headlineLarge" style={loginStyle.brandName}>Facebook</Text>
            </View>
            <View style={loginStyle.formSection}>
                <TextInput
                    value={email}
                    onChangeText={text => setEmail(text)}
                    label="Email"
                    placeholder="Enter your email"
                    style={loginStyle.textInput}
                    mode="outlined"
                />
                <TextInput
                    value={password}
                    onChangeText={text => setPassword(text)}
                    label="Password"
                    placeholder="Enter your password"
                    style={loginStyle.textInput}
                    secureTextEntry={!isShowPassword}
                    right={<TextInput.Icon onPress={() => setIsShowPassword(!isShowPassword)} icon={isShowPassword ? 'eye' : 'eye-off'} />}
                    mode="outlined"
                />
            </View>
            <View style={loginStyle.actionSection}>
                <View style={loginStyle.buttonRow}>
                    
                    <MyButton
                        text="    Sign Up    "
                        action={() => router.push('register')}
                        mode="outlined"
                        size="medium"
                        style={[loginStyle.button, loginStyle.signupButton]}

                        
                    />

<MyButton
                        text="      Log In       "
                        action={() => router.replace('dashboard')}
                        mode="contained"
                        size="medium"
                        style={[loginStyle.button, loginStyle.loginButton]}
                    />
                </View>
                <Button onPress={() => router.push('recover')} style={loginStyle.forgotPasswordButton}>
                    Forgot Password?
                </Button>
            </View>
        </SafeAreaView>
    );
};

export default Login;

const loginStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f2f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logoSection: {
        alignItems: 'center',
        marginBottom: 30,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    brandName: {
        color: '#1877f2',
        fontWeight: 'bold',
        marginTop: 10,
    },
    formSection: {
        width: '100%',
        marginBottom: 20,
    },
    textInput: {
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    actionSection: {
        width: '100%',
        alignItems: 'center',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 10,
    },
    button: {
        flex: 1,
        borderRadius: 30,
        marginHorizontal: 5,
    },
    loginButton: {
        backgroundColor: '#1877f2',
    },
    signupButton: {
        borderColor: '#1877f2',
    },
    forgotPasswordButton: {
        marginTop: 10,
        color: '#1877f2',
    },
});
