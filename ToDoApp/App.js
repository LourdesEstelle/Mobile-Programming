import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (task.trim().length > 0) {
      setTaskList([...taskList, { id: Date.now().toString(), value: task }]);
      setTask('');
    }
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
        <Button title="Add Task" onPress={addTask} />
      </View>
      <FlatList
        data={taskList}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => removeTask(item.id)}>
            <View style={styles.taskItem}>
              <Text>{item.value}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
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
  taskItem: {
    padding: 15,
    marginTop: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
});
