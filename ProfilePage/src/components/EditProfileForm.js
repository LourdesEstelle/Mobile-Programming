import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const EditProfileForm = ({ initialProfile, onChange }) => {
  const handleInputChange = (key, value) => {
    onChange(key, value);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={initialProfile.firstName}
        onChangeText={value => handleInputChange('firstName', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={initialProfile.lastName}
        onChangeText={value => handleInputChange('lastName', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={initialProfile.username}
        onChangeText={value => handleInputChange('username', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={initialProfile.email}
        onChangeText={value => handleInputChange('email', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={initialProfile.phone}
        onChangeText={value => handleInputChange('phone', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Birth"
        value={initialProfile.birth}
        onChangeText={value => handleInputChange('birth', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        value={initialProfile.gender}
        onChangeText={value => handleInputChange('gender', value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default EditProfileForm;
