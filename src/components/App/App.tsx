import React from 'react'
import { useCounter } from 'usehooks-ts'
import { Minus, Plus, RotateCw, X } from 'lucide-react'
import Toolbar from '../Toolbar'

const App: React.FC = () => {
  const { count, setCount, increment, decrement, reset } = useCounter(0)

  const multiplyBy2 = () => setCount((x: number) => x * 2)

  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-8 p-6'>
      <h1 className='text-center font-serif text-4xl font-bold'>
        Play React Template
      </h1>

      <div className='btn-group'>
        <button className='btn-outline btn-square btn' onClick={decrement}><Minus size={18} /></button>
        <button className='btn-outline btn'>{count}</button>
        <button className='btn-outline btn-square btn' onClick={increment}><Plus size={18} /></button>
        <button className='btn-outline btn-square btn' onClick={reset}><RotateCw size={16} /></button>
        <button className='btn-outline btn-square btn' onClick={multiplyBy2}><X size={16} />2</button>
      </div>

      <div className="fixed right-3 top-3">
        <Toolbar />
      </div>
    </div>
  )
}

export default App
