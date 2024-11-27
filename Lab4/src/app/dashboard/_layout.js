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
          name="(tabs)" 
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
          name="settings"  
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
        
      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  drawerLabel: {
    fontSize: 18,
    color: '#333',  
    fontWeight: '600',
  },
  drawerIcon: {
    marginRight: 10,
  },
});
