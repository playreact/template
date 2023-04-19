import React from 'react'
import { useLocalStorageState } from 'ahooks'

interface CounterProps {
  storageKey: string
  initialValue?: number
}

const Counter: React.FC<CounterProps> = ({ storageKey, initialValue = 0 }) => {
  const [value, setValue] = useLocalStorageState<number>(storageKey, { defaultValue: initialValue })

  return (
    <button className='btn btn-square' onClick={() => setValue(value + 1)}>
      {value}
    </button>
  )
}

export default Counter
