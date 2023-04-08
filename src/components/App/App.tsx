import Counter from '../Counter'
import ThemeChange from '../ThemeChange'

export default function App() {
  return (
    <div className='p-5 flex flex-col min-h-screen justify-center items-center gap-5 md:flex-row'>
      <h1 className='text-success text-3xl font-bold font-serif text-center'>
        Play React Template
      </h1>
      <div className='btn-group font-mono'>
        <Counter />
        <ThemeChange />
      </div>
    </div>
  )
}
