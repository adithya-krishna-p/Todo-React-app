import React, { useState } from 'react'
import '../components/Todoo.css'

export const Addtask = () => {
    const [value, setvalue] = useState('');
  return (
    <>
    <div className='input-container'>
        <input type='text' className='input' placeholder='Add a new tasks' 
        onChange={(e)=> (e.target.value) }></input>
        <button className='add-button'>Add</button>
    </div>
        
    </>
  )
}
