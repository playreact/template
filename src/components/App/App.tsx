import Counter from '../Counter'
import ThemeChange from '../ThemeChange/ThemeChange'

export default function App() {
  return (
    <div className='flex min-h-screen justify-center items-center gap-5'>
      <h1 className='text-info text-2xl font-serif font-bold'>Play React Template</h1>
      <div className='btn-group'>
        <Counter />
        <ThemeChange />
      </div>
    </div>
  )
}
