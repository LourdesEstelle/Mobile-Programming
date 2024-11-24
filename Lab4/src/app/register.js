import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Button, Text } from 'react-native-paper';

const Register = () => {
  return (
    <SafeAreaView style={regStyle.container}>
      {/* Logo Section */}
      <View style={regStyle.logoSection}>
        <Image source={require('../assets/logo.png')} style={regStyle.logo} />
        <Text style={regStyle.title}>Create a New Account</Text>
        <Text style={regStyle.subtitle}>
          It’s quick and easy to set up an account.
        </Text>
      </View>

      {/* Input Fields Section */}
      <View style={regStyle.inputSection}>
        <TextInput
          label="Full Name"
          placeholder="Enter your full name"
          style={regStyle.textInput}
          mode="outlined"
        />
        <TextInput
          label="Email"
          placeholder="Enter your email"
          style={regStyle.textInput}
          mode="outlined"
        />
        <TextInput
          label="Password"
          placeholder="Enter your password"
          style={regStyle.textInput}
          secureTextEntry
          mode="outlined"
        />
      </View>

      {/* Buttons Section */}
      <View style={regStyle.buttonSection}>
        <Button
          mode="contained"
          style={regStyle.registerButton}
          onPress={() => console.log('Register')}
        >
          Sign Up
        </Button>
        <Button
          mode="text"
          style={regStyle.loginButton}
          onPress={() => console.log('Back to Login')}
        >
          Already have an account? Log In
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const regStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logoSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1877f2', // Facebook Blue
    marginTop: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: '#555', // Neutral gray for readability
    marginTop: 5,
    marginBottom: 20,
  },
  inputSection: {
    width: '100%',
    marginBottom: 20,
  },
  textInput: {
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  buttonSection: {
    width: '100%',
    alignItems: 'center',
  },
  registerButton: {
    width: '100%',
    backgroundColor: '#1877f2',
    borderRadius: 30,
    paddingVertical: 10,
    marginBottom: 15,
  },
  loginButton: {
    color: '#1877f2', 
  },
});
