import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {

  const [tasks, setTasks] = useState([
    { id: '1', text: 'Complete project proposal', completed: false },
    { id: '2', text: 'Buy groceries', completed: true },
    { id: '3', text: 'Call mom', completed: false },
    { id: '4', text: 'Go for a run', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');
  
    const addTask = () => {
        if (newTask.trim() !== ''){
            setTasks([...tasks, {id: Date.now().toString(), text: newTask, completed: false}]);
            setNewTask('');
        };
    };



const storeData = async () => {
  try {
    // const jsonValue = JSON.stringify(value);
    // await AsyncStorage.setItem('my-key', jsonValue);
  } catch (e) {
    // saving error
  }
};

  return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.mainTitle}>Home</Text>
            <Text style={styles.subTitle}>My Tasks, What do you want to do today?</Text>
          </View>

          <SafeAreaView style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Add a new task</Text>
              <View style={styles.addTaskContainer}>
                <TextInput style={styles.input}
                onChangeText={setNewTask}
                placeholder="Type your task here..."
                placeholderTextColor="#999"
                value={newTask}
                />
           <TouchableOpacity style={styles.addButton} onPress={addTask}>
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
              </View>
            </View>
              </SafeAreaView>
            <StatusBar/>
            
        </View>
    );
}
const styles = StyleSheet.create({

   container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  subTitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  formContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: '#555',
    marginBottom: 6,
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRightWidth: 0,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#f9f9f9',
  },
  addTaskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#9dd327',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  addButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  tasksContainer: {
    flex: 1,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#9dd327',
    borderRadius: 4,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxCompleted: {
    backgroundColor: '#9dd327',
  },
  checkmark: {
    width: 14,
    height: 14,
    tintColor: '#fff',
  },
  taskText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  taskCompleted: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  deleteButton: {
    padding: 4,
  },
  deleteIcon: {
    width: 20,
    height: 20,
    tintColor: '#e74c3c',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  emptyIcon: {
    width: 80,
    height: 80,
    marginBottom: 16,
    tintColor: '#ccc',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  footerText: {
    color: '#666',
  },
  signOutLink: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },

});