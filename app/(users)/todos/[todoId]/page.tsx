import React from 'react'
import { TodoType } from '../../../../typings';
import { notFound } from 'next/navigation';

export const dynamicParams = true;

type PropsType = {
  params: {
    todoId: string
  }
}

const fetchTodo = async (todoId: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, { next: { revalidate: 60 } });
  return res.json();
};

async function TodoPageId({ params: { todoId } }: PropsType) {
  const todo: TodoType = await fetchTodo(todoId);
  if(!todo.id) return notFound();
  return (
    <div className='p-5 bg-sky-700 border-2 m-2 shadow-lg fixed'>
      <p>
        ID {todo.id}: {todo.title}
      </p>
      <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
      <p className='border-t border-black mt-5 text-right'>
        by user: {todo.userId}
      </p>
    </div>
  )
}

export default TodoPageId

export async function generateStaticParams() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
  const todos: TodoType[] = await res.json();
  //for demo, 50 request atmost for API
  const trimTodos = todos.splice(0, 10);
  return trimTodos.map((todo) => ({
    todoId: todo.id.toString(),
  }));
}