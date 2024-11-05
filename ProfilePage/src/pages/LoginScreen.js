// LoginScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';


const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Logo.png')} style={styles.logo} /> 
      <Text style={styles.title}>Log In</Text>

      <TextInput
        style={styles.input}
        placeholder="Username or Email"
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
      />

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={styles.forgotPassword}>
  <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
</TouchableOpacity>

      <View style={styles.socialLoginContainer}>
        <Text style={styles.socialLoginText}>Or login with</Text>
        <View style={styles.socialButtons}>
          <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
            <Text style={styles.socialButtonText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
            <Text style={styles.socialButtonText}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.registerText}>
        Don't have an account? <Text style={styles.registerLink}>Sign Up</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#ffffff',
    elevation: 2, // Add elevation for shadow effect
  },
  loginButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    elevation: 3, // Elevation for a slightly raised button
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  forgotPassword: {
    color: '#007bff',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  socialLoginContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  socialLoginText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  socialButton: {
    flex: 1,
    marginHorizontal: 5,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  googleButton: {
    backgroundColor: '#db4437',
  },
  facebookButton: {
    backgroundColor: '#4267B2',
  },
  socialButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  registerText: {
    marginTop: 20,
    fontSize: 16,
    color: '#555',
  },
  registerLink: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
