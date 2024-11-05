// ForgotPasswordScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Logo.png')} style={styles.logo} />
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.instructions}>
        Please enter your email address. We will send you a link to reset your password.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.resetButton}>
        <Text style={styles.resetButtonText}>Send Reset Link</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back to Login</Text>
      </TouchableOpacity>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 20,
  },
  instructions: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
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
    elevation: 2, 
  },
  resetButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    elevation: 3,
  },
  resetButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  backButton: {
    marginTop: 20,
  },
  backButtonText: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});

export default ForgotPasswordScreen;
