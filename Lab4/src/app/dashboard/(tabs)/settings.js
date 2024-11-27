import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

const Settings = () => {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
  
      <Text style={styles.header}>Settings</Text>
      
      {/* Account Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <View style={styles.row}>
          <Text style={styles.rowText}>Username</Text>
          <Text style={styles.rowText}>Lordweil E. Abalde</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowText}>Email</Text>
          <Text style={styles.rowText}>abalde.lordweil123.com</Text>
        </View>
        <Button mode="outlined" style={styles.actionButton} labelStyle={styles.buttonLabel}>
          Edit Profile
        </Button>
      </View>
      
      {/* Privacy Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Privacy</Text>
        <View style={styles.row}>
          <Text style={styles.rowText}>Who can see my posts?</Text>
          <Text style={styles.rowText}>Friends</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowText}>Two-factor authentication</Text>
          <Text style={styles.rowText}>Enabled</Text>
        </View>
        <Button mode="outlined" style={styles.actionButton} labelStyle={styles.buttonLabel}>
          Change Password
        </Button>
      </View>
      
      {/* Notifications Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.row}>
          <Text style={styles.rowText}>Email notifications</Text>
          <Text style={styles.rowText}>On</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowText}>Push notifications</Text>
          <Text style={styles.rowText}>Off</Text>
        </View>
        <Button mode="outlined" style={styles.actionButton} labelStyle={styles.buttonLabel}>
          Manage Notifications
        </Button>
      </View>

      {/* Language Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Language</Text>
        <View style={styles.row}>
          <Text style={styles.rowText}>Preferred Language</Text>
          <Text style={styles.rowText}>English</Text>
        </View>
        <Button mode="outlined" style={styles.actionButton} labelStyle={styles.buttonLabel}>
          Change Language
        </Button>
      </View>

      {/* App Theme Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>App Theme</Text>
        <View style={styles.row}>
          <Text style={styles.rowText}>Current Theme</Text>
          <Text style={styles.rowText}>Light</Text>
        </View>
        <Button mode="outlined" style={styles.actionButton} labelStyle={styles.buttonLabel}>
          Change Theme
        </Button>
      </View>

      {/* Help & Support Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Help & Support</Text>
        <View style={styles.row}>
          <Text style={styles.rowText}>Help Center</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowText}>Report a Problem</Text>
        </View>
        <Button mode="outlined" style={styles.actionButton} labelStyle={styles.buttonLabel}>
          Get Help
        </Button>
      </View>

      {/* Logout Button */}
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={() => router.replace('/')}
          style={styles.logoutButton}
          labelStyle={styles.buttonLabel}
        >
          Logout
        </Button>
      </View>
    </ScrollView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1c1e21',
    marginBottom: 30,
    marginTop: 10,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1c1e21',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  rowText: {
    fontSize: 16,
    color: '#1c1e21',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  logoutButton: {
    backgroundColor: '#1877F2',
    paddingVertical: 3,
    marginTop: 5,
  },
  actionButton: {
    backgroundColor: 'transparent',
    borderColor: '#1877F2',
    borderWidth: 1,
    paddingVertical: 5,
    marginTop: 15,
  },
  buttonLabel: {
    fontSize: 14,  // Smaller font size
  },
});
