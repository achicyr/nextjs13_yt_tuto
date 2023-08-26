import ThemeButton from '../components/ThemeButton'
import ThemeButtonForbiddenOne from '../components/ThemeButtonForbiddenOne'
import ServerComponentTest from '../components/ServerComponentTest'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>NextJs 13 Starter Kit</h1>
        <ThemeButton>
          <ServerComponentTest />
        </ThemeButton>
        <hr />
        {/* <ThemeButtonForbiddenOne /> */}
      </div>
    </section>
  )
}
