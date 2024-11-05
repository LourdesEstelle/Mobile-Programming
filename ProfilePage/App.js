import React, { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './src/pages/Profile';
import EditProfile from './src/pages/EditProfile';
import LoginScreen from './src/pages/LoginScreen'; // Ensure the correct path to LoginScreen
import ForgotPasswordScreen from './src/pages/ForgotPasswordScreen';

const Stack = createStackNavigator();

export default function App() {
  const [profile, setProfile] = useState({
    firstName: 'Lordweil',
    lastName: 'Abalde',
    username: '@lordweil',
    email: 'abalde.lordweil123@gmail.com',
    contactNumber: '+639564572172',
    birthday: '2003-07-01',
    gender: 'Male',
  });

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const updateProfile = (newProfile) => {
    setProfile(newProfile);
  };

  const colorPalette = darkMode ? darkTheme : lightTheme;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.safeArea, { backgroundColor: colorPalette.background }]}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen 
              name="Profile" 
              options={{ headerShown: false }}>
              {props => (
                <Profile 
                  {...props} 
                  profile={profile} 
                  darkMode={darkMode} 
                  toggleDarkMode={toggleDarkMode} 
                />
              )}
            </Stack.Screen>
            <Stack.Screen 
              name="EditProfile" 
              options={{ title: 'Edit Profile' }}>
              {props => (
                <EditProfile 
                  {...props} 
                  profile={profile} 
                  updateProfile={updateProfile} 
                  darkMode={darkMode} 
                />
              )}
            </Stack.Screen>
            <Stack.Screen 
              name="LoginScreen" 
              options={{ headerShown: false }}>
              {props => (
                <LoginScreen {...props} /> // Add LoginScreen with props
              )}
            </Stack.Screen>
            <Stack.Screen 
              name="ForgotPassword" 
              options={{ title: 'Forgot Password' }}>
              {props => (
                <ForgotPasswordScreen {...props} /> // Add ForgotPasswordScreen with props
              )}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

const lightTheme = {
  background: '#FFFFFF',
};

const darkTheme = {
  background: '#121212',
};
