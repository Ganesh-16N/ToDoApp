import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, FlatList, TouchableOpacity } from 'react-native';

export default function Todo() {
  const [todolist, setTodolist] = useState(["Wake up", "Brush teeth"]);
  const [todo, setTodo] = useState('');
  const [editIndex, setEditIndex] = useState(-Infinity);
  const [editedTodo, setEditedTodo] = useState('');

  const addTodo = () => {
    if (todo) {
      setTodolist([...todolist, todo]);
      setTodo('');
    }
  }

  const deleteTodo = (index : number) => {
    const updatedList = [...todolist];
    updatedList.splice(index, 1);
    setTodolist(updatedList);
  }

  const editTodo = (index : number, editedTodoText : string) => {
    const updatedList = [...todolist];
    updatedList[index] = editedTodoText;
    setTodolist(updatedList);
    setEditIndex(-Infinity);
    setEditedTodo('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>To-Do List</Text>

      <FlatList
        data={todolist}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            {editIndex === index ? (
              <View style={styles.editItemContainer}>
                <TextInput
                  value={editedTodo}
                  onChangeText={(text) => setEditedTodo(text)}
                  style={styles.editInput}
                />
                <Button title="Save" onPress={() => editTodo(index, editedTodo)} />
              </View>
            ) : (
              <View style={styles.listItemContent}>
                <Text style={styles.todoText}>{item}</Text>
                <TouchableOpacity onPress={() => deleteTodo(index)}>
                  <Text style={styles.deleteButton}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setEditIndex(index); setEditedTodo(item); }}>
                  <Text style={styles.editButton}>Edit</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
      />

      <TextInput
        value={todo}
        onChangeText={(text) => setTodo(text)}
        style={styles.input}
        placeholder="Add a new to-do"
        placeholderTextColor={"#A4B0BD"}
      />

      <Button  title="Add To-Do" onPress={addTodo}  color={"#6A89CC"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',  
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',  
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  listItemContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  todoText: {
    flex: 1,
    fontSize: 18,
    color: 'white', 
  },
  deleteButton: {
    color: 'red',
    fontSize: 16,
    marginLeft: 20,
  },
  editButton: {
    color: '#45CE30',
    fontSize: 16,
    marginLeft: 20,
  },
  editItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
  },
  editInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    color:"white"
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    color: 'white', 
    
  },
});
