import React from 'react';
import { View, StyleSheet, Switch, Text, FlatList, TouchableOpacity } from 'react-native';
import ProfileHeader from '../components/ProfileHeader';
import Icon from 'react-native-vector-icons/Ionicons'; 

const Profile = ({ navigation, route, profile, darkMode, toggleDarkMode }) => {
  const updatedProfile = route.params?.profile || profile;

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
    <View style={[styles.container, { backgroundColor: darkMode ? '#121212' : '#f8f9fa' }]}>
      <View style={styles.profileContainer}>
        {/* Profile Header */}
        <ProfileHeader
          name={`${updatedProfile.firstName} ${updatedProfile.lastName}`}
          email={updatedProfile.email}
          onEditPress={handleEditPress}
        />
      </View>

      {/* Dark Mode Toggle Container */}
      <View style={[styles.darkModeContainer, { backgroundColor: darkMode ? '#1E1E1E' : '#ffffff' }]}>
        <Text style={{ color: darkMode ? 'white' : 'black' }}>Dark Mode</Text>
        <TouchableOpacity onPress={toggleDarkMode} style={styles.iconContainer}>
          <Icon name={darkMode ? 'sunny' : 'moon'} size={24} color={darkMode ? 'white' : 'black'} />
        </TouchableOpacity>
      </View>

      {/* Options List */}
      <FlatList
        data={options}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <View style={styles.optionContainer}>
            <Icon name={item.icon} size={24} color="black" style={styles.icon} />
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionLabel}>{item.label}</Text>
              <Text style={styles.optionValue}>{item.value}</Text>
            </View>
          </View>
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
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 20,
    marginVertical: 20,
    shadowColor: '#151C62',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  darkModeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    padding: 10,
    borderRadius: 10,
    elevation: 2,
  },
  iconContainer: {
    padding: 10,
  },
  optionsList: {
    marginTop: 20,
  },
  optionContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  optionTextContainer: {
    flex: 1,
  },
  optionLabel: {
    fontSize: 16,
    color: 'black',
  },
  optionValue: {
    fontSize: 16,
    color: 'gray',
  },
});

export default Profile;
