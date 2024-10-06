import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Text, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const EditProfile = ({ route, navigation }) => {
  const { profile } = route.params || {}; // Ensure it defaults to an empty object

  // Initialize states with profile data or empty strings
  const [firstName, setFirstName] = useState(profile.firstName || '');
  const [lastName, setLastName] = useState(profile.lastName || '');
  const [birthday, setBirthday] = useState(profile.birthday || '');
  const [gender, setGender] = useState(profile.gender || '');
  const [contactNumber, setContactNumber] = useState(profile.contactNumber || '');
  const [username, setUsername] = useState(profile.username || '');
  const [showDatePicker, setShowDatePicker] = useState(false); // State to control date picker visibility

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || birthday;
    setShowDatePicker(false);
    setBirthday(currentDate.toLocaleDateString()); // Update birthday state with formatted date
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
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        value={gender}
        onChangeText={setGender}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={contactNumber}
        onChangeText={setContactNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Birthday"
        value={birthday}
        onFocus={() => setShowDatePicker(true)} // Show date picker on focus
      />

      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date(birthday || Date.now())} // Default to current date if not set
          mode="date"
          is24Hour={true}
          display="default"
          onChange={handleDateChange}
        />
      )}

      <Button title="Save Changes" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default EditProfile;
