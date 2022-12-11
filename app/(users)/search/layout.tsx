import Search from './Search'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='flex space-x-4 divide-x-2 pt-6 pl-5'>
      <div className='flex-1'>
        <Search />
        <div>{children}</div>
      </div>
    </main>
  )
}