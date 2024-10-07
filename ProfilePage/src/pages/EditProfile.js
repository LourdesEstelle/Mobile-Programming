import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Text, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const EditProfile = ({ route, navigation, darkMode }) => {
  const { profile } = route.params || {};

  // Initialize states with profile data or empty strings
  const [firstName, setFirstName] = useState(profile.firstName || '');
  const [lastName, setLastName] = useState(profile.lastName || '');
  const [birthday, setBirthday] = useState(profile.birthday || '');
  const [gender, setGender] = useState(profile.gender || '');
  const [contactNumber, setContactNumber] = useState(profile.contactNumber || '');
  const [username, setUsername] = useState(profile.username || '');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const colorPalette = {
    light: {
      background: '#f8f9fa',
      text: '#000000',
      placeholder: '#7a7a7a',
      inputBackground: '#ffffff',
      borderColor: '#cccccc',
      buttonBackground: '#007bff',
      buttonText: '#ffffff',
    },
    dark: {
      background: '#1E1E1E',
      text: '#ffffff',
      placeholder: '#aaaaaa',
      inputBackground: '#333333',
      borderColor: '#555555',
      buttonBackground: '#bb86fc',
      buttonText: '#121212',
    },
  };

  const colors = darkMode ? colorPalette.dark : colorPalette.light;

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || new Date(birthday);
    setShowDatePicker(Platform.OS === 'ios'); // For iOS, keep picker open until confirmed
    setBirthday(currentDate.toLocaleDateString()); // Format date
  };

  const handleSave = () => {
    const updatedProfile = {
      ...profile,
      firstName,
      lastName,
      birthday,
      gender,
      contactNumber,
      username,
    };
    
    navigation.navigate('Profile', { profile: updatedProfile }); // Pass updated profile back to Profile
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Edit Profile</Text>

      <TextInput
        style={[styles.input, { backgroundColor: colors.inputBackground, borderColor: colors.borderColor, color: colors.text }]}
        placeholder="First Name"
        placeholderTextColor={colors.placeholder}
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={[styles.input, { backgroundColor: colors.inputBackground, borderColor: colors.borderColor, color: colors.text }]}
        placeholder="Last Name"
        placeholderTextColor={colors.placeholder}
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={[styles.input, { backgroundColor: colors.inputBackground, borderColor: colors.borderColor, color: colors.text }]}
        placeholder="Gender"
        placeholderTextColor={colors.placeholder}
        value={gender}
        onChangeText={setGender}
      />
      <TextInput
        style={[styles.input, { backgroundColor: colors.inputBackground, borderColor: colors.borderColor, color: colors.text }]}
        placeholder="Phone"
        placeholderTextColor={colors.placeholder}
        value={contactNumber}
        onChangeText={setContactNumber}
      />
      <TextInput
        style={[styles.input, { backgroundColor: colors.inputBackground, borderColor: colors.borderColor, color: colors.text }]}
        placeholder="Username"
        placeholderTextColor={colors.placeholder}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={[styles.input, { backgroundColor: colors.inputBackground, borderColor: colors.borderColor, color: colors.text }]}
        placeholder="Birthday"
        placeholderTextColor={colors.placeholder}
        value={birthday}
        onFocus={() => setShowDatePicker(true)} 
      />

      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date(birthday || Date.now())} 
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      <View style={[styles.buttonContainer, { backgroundColor: colors.buttonBackground }]}>
        <Button
          title="Save Changes"
          onPress={handleSave}
          color={Platform.OS === 'ios' ? colors.buttonBackground : undefined}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: '600',
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 12,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default EditProfile;
