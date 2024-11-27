import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>
      </View>

      {/* Stories Section */}
      <View style={styles.storiesContainer}>
        <ScrollView horizontal={true} style={styles.storiesList}>
          <View style={styles.story}>
            <View style={styles.storyImage} />
            <Text style={styles.storyName}>Your Story</Text>
          </View>
          <View style={styles.story}>
            <View style={styles.storyImage} />
            <Text style={styles.storyName}>Lord</Text>
          </View>
          <View style={styles.story}>
            <View style={styles.storyImage} />
            <Text style={styles.storyName}>Weil</Text>
          </View>
          <View style={styles.story}>
            <View style={styles.storyImage} />
            <Text style={styles.storyName}>Lourdes</Text>
          </View>
          <View style={styles.story}>
            <View style={styles.storyImage} />
            <Text style={styles.storyName}>Estelle</Text>
          </View>
          <View style={styles.story}>
            <View style={styles.storyImage} />
            <Text style={styles.storyName}>Keyt</Text>
          </View>
        </ScrollView>
      </View>

     
      <View style={styles.createPostContainer}>
        <TouchableOpacity style={styles.createPostButton}>
          <MaterialCommunityIcons name="plus-circle" size={30} color="#1877F2" />
          <Text style={styles.createPostText}>What's on your mind?</Text>
        </TouchableOpacity>
      </View>

       
      <View style={styles.postsContainer}>
        <View style={styles.post}>
          <View style={styles.postHeader}>
            <View style={styles.profileImage} />
            <Text style={styles.postUser}>Keyt Taylor</Text>
          </View>
          <Text style={styles.postText}>Had an amazing day at the beach!</Text>
          <View style={styles.postActions}>
            <Button mode="text" style={styles.likeButton} compact>
              <MaterialCommunityIcons name="thumb-up-outline" size={20} color="#1877F2" />
              <Text style={styles.likeText}>Like</Text>
            </Button>
            <Button mode="text" style={styles.commentButton} compact>
              <MaterialCommunityIcons name="comment-outline" size={20} color="#1877F2" />
              <Text style={styles.commentText}>Comment</Text>
            </Button>
          </View>
        </View>

        <View style={styles.post}>
          <View style={styles.postHeader}>
            <View style={styles.profileImage} />
            <Text style={styles.postUser}>Mc Heaven Abalde</Text>
          </View>
          <Text style={styles.postText}>Just finished coding my new app! 🚀</Text>
          <View style={styles.postActions}>
            <Button mode="text" style={styles.likeButton} compact>
              <MaterialCommunityIcons name="thumb-up-outline" size={20} color="#1877F2" />
              <Text style={styles.likeText}>Like</Text>
            </Button>
            <Button mode="text" style={styles.commentButton} compact>
              <MaterialCommunityIcons name="comment-outline" size={20} color="#1877F2" />
              <Text style={styles.commentText}>Comment</Text>
            </Button>
          </View>
        </View>

        <View style={styles.post}>
          <View style={styles.postHeader}>
            <View style={styles.profileImage} />
            <Text style={styles.postUser}>Edward Ratunil</Text>
          </View>
          <Text style={styles.postText}>Enjoying the sunset with friends! 🌅</Text>
          <View style={styles.postActions}>
            <Button mode="text" style={styles.likeButton} compact>
              <MaterialCommunityIcons name="thumb-up-outline" size={20} color="#1877F2" />
              <Text style={styles.likeText}>Like</Text>
            </Button>
            <Button mode="text" style={styles.commentButton} compact>
              <MaterialCommunityIcons name="comment-outline" size={20} color="#1877F2" />
              <Text style={styles.commentText}>Comment</Text>
            </Button>
          </View>
        </View>
      </View>

      
      <View style={styles.navigation}>
        <Button mode="contained" style={styles.navButton} compact>
          <MaterialCommunityIcons name="home" size={20} color="white" />
          <Text style={styles.navButtonText}>Home</Text>
        </Button>
        <Button mode="contained" style={styles.navButton} compact>
          <MaterialCommunityIcons name="account" size={20} color="white" />
          <Text style={styles.navButtonText}>Profile</Text>
        </Button>
        <Button mode="contained" style={styles.navButton} compact>
          <MaterialCommunityIcons name="check" size={20} color="white" />
          <Text style={styles.navButtonText}>Friends</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
  },
  header: {
    backgroundColor: '#1877F2',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  storiesContainer: {
    marginTop: 15,
    marginBottom: 10,
  },
  storiesList: {
    paddingLeft: 10,
  },
  story: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#B0BEC5',  
    marginBottom: 5,
  },
  storyName: {
    fontSize: 12,
    color: '#65676B',
  },
  createPostContainer: {
    backgroundColor: 'white',
    padding: 15,
    marginTop: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  createPostButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  createPostText: {
    fontSize: 16,
    color: '#65676B',
    marginLeft: 10,
  },
  postsContainer: {
    marginTop: 20,
  },
  post: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#B0BEC5',  
    marginRight: 10,
  },
  postUser: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1c1e21',
  },
  postText: {
    fontSize: 14,
    color: '#65676B',
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  likeText: {
    fontSize: 14,
    color: '#1877F2',
    marginLeft: 5,
  },
  commentButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    fontSize: 14,
    color: '#1877F2',
    marginLeft: 5,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  navButton: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 6,
    backgroundColor: '#1877F2',
  },
  navButtonText: {
    fontSize: 14,
    color: 'white',
    marginLeft: 5,
  },
});
