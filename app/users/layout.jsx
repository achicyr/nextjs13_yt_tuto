import Users from './users'

export default async function UsersLayout({children}) {
  return (
    <section className='flex'>
        <aside className="w-1/4">
            <Users />
        </aside>
        <main>{children}</main>
    </section>
  )
}
