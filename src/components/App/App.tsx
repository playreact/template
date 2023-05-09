import React from 'react'
import Counter from '../Counter'
import Toolbar from '../Toolbar'

const App: React.FC = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-8 p-6'>
      <h1 className='text-center font-serif text-4xl font-bold'>
        Play React Template
      </h1>
      <div className='btn-group'>
        <Counter storageKey='c1' initialValue={5} />
        <Counter storageKey='c2' initialValue={2} />
        <Counter storageKey='c3' />
      </div>

      <div className="fixed right-3 top-3">
        <Toolbar />
      </div>
    </div>
  )
}

export default App
