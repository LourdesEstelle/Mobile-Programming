import React from 'react';
import { View, StyleSheet, Switch, Text, FlatList } from 'react-native';
import ProfileHeader from '../components/ProfileHeader';

const Profile = ({ navigation, profile, darkMode, toggleDarkMode }) => {
  const options = ['Favourites', 'Downloads', 'Subscription', 'Display'];

  const handleEditPress = () => {
    navigation.navigate('EditProfile');
  };

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#121212' : '#f8f9fa' }]}>
      
      <View style={styles.profileContainer}>
        {/* Profile Header */}
        <ProfileHeader
          name={`${profile.firstName} ${profile.lastName}`}
          email={profile.email}
          onEditPress={handleEditPress}
        />
      </View>

      {/* Dark Mode Toggle */}
      <View style={styles.darkModeToggle}>
        <Text style={{ color: darkMode ? 'white' : 'black' }}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={toggleDarkMode} />
      </View>

      {/* Options List */}
      <FlatList
        data={options}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.optionContainer}>
            <Text style={styles.optionText}>{item}</Text>
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
    backgroundColor: '#ffffff', // Background color for the profile container
    padding: 20, // Padding inside the container
    borderRadius: 10, // Rounded corners for the container
    marginVertical: 20, // Margin to separate from other elements
    shadowColor: '#000', // Optional shadow for better visual appeal
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // Adds shadow for Android
  },
  textContainer: {
    padding: 20, // Padding inside the text container
    alignItems: 'center', // Center text inside the shape
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black', // Fixed text color (black)
  },
  emailText: {
    fontSize: 14,
    color: 'gray', // Fixed email color
    marginTop: 5,
  },
  darkModeToggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  optionsList: {
    marginTop: 20, // Space between the toggle and options list
  },
  optionContainer: {
    backgroundColor: '#ffffff', // Fixed background color for options
    padding: 15, // Padding inside each option container
    borderRadius: 10, // Rounded corners for option containers
    marginVertical: 5, // Spacing between options
    shadowColor: '#000', // Optional shadow for better visual appeal
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3, // Adds shadow for Android
  },
  optionText: {
    fontSize: 16,
    color: 'black', // Fixed text color (black)
  },
});

export default Profile;
