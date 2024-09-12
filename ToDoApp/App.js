import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { AntDesign, MaterialIcons, Feather } from '@expo/vector-icons'; 

export default function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditing, setIsEditing] = useState(null); // Track the task being edited
  const [editTaskValue, setEditTaskValue] = useState(''); // Store the updated task value during edit

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

  // Start editing a task
  const startEditing = (taskId, taskValue) => {
    setIsEditing(taskId);
    setEditTaskValue(taskValue); // Set the initial value for editing
  };

  // Save the edited task
  const saveTask = (taskId) => {
    setTaskList(
      taskList.map((item) => 
        item.id === taskId ? { ...item, value: editTaskValue } : item
      )
    );
    setIsEditing(null); // Exit editing mode
  };

  const cancelEdit = () => {
    setIsEditing(null); // Cancel the edit
  };

  // Filtered task list based on search term
  const filteredTasks = taskList.filter((task) => 
    task.value.includes(searchTerm)
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>To Do</Text>
      </View>
      
      {/* Search Input */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search tasks..."
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
      />
      
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
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <View style={styles.taskDetails}>
              {isEditing === item.id ? (
                // Editing mode: show a TextInput for editing the task
                <TextInput
                  style={styles.input}
                  value={editTaskValue}
                  onChangeText={(text) => setEditTaskValue(text)}
                />
              ) : (
                <>
                  <Text style={styles.taskText}>{item.value}</Text>
                  <Text style={styles.taskDateTime}>{item.date} at {item.time}</Text>
                </>
              )}
            </View>

            <View style={styles.taskActions}>
              {isEditing === item.id ? (
                // Show Save and Cancel buttons when editing
                <>
                  <TouchableOpacity onPress={() => saveTask(item.id)}>
                    <Feather name="check" size={24} color="green" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={cancelEdit}>
                    <Feather name="x" size={24} color="red" />
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <TouchableOpacity onPress={() => toggleStatus(item.id)}>
                    <Text style={[styles.status, item.status === 'Completed' ? styles.completed : styles.pending]}>
                      {item.status}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => startEditing(item.id, item.value)}>
                    <Feather name="edit" size={22} color="mediumorchid" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => confirmDelete(item.id)}>
                    <MaterialIcons name="delete" size={24} color="red" />
                  </TouchableOpacity>
                </>
              )}
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
  header: {
    backgroundColor: '#4682b4',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 20,
  },
  headerText: {
    baseText: {
      fontFamily: 'Arial',
    },
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  searchInput: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 6,
    fontSize: 16,
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
    padding: 6,
  },
  addButton: {
    backgroundColor: '#4682b4',
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
