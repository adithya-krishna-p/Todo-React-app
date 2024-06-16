import React, { useState } from 'react'
import './Todoo.css'

export const Addtask = ({AddTask}) => {
    const [value, setValue] = useState('');

    const additem = () => {
      AddTask(value);
      setValue("");
    };
  return (
    <>
    <div className='input-container'>
        <input type='text' 
        className='input' 
        placeholder='Add a new tasks' 
        value={value}
        onChange={(e)=> { setValue(e.target.value);  
         }}></input>
        <button onClick={additem} className='add-button'>Add</button>
    </div>
        
    </>
  )
}
