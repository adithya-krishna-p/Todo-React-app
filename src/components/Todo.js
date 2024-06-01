import React, { useState } from 'react'
import '../components/Todoo.css'
import { Addtask } from './Addtask'
import { Listtasks } from './Listtasks'

export const Todo = () => {
  const [tasks, setTasks] = useState(
    [
      {title: "learn Html"},
      {title: "learn css"},
      {title: "learn javascript"}
    ]
  )
  return (
    
    <div className='Todo-container'>
      <div className='header'>Todo App</div>
      <div className='addtask'>
        <Addtask />
      </div>
      <div className='tasks'>
      {
        tasks.map((task)=>(
          <Listtasks task={task} /> 
        ))
      }
        
      </div>
    </div>
  )
}
