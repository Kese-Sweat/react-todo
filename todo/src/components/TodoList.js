import React, { useState } from 'react';
import '../styles/App.css';
import { useTodo } from '../hooks'

function TodoList (){
    const [todoText, setTodoText]= useState('')
    const { todos } = useTodo() // grabs todo state from duck
    console.log(todos)

    function handleSubmit(e){
        e.preventDefault()
    }
    return(
        <div className="TodoList">
            <h1>Todos</h1>
            <form onSubmit={handleSubmit}>
                <input
                onChange={(e) => setTodoText(e.target.value)}
                 placeholder="what needs to be done?" />
            </form>
            <ul>
                {todos.map(todo => { 
                    return <li>{todo.text}</li>
                })}
                
            </ul>
        </div>
    )
}

export default TodoList