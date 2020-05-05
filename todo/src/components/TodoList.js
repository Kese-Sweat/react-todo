import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import { useTodo } from '../hooks'

function TodoList (){
    const [todoText, setTodoText]= useState('')
    const { todos, addTodo, removeTodo, getTodoList } = useTodo() // grabs todo state from duck
    console.log(todos)

    useEffect (() =>{
        getTodoList()
    },[])

    function handleSubmit(e){
        e.preventDefault()
        addTodo(todoText)
        setTodoText('')
    }
    return(
        <div className="TodoList">
            <h1>Todos</h1>
            <form onSubmit={handleSubmit}>
                <input
                value ={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                 placeholder="what needs to be done?" />
            </form>
            <ul>
                {todos.map(todo => { 
                    return <li key={todo.id}>
                        <span>{todo.text}</span>
                    <button onClick={() => removeTodo(todo.id)}>x</button>
                    </li>
                })}
                
            </ul>
        </div>
    )
}

export default TodoList