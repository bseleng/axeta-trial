import logo from './logo.svg'
import './App.css'
import AxInput from './Atoms/AxInput/AxInput'
import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState('John Smith')
  return <AxInput value={value} setValue={setValue} placeholder={'First Name Last Name'} />
}

export default App
