import Counter from '../Counter'
import Footer from '../Footer'

export default function App() {
  return (
    <div className='flex flex-col min-h-screen justify-center items-center gap-5'>
      <h1 className='text-success text-4xl font-bold font-serif text-center'>
        Play React Template
      </h1>
      <Counter />
      <Footer />
    </div>
  )
}
