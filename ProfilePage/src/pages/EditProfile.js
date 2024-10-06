import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import EditProfileForm from '../components/EditProfileForm';

const EditProfile = ({ profile, updateProfile, navigation, darkMode }) => {
  const [updatedProfile, setUpdatedProfile] = useState(profile);

  const handleProfileSubmit = () => {
    updateProfile(updatedProfile);
    navigation.goBack(); // Return to Profile screen
  };

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#121212' : '#fff' }]}>
      <EditProfileForm
        initialProfile={updatedProfile}
        onChange={(key, value) => setUpdatedProfile({ ...updatedProfile, [key]: value })}
      />
      <Button title="Save" onPress={handleProfileSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default EditProfile;
