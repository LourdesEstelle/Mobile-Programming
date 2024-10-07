import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileHeader = ({ name, email, onEditPress, darkMode }) => {
  const colorPalette = {
    light: {
      text: '#000000',
      email: '#555555',
      buttonBackground: '#007bff',
      buttonText: '#ffffff',
      containerBackground: '#ffffff',
    },
    dark: {
      text: '#ffffff',
      email: '#aaaaaa',
      buttonBackground: '#bb86fc',
      buttonText: '#121212',
      containerBackground: '#1E1E1E',
    },
  };

  const colors = darkMode ? colorPalette.dark : colorPalette.light;

  return (
    <View style={[styles.container, { backgroundColor: colors.containerBackground }]}>
      <Image source={require('../assets/avatar.jpg')} style={styles.profileImage} />
      <Text style={[styles.name, { color: colors.text }]}>{name}</Text>
      <Text style={[styles.email, { color: colors.email }]}>{email}</Text>
      <TouchableOpacity onPress={onEditPress} style={[styles.editButton, { backgroundColor: colors.buttonBackground }]}>
        <Text style={[styles.editButtonText, { color: colors.buttonText }]}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginVertical: 0, 
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15, 
    shadowRadius: 6,
    elevation: 4,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    marginBottom: 10,
  },
  editButton: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  editButtonText: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ProfileHeader;
