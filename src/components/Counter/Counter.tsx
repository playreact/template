import { useLocalStorageState } from 'ahooks'

export default function Counter() {
  const [value, setValue] = useLocalStorageState<number>('counter', { defaultValue: 0 })

  return (
    <button className='btn btn-outline btn-success btn-wide text-lg' onClick={() => setValue(value + 1)}>
      {value}
    </button>
  )
}
