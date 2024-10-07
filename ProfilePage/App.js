import React, { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './src/pages/Profile';
import EditProfile from './src/pages/EditProfile';

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

  // Toggle dark mode
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Update profile information
  const updateProfile = (newProfile) => {
    setProfile(newProfile);
  };

  // Define color palette for dark and light modes
  const colorPalette = darkMode ? darkTheme : lightTheme;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.safeArea, { backgroundColor: colorPalette.background }]}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Profile">
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
