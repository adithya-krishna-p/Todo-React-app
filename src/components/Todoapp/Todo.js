import React, { useState } from 'react'
import './Todoo.css'
import { Addtask } from './Addtask'
import Listtasks from './Listtasks'

export const Todo = () => {
  const [tasks, setTasks] = useState(
    [
      {title: "Html"},
      {title: "Html"},
      {title: "Html"},
    ]
  );

  const AddTask = (title) => {
    const newTask = [...tasks, { title }]
    setTasks(newTask);
  };
  return (

    <div className='Todo-container'>
      <div className='header'>Todo App</div>
      <div className='addtask'>
        <Addtask AddTask={AddTask} />
      </div>
      <div className='tasks'>
        {
          tasks.map((task, index) => (
            <Listtasks task={task}/>
          ))
        }

      </div>
    </div>
  )
}
