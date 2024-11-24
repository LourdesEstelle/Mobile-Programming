import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import DrawerContent from '../../components/Drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={DrawerContent}>
        <Drawer.Screen
          name="(tabs)" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Home',
            title: 'Home',
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons 
                name={focused ? 'home' : 'home-outline'} 
                size={25} 
                color={focused ? '#0078d4' : '#aaa'} 
              />
            ),
          }}
        />
        <Drawer.Screen
          name="settings" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Settings',
            title: 'Settings',
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons 
                name={focused ? 'cog' : 'cog-outline'} 
                size={25} 
                color={focused ? '#0078d4' : '#aaa'} 
              />
            ),
          }}
        />
        {/* Add more drawer items as needed */}
      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  drawerLabel: {
    fontSize: 18,
    color: '#333', // Dark text for better contrast
    fontWeight: '600',
  },
  drawerIcon: {
    marginRight: 10,
  },
});
