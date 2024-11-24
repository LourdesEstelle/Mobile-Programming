import { View, Image, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function DrawerContent(props) {
  const router = useRouter();
  const year = new Date().getFullYear();
  const { top, bottom } = useSafeAreaInsets();

  const handleLogout = async () => {
    router.replace('/');
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={true}
        contentContainerStyle={{ paddingTop: top }}
      >
        
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/logo.png')} style={styles.logo} />
        </View>

        
        <DrawerItemList {...props} />

       
        <DrawerItem
          label="Logout"
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="logout" color={color} size={size} />
          )}
          labelStyle={styles.logoutLabel}
          onPress={handleLogout}
        />
      </DrawerContentScrollView>

      {/* Footer Section */}
      <View style={[styles.footerContainer, { paddingBottom: bottom }]}>
        <Text style={styles.footerText}>
          Copyright &copy; {year}. All rights reserved.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  logo: {
    width: '100%',   
    height: 150,     
    resizeMode: 'contain',   
  },
  logoutLabel: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',   
    color: '#1877f2',   
  },
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#1877f2',   
    fontSize: 12,
  },
});
