import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Text, Button } from 'react-native-paper';

const Recover = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Logo and Title Section */}
      <View style={styles.logoSection}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Recover Your Account</Text>
      </View>

      {/* Input Section */}
      <View style={styles.formSection}>
        <TextInput
          label="Email or Phone Number"
          placeholder="Enter your email or phone number"
          style={styles.textInput}
          mode="outlined"
        />
        <Button mode="contained" style={styles.continueButton}>
          Continue
        </Button>
      </View>

      {/* Info Section */}
      <View style={styles.infoSection}>
        <Text style={styles.infoText}>
          Please enter your email or phone number to search for your account.
        </Text>
        
      </View>
    </SafeAreaView>
  );
};

export default Recover;

const styles = StyleSheet.create({
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1877f2',
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
  continueButton: {
    backgroundColor: '#1877f2',
    borderRadius: 30,
    paddingVertical: 10,
  },
  infoSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  infoText: {
    textAlign: 'center',
    marginBottom: 15,
    color: '#555',
  },
  backButton: {
    color: '#1877f2',
  },
});
