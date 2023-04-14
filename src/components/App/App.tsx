import React from 'react'
import Counter from '../Counter'
import Toolbar from '../Toolbar'

const App: React.FC = () => {
  return (
    <>
      <Toolbar />
      <div className='flex flex-col min-h-screen justify-center items-center gap-5'>
        <h1 className='text-success text-4xl font-bold font-serif text-center'>
          Play React Template
        </h1>
        <div className='btn-group'>
          <Counter storageKey='c1' initialValue={5} />
          <Counter storageKey='c2' initialValue={2} />
          <Counter storageKey='c3' />
        </div>
      </div>
    </>
  )
}

export default App
