import React, { Suspense } from 'react'
import TodosList from './(users)/todos/TodosList'

function Home() {
  return (
    <>
      <Suspense fallback={<p className='text-red-500'>Loading Todos...</p>}>
        <h1>Todos</h1>
        <div className='flex space-x-2'>
          {/* @ts-ignore */}
          <TodosList />
        </div>
      </Suspense>
      <Suspense fallback={<p className='text-red-500'>Loading Shopping...</p>}>
        <h1>Shopping Trolley</h1>
        <div className='flex space-x-2'>
          {/* @ts-ignore */}
          <TodosList />
        </div>
      </Suspense>
    </>
  )
}

export default Home