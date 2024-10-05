/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import ToDoList from './src/component/ToDoList';
import ToDoForm from './src/component/ToDoForm';


function App() {
  return (
    <SafeAreaView>
      <ToDoList/>
      <ToDoForm/>
    </SafeAreaView>
  );
}



export default App;