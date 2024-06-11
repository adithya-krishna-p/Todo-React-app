import React from 'react'
import { Addtask } from './Addtask'

const Listtasks = ({task, index, removetask}) => {
  return (
    <>
    <div className='List-tasks'>
      <button onClick={()=> {removeTask(index)}} className='delete-btn'>Delete</button>
    </div>
    </>
    
  )
}

export default Listtasks;
