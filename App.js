import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

export default function App() {
  const [item, setItem] = useState('');
  const [shoppingList, setShoppingList] = useState([]);

  const addItem = () => {
    if (item.trim()) {
      setShoppingList([...shoppingList, { id: Math.random().toString(), value: item }]);
      setItem('');
    }
  };

  const clearList = () => {
    setShoppingList([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add an item"
          value={item}
          onChangeText={setItem}
        />
        <Button title="Add" onPress={addItem} />
        <Button title="Clear" onPress={clearList} />
      </View>
      <FlatList
        data={shoppingList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.listItem}>{item.value}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    marginBottom: 10,
    marginTop: 50, 
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
    maxWidth: '60%', 
  },
  listItem: {
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});