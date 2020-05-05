// 1. imports
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

// 2. action definitions
const ADD_TODO = 'todo/ADD_TODO'

// 3. initial state
const initialState = {
  todos: [{text: 'todo 1'},
          {text: 'todo 2'}
]}

// 4. reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: //adds todo
        return{...state, todos: [...state.todos, {text: action.payload, status: 'incomplete'}]} 
        // must return state whenever you do an action..will give me my previous state todo and give me a new todo
    default:
      return state
  }
}

// 5. action creators
function someSyncAction() {
  return {
    type: ''
  }
}

// 6. custom hook
export function useTodo() {
  const dispatch = useDispatch()
  const todos = useSelector(appState => appState.todoState.todos)

  const syncaction = () => dispatch(someSyncAction())

  return { todos, syncaction }
}
