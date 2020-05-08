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
            
         
            <form onSubmit={handleSubmit}>
                <input className="tobeDone"
                value ={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                 placeholder="What needs to be done?" />
            </form>
            
            <ul className="myList">
                {todos.map(todo => { 
                    return <div>
                        <li className="todoLi" key={todo.id}>
                        <input type="checkbox"></input>
                        <span className ="todoItems">{todo.text}</span>
                        <div>
                    <button className="xButton" onClick={() => removeTodo(todo.id)}>x</button>
                    </div>
                    </li>
                    </div>
                    
                    
                })}
                <div className="footer">
                        <span>count</span>
                        <div >
                            <button> All </button>
                            <button> Active </button>
                            <button> Completed </button>
                            <button className="clearCompleted"> Clear Completed</button>
                        </div>

                    </div>
                
            </ul>
        </div>
        
    )
}

export default TodoList