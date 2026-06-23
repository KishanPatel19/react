import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
  const[length,setLength]= useState(8)
  const [allowedNumber , setAllowedNumber] = useState(false)
  const [allowedChar , setAllowedChar] = useState(false)
  const[password,setPassword] = useState('')

  //useRef hook

  let passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ''
    let str =  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(allowedNumber) str += "0123456789";
    if(allowedChar) str +="!@#$%^&*()_+|}{';/.<>"

    for(let i = 1; i <= length;i++){
      let ind = Math.floor(Math.random()*str.length)

      pass += str.charAt(ind)

    }
    setPassword(pass)

  } , [length,allowedChar,allowedNumber])

  const copyPassword = useCallback(()=>{
       passwordRef.current.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,allowedChar,allowedNumber])

  return (
    <div className='bg-black w-mid h-full my-20 '>
      <div className='bg-gray-700 mx-8 p-8 text-center  rounded-lg'>
        <h2 className='text-white text-2xl'>Password Generator</h2>
        <div className='my-4 flex justify-center   mx-auto w-[70%] '>
          <input 
          className=' w-[100%] outline-none border-none rounded-tl-lg rounded-bl-lg px-2 py-0.5'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          placeholder='password...' type="text"
          ref={passwordRef}
          />
          <button className='bg-blue-700 px-10 py-0.5 shrink-0 rounded-tr-lg rounded-br-lg hover:bg-blue-500'
           onClick={copyPassword} 
          >copy</button>

        </div>
     <div className='flex flex-col gap-2'>
           <div className='text-white flex items-center justify-center gap-2'>
          <input type="range" 
          min={6}
          max={40}
          id='range'
          value={length}
          onChange={(e)=>{setLength(e.target.value)}}
          

          />
          <label htmlFor="range">Length {length}</label>
        </div>
          <div className='text-white flex items-center justify-center gap-2'>
          <input type="checkbox"
          defaultChecked={allowedNumber}
            id='allowedNumber'
            onChange={()=>setAllowedNumber((prev)=>!prev)}
          />
          <label htmlFor="allowedNumber"> Allow Numbers</label>
        </div>
          <div className='text-white flex items-center justify-center gap-2'>
          <input type="checkbox"
            id='allowedChar'
            defaultChecked ={allowedChar} 
            onChange={()=>setAllowedChar((prev)=>!prev)}
          />
          <label htmlFor="allowedChar"> Allow Symbol</label>
        </div>
     </div>
      </div>
    </div>
  )
}

export default App
