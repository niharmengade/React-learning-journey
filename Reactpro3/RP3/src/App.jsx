import { useState,useCallback,useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numallowed,setnumallowed]= useState(false)
    const [charall,setcharall]=useState(false)
    const[pass,setpass]=useState("")
    const passref = useRef(null)
    
    let createpassword = useCallback(()=>{
      let pass =""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if (numallowed) str += "0123456789"
      if(charall) str += "!@#$%^&*(){}:[]/?"
      for(let i=1;i<=length;i++){
        let password = Math.floor(Math.random()*str.length)
        pass += str.charAt(password)
      }
        setpass(pass)
      

    },[length,numallowed,charall,setpass])  
    let copypassword = useCallback(()=>{
      passref.current?.select()
      window.navigator.clipboard.writeText(pass )
    },[pass])
    useEffect(()=>{
      createpassword()
      
    },[length,numallowed,charall,createpassword])
    
  
  return (
    <>
    <div className='w-full max-w-xl mx-auto shadow-xl rounded-xl px-12 py-10 my-3 bg-gradient-to-r from-gray-600 to-gray-900 transition-transform duration-200 hover:scale-105'>
  <h1 className='text-orange-700 text-center'>Password Generator</h1>

  <div className='w-full max-w-lg mx-auto shadow-2xs rounded-xl my-6 bg-gradient-to-r from-gray-900 to-white-900 bg-gray-700 text-orange-800 '>
    <div className='flex shadow-lg rounded-lg overflow-hidden mb-4'>
      <input
        type="text"
        value={pass}
        className='outline-none w-full py-1 px-3'
        placeholder='Create your Password'
        readOnly
        ref={passref}
      />
      <button
      onClick={copypassword} 
      className='outline-none shadow-2xl rounded-xl bg-gradient-to-r from-gray-900 to-gray-700 text-orange-700 shrink-0 px-4
hover:from-gray-600 hover:to-gray-900 hover:text-orange-500 hover:scale-105 transition-all duration-300'>
  Copy
</button>

      
    </div>

    
  </div>
  <div className='flex justify-center items-center gap-x-2 text-orange-700'>
      <input
        type='range'
        min={6}
        max={25}
        value={length}
        className='cursor-pointer accent-orange-700 transition-transform duration-200 hover:scale-110'
        onChange={(e)=>{setlength(e.target.value)}}
      />
      <label className='text-orange-700'>Length : {length}</label>
  
    <div className='flex items-center gap-x-3'>
      <input 
      type="checkbox"
      defaultChecked={numallowed}
      id="numinput"
      className='accent-orange-700 cursor-pointer transition-transform duration-200 hover:scale-150'
      onChange={()=>{
        setnumallowed((prev)=>!prev);

      }}
      />
      <label>Add Numbers</label>
      
      <div className='flex items-center gap-x-3'>
      <input 
      type="checkbox"
      defaultChecked={charall}
      id="charinput"
      className='accent-orange-700 cursor-pointer cursor-pointer transition-transform duration-200 hover:scale-150'
      onChange={()=>{
        setcharall((prev)=>!prev);

      }}
      />
      <label>Add Symbols</label>
      </div>
      </div>
      </div>
</div>

        
    
     
    
    
    
    
    
    
    
    
    </>
  )
}

export default App
