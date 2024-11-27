import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DashboardLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarActiveBackgroundColor: '#e7e7e7', // Subtle gray for active tabs
        tabBarStyle: {
          backgroundColor: 'white',
          paddingHorizontal: 0,
          paddingBottom: 5,
          height: 60,
          borderTopWidth: 1,
          borderTopColor: '#dcdcdc', // Light border like Facebook
          margin: 0, // Remove extra spacing
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarShowLabel: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'home' : 'home-outline'}
              size={28}
              color={focused ? '#1877f2' : 'black'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'account' : 'account-outline'}
              size={28}
              color={focused ? '#1877f2' : 'black'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'cog' : 'cog-outline'}
              size={28}
              color={focused ? '#1877f2' : 'black'}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default DashboardLayout;
