import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      
      {/* Profile Banner */}
      <View style={styles.bannerContainer}>
        <View style={styles.bannerImage} />
        <View style={styles.profileInfoContainer}>
          <View style={styles.profilePicture} />
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileBio}>Web Developer | Coffee Enthusiast | Travel Lover</Text>
        </View>
      </View>

      {/* Actions Buttons */}
      <View style={styles.buttonContainer}>
        <Button mode="contained" style={styles.actionButton} compact>
          Edit Profile
        </Button>
        <Button mode="contained" style={styles.actionButton} compact>
          Add Friend
        </Button>
        <Button mode="outlined" style={styles.actionButton} compact>
          Message
        </Button>
      </View>

      {/* About Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.text}>Age: 28</Text>
        <Text style={styles.text}>Location: San Francisco, CA</Text>
        <Text style={styles.text}>Occupation: Software Engineer</Text>
        <TouchableOpacity style={styles.editButton}>
          <MaterialCommunityIcons name="pencil" size={20} color="#1877F2" />
          <Text style={styles.editText}>Edit Info</Text>
        </TouchableOpacity>
      </View>

      {/* Friends List */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Friends</Text>
        <ScrollView horizontal={true} style={styles.friendsList}>
          <View style={styles.friendImage} />
          <View style={styles.friendImage} />
          <View style={styles.friendImage} />
          <View style={styles.friendImage} />
          <View style={styles.friendImage} />
        </ScrollView>
      </View>

      {/* Photos Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Photos</Text>
        <ScrollView horizontal={true} style={styles.photosList}>
          <View style={styles.photoImage} />
          <View style={styles.photoImage} />
          <View style={styles.photoImage} />
          <View style={styles.photoImage} />
          <View style={styles.photoImage} />
        </ScrollView>
      </View>

      {/* Post Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Posts</Text>
        <View style={styles.post}>
          <Text style={styles.postText}>Had a great time at the beach today! 🌊🌞</Text>
          <TouchableOpacity style={styles.likeButton}>
            <MaterialCommunityIcons name="thumb-up" size={20} color="#1877F2" />
            <Text style={styles.likeText}>Like</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.post}>
          <Text style={styles.postText}>Just finished coding my new app! 🚀</Text>
          <TouchableOpacity style={styles.likeButton}>
            <MaterialCommunityIcons name="thumb-up" size={20} color="#1877F2" />
            <Text style={styles.likeText}>Like</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.post}>
          <Text style={styles.postText}>Excited for the weekend getaway! ✈️</Text>
          <TouchableOpacity style={styles.likeButton}>
            <MaterialCommunityIcons name="thumb-up" size={20} color="#1877F2" />
            <Text style={styles.likeText}>Like</Text>
          </TouchableOpacity>
        </View>
      </View>

       
      
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
    paddingHorizontal: 15,
  },
  bannerContainer: {
    width: '100%',
    height: 220,
    backgroundColor: '#E4E6EB',
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: 220,
    backgroundColor: '#B0BEC5',  
    position: 'absolute',
    top: 0,
    left: 0,
  },
  profileInfoContainer: {
    position: 'absolute',
    top: 90,
    left: 20,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#B0BEC5',  
    marginBottom: 10,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 30,
    color: '#1c1e21',
  },
  profileBio: {
    fontSize: 14,
    color: '#65676B',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 80,
    marginBottom: 20,
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 6,
  },
  section: {
    marginTop: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1c1e21',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#1c1e21',
    marginBottom: 5,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  editText: {
    fontSize: 14,
    color: '#1877F2',
    marginLeft: 5,
  },
  friendsList: {
    marginTop: 10,
    paddingVertical: 10,
  },
  friendImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#B0BEC5',  
    marginRight: 10,
  },
  photosList: {
    marginTop: 10,
    paddingVertical: 10,
  },
  photoImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
    backgroundColor: '#B0BEC5', 
    marginRight: 10,
  },
  post: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  postText: {
    fontSize: 16,
    color: '#1c1e21',
    marginBottom: 10,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeText: {
    fontSize: 14,
    color: '#1877F2',
    marginLeft: 5,
  },
  logoutButtonContainer: {
    marginTop: 30,
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: '#1877F2',
    paddingVertical: 6,
  },
});
