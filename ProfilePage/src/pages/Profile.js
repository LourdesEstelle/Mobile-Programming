import React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Image } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const Profile = ({ navigation, route, profile, darkMode, toggleDarkMode }) => {
  const updatedProfile = route.params?.profile || profile;

  const colorPalette = {
    light: {
      background: '#f8f9fa',
      card: '#ffffff',
      text: '#333333',
      label: '#555555',
      accent: '#007bff',
      icon: '#333333',
      shadow: '#dddddd',
    },
    dark: {
      background: '#121212',
      card: '#1E1E1E',
      text: '#ffffff',
      label: '#aaaaaa',
      accent: '#bb86fc',
      icon: '#ffffff',
      shadow: '#333333',
    },
  };

  const colors = darkMode ? colorPalette.dark : colorPalette.light;

  const options = [
    { label: 'Birthday', value: updatedProfile.birthday || 'Not set', icon: 'calendar' },
    { label: 'Gender', value: updatedProfile.gender || 'Not set', icon: 'male-female' },
    { label: 'Phone', value: updatedProfile.contactNumber || 'Not set', icon: 'call' },
    { label: 'Username', value: updatedProfile.username || 'Not set', icon: 'person' },
  ];

  const handleEditPress = () => {
    navigation.navigate('EditProfile', { profile: updatedProfile });
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
       
      <View style={[styles.profileContainer, { backgroundColor: colors.card, shadowColor: colors.shadow }]}>
         
        <Image source={require('../assets/avatar.jpg')} style={styles.profileImage} />
        
   
        <Text style={[styles.name, { color: colors.text }]}>{`${updatedProfile.firstName} ${updatedProfile.lastName}`}</Text>
        <Text style={[styles.location, { color: colors.label }]}>Cagayan de Oro City</Text>
        
        
        <TouchableOpacity onPress={handleEditPress} style={styles.editProfileButton}>
          <Text style={styles.editProfileButtonText}>Edit Profile</Text>
        </TouchableOpacity>
        
      
        <Text style={[styles.bio, { color: colors.text }]}>
          I am a Scholar from Barangay San Simon, Cagayan de Oro City
        </Text>
        
  
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={[styles.statValue, { color: colors.text }]}>1</Text>
            <Text style={[styles.statLabel, { color: colors.label }]}>Following</Text>
          </View>
          <View style={styles.stat}>
            <Text style={[styles.statValue, { color: colors.text }]}>120M</Text>
            <Text style={[styles.statLabel, { color: colors.label }]}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={[styles.statValue, { color: colors.text }]}>1B</Text>
            <Text style={[styles.statLabel, { color: colors.label }]}>Likes</Text>
          </View>
        </View>
        
 
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followButtonText}>Follow</Text>
        </TouchableOpacity>
      </View>

    
      <View style={[styles.darkModeContainer, { backgroundColor: colors.card }]}>
        <Text style={[styles.darkModeText, { color: colors.text }]}>Dark Mode</Text>
        <TouchableOpacity onPress={toggleDarkMode} style={styles.iconContainer}>
          <Icon name={darkMode ? 'sunny' : 'moon'} size={24} color={colors.icon} />
        </TouchableOpacity>
      </View>

    
      <FlatList
        data={options}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.optionContainer, { backgroundColor: colors.card, shadowColor: colors.shadow }]}>
            <Icon name={item.icon} size={24} color={colors.icon} style={styles.icon} />
            <View style={styles.optionTextContainer}>
              <Text style={[styles.optionLabel, { color: colors.label }]}>{item.label}</Text>
              <Text style={[styles.optionValue, { color: colors.text }]}>{item.value}</Text>
            </View>
          </TouchableOpacity>
        )}
        style={styles.optionsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  profileContainer: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
    marginVertical: 20,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 16,
    marginTop: 5,
  },
  bio: {
    textAlign: 'center',
    fontSize: 14,
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  editProfileButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  editProfileButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 15,
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
  },
  followButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginTop: 15,
  },
  followButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  darkModeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    padding: 12,
    borderRadius: 12,
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  darkModeText: {
    fontSize: 18,
    fontWeight: '600',
  },
  iconContainer: {
    padding: 10,
  },
  optionsList: {
    marginTop: 20,
  },
  optionContainer: {
    padding: 12,
    borderRadius: 12,
    marginVertical: 8,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 12,
  },
  optionTextContainer: {
    flex: 1,
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  optionValue: {
    fontSize: 16,
    marginTop: 2,
    fontWeight: '400',
  },
});

export default Profile;
