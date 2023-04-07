import { useState } from 'react'

export default function Counter() {
  const [value, setValue] = useState(0)

  return (
    <button className='btn btn-success btn-square text-lg' onClick={() => setValue(value + 1)}>
      {value}
    </button>
  )
}
