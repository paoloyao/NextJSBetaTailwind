'use client'

import { useRouter } from 'next/navigation';
import React from 'react'
import { TodoType } from '../../../typings';
import { useRef, useState, useEffect } from 'react';

function TodosList() {
  const [todosList, setTodosList] = useState<TodoType[]>([]);
  const clickedTodo = useRef(0);
  const router = useRouter();

  const fetchTodos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const data: TodoType[] = await res.json();
    setTodosList(() => data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleTodoClick = (id: number) => {
    clickedTodo.current = id;
    router.push(`/todos/${id}`);
  }

  const todoStyle = (todoId: number) => {
    if(clickedTodo.current === 0) return 'truncate opacity-100';
    if(todoId === clickedTodo.current) return 'truncate font-bold opacity-100'
    return 'truncate hover:underline opacity-60';
  };

  return (
    <>
      <h2 className='text-base font-bold'>Todos List:</h2>
      {
        todosList.map((todo: TodoType) => (
          <p key={todo.id} 
            className={ todoStyle(todo.id) }>
            <a onClick={() => handleTodoClick(todo.id)}>#{todo.title}</a>
          </p>
        ))
      }
    </>
  )
}

export default TodosList