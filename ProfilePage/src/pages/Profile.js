import React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import ProfileHeader from '../components/ProfileHeader';
import Icon from 'react-native-vector-icons/Ionicons'; 

const Profile = ({ navigation, route, profile, darkMode, toggleDarkMode }) => {
  const updatedProfile = route.params?.profile || profile;

  const colorPalette = {
    light: {
      background: '#f8f9fa',
      card: '#ffffff',
      text: '#000000',
      label: '#555555',
      accent: '#007bff',
      icon: '#000000',
      shadow: '#999999',
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
        <ProfileHeader
          name={`${updatedProfile.firstName} ${updatedProfile.lastName}`}
          email={updatedProfile.email}
          onEditPress={handleEditPress}
          darkMode={darkMode}
        />
      </View>

      <View style={[styles.darkModeContainer, { backgroundColor: colors.card }]}>
        <Text style={[styles.darkModeText, { color: colors.text }]}>   Dark Mode</Text>
        <TouchableOpacity onPress={toggleDarkMode} style={styles.iconContainer}>
          <Icon name={darkMode ? 'sunny' : 'moon'} size={24} color={colors.icon} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={options}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <View style={[styles.optionContainer, { backgroundColor: colors.card, shadowColor: colors.shadow }]}>
            <Icon name={item.icon} size={24} color={colors.icon} style={styles.icon} />
            <View style={styles.optionTextContainer}>
              <Text style={[styles.optionLabel, { color: colors.label }]}>{item.label}</Text>
              <Text style={[styles.optionValue, { color: colors.text }]}>{item.value}</Text>
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
    padding: 7,
    borderRadius: 20,
    marginVertical: 20,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  darkModeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    borderRadius: 12,
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  darkModeText: {
    fontSize: 18,
    fontWeight: '500',
  },
  iconContainer: {
    padding: 10,
  },
  optionsList: {
    marginTop: 20,
  },
  optionContainer: {
    padding: 10,
    borderRadius: 12,
    marginVertical: 8,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
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
    marginTop: 4,
    fontWeight: '400',
  },
});

export default Profile;
