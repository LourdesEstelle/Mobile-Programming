import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons'; // Importing icons

export default function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (task.trim().length > 0) {
      const newTask = {
        id: Date.now().toString(),
        value: task,
        status: 'Pending',
        date: 'Sep 12, 2024', 
        time: '11:00 AM', 
      };
      setTaskList([...taskList, newTask]);
      setTask('');
    }
  };

  const toggleStatus = (taskId) => {
    setTaskList(
      taskList.map((item) =>
        item.id === taskId ? { ...item, status: item.status === 'Pending' ? 'Completed' : 'Pending' } : item
      )
    );
  };

  const confirmDelete = (taskId) => {
    Alert.alert(
      "Delete Task",
      "Are you sure you want to delete this task?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "OK", onPress: () => removeTask(taskId) }
      ]
    );
  };

  const removeTask = (taskId) => {
    setTaskList(taskList.filter((item) => item.id !== taskId));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add a new task"
          style={styles.input}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>Add Task</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={taskList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <View style={styles.taskDetails}>
              <Text style={styles.taskText}>{item.value}</Text>
              <Text style={styles.taskDateTime}>{item.date} at {item.time}</Text>
            </View>
            <View style={styles.taskActions}>
              <TouchableOpacity onPress={() => toggleStatus(item.id)}>
                <Text style={[styles.status, item.status === 'Completed' ? styles.completed : styles.pending]}>
                  {item.status}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => confirmDelete(item.id)}>
                <MaterialIcons name="delete" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fffa',
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    flex: 1,
    marginRight: 10,
    padding: 10,
  },
  addButton: {
    backgroundColor: '#1e3a8a',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  taskDetails: {
    flexDirection: 'column',
    flex: 1,
  },
  taskText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskDateTime: {
    color: '#666',
    fontSize: 12,
  },
  taskActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  status: {
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 5,
    fontWeight: 'bold',
    marginRight: 10,
  },
  pending: {
    backgroundColor: '#ffcc00',
    color: '#fff',
  },
  completed: {
    backgroundColor: '#32CD32',
    color: '#fff',
  },
});
