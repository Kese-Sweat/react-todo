// 1. imports
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

// 2. action definitions
const ADD_TODO = 'todo/ADD_TODO'
const REMOVE_TODO = 'todo/REMOVE_TODO'

// 3. initial state
const initialState = {
  todos: [{text: 'todo 1'},
          {text: 'todo 2'}
]}

const makeId = function() {

  let id = 0;
  return () => id++;
}

// 4. reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: //adds todo
        return{
          ...state, 
            todos: [
            ...state.todos,
             {id: makeId(), text: action.payload, status: 'incomplete'} // id is calling the id function
            ]
          } 
        // must return state whenever you do an action..will give me my previous state todo and give me a new todo
      case REMOVE_TODO:
        return{
          ...state,
          todos: state.todos.filter(todo => action.payload !== todo.id)
        }
    default:
      return state
  }
}

// 5. action creators
function addTheTodo(text) {
  return {
    type: ADD_TODO,
    payload: text
  }
}

function removeTheTodo(id) {
  return {
    type: REMOVE_TODO,
    payload: id
  }
}
// 6. custom hook
export function useTodo() {
  const dispatch = useDispatch()
  const todos = useSelector(appState => appState.todoState.todos)

  const addTodo = (text) => dispatch(addTheTodo(text))
  const removeTodo = (id) => dispatch(removeTheTodo(id))

  return { todos, addTodo, removeTodo }
}
