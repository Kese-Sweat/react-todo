import React from 'react';
import '../styles/App.css';
import { Provider } from 'react-redux'
import store from '../redux/store'
import Example from './Example'
import Todolist from './TodoList'

export default () => <div>
  <Provider store={store}>
    <Todolist />
  </Provider>
</div>
