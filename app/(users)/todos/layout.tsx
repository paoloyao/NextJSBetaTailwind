import TodosList from './TodosList'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='flex'>
      <div className='xs:w-40 sm:w-2/3 pt-5 pl-5'>
        {/* @ts-ignore */}
        <TodosList />
      </div>
      <div className='flex-1'>{children}</div>
    </main>
  )
}