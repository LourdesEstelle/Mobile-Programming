import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import Modal from 'react-native-modal';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

export default function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);

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

  const updateTask = () => {
    if (task.trim().length > 0 && editingTaskId) {
      setTaskList(
        taskList.map((item) =>
          item.id === editingTaskId ? { ...item, value: task } : item
        )
      );
      setModalVisible(false);
      setEditingTaskId(null);
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

  const editTask = (taskId) => {
    const taskToEdit = taskList.find((item) => item.id === taskId);
    if (taskToEdit) {
      setTask(taskToEdit.value);
      setEditingTaskId(taskId);
      setModalVisible(true);
    }
  };

  const filteredTasks = taskList.filter((task) => 
    task.value.includes(searchTerm)
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>To Do</Text>
      </View>
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
              <Text style={styles.taskText}>{item.value}</Text>
              <Text style={styles.taskDateTime}>{item.date} at {item.time}</Text>
            </View>
            <View style={styles.taskActions}>
              <TouchableOpacity onPress={() => toggleStatus(item.id)}>
                <Text style={[styles.status, item.status === 'Completed' ? styles.completed : styles.pending]}>
                  {item.status}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => editTask(item.id)}>
                <AntDesign name="edit" size={24} color={styles.editIconColor.color} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => confirmDelete(item.id)}>
                <MaterialIcons name="delete" size={24} color={styles.deleteIconColor.color} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <StatusBar style="auto" />

      {/* Modal for updating tasks */}
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <TextInput
            style={styles.modalInput}
            placeholder="Update task"
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <View style={styles.modalButtonContainer}>
            <TouchableOpacity style={styles.modalButton} onPress={updateTask}>
              <Text style={styles.modalButtonText}>Update Task</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Lighter background color
    padding: 20,
  },
  header: {
    backgroundColor: '#16423C', // Dark color for header
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 20,
  },
  headerText: {
    color: 'white', // Lighter color for text
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  searchInput: {
    borderBottomColor: '#6A9C89', // Medium dark color for border
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 6,
    fontSize: 16,
    color: '#16423C', // Dark color for text
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    borderBottomColor: '#6A9C89', // Medium dark color for border
    borderBottomWidth: 1,
    flex: 1,
    marginRight: 10,
    padding: 6,
    color: '#16423C', // Dark color for text
  },
  addButton: {
    backgroundColor: '#16423C', // Dark color for button
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white', // Lighter color for button text
    fontWeight: 'bold',
    textAlign: 'center',
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
    backgroundColor: 'white', // Light color for background
    borderRadius: 5,
    borderColor: '#cdd1cf', // Lighter color for border
    borderWidth: 1,
  },
  taskDetails: {
    flexDirection: 'column',
    flex: 1,
  },
  taskText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#16423C', // Dark color for text
  },
  taskDateTime: {
    color: '#6A9C89', // Medium dark color for date/time text
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
    backgroundColor: '#aa6f73', // Accent color for pending tasks
    color: '#fff',
  },
  completed: {
    backgroundColor: '#16423C',
    color: '#fff',
  },
  modalContent: {
    backgroundColor: '#C4DAD2', // Light color for modal background
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalInput: {
    borderBottomColor: '#6A9C89', // Medium dark color for border
    borderBottomWidth: 1,
    width: '100%',
    marginBottom: 20,
    padding: 10,
    color: '#16423C', // Dark color for text
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    backgroundColor: '#16423C', // Dark color for buttons
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginHorizontal: 5, // Add horizontal margin between buttons
  },
  modalButtonText: {
    color: '#E9EFEC', // Lighter color for button text
    fontWeight: 'bold',
    textAlign: 'center',
  },
  editIconColor: {
    color: 'darkorange', // Orange color for edit icon
  },
  deleteIconColor: {
    color: 'crimson', // Red color for delete icon
  },
});
