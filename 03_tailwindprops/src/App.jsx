import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'


function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username:"shreya",
    age:20
  }
  
let newArr =[1,2,3]

  return (
    <>
      <h1 className="bg-pink-400 text-black p-4 rounded-xl" >Tailwind test</h1> 
      <Card username="shreya" btnText="click me"/>
      <Card username="dipu"/>
    </>
  )
}

export default App
