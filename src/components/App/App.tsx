import Counter from '../Counter'
import ThemeChange from '../ThemeChange'

export default function App() {
  return (
    <div className='flex min-h-screen justify-center items-center gap-5'>
      <h1 className='text-success text-3xl font-bold font-serif'>Play React Template</h1>
      <div className='btn-group'>
        <Counter />
        <ThemeChange />
      </div>
    </div>
  )
}
