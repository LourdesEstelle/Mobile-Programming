import React, { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './src/pages/Profile';
import EditProfile from './src/pages/EditProfile';

const Stack = createStackNavigator();

export default function App() {
  // Profile state
  const [profile, setProfile] = useState({
    firstName: 'Lordweil',
    lastName: 'Abalde',
    username: '@lordweil',
    email: 'abalde.lordweil123@gmail.com',
    phone: '+639564572172',
    birth: '2003-07-01',
    gender: 'Male',
  });

  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const updateProfile = (newProfile) => {
    setProfile(newProfile);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: darkMode ? '#121212' : '#FFFFFF' }}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen name="Profile" options={{ headerShown: false }}>
              {props => <Profile {...props} profile={profile} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
            </Stack.Screen>
            <Stack.Screen name="EditProfile" options={{ title: 'Edit Profile' }}>
              {props => <EditProfile {...props} profile={profile} updateProfile={updateProfile} darkMode={darkMode} />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
