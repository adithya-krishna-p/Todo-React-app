import React from 'react'
import { Addtask } from './Addtask'

const Listtasks = ({tasks}) => {
  return (
    <>
      <div className='List-tasks'>
      {tasks}
        <button className='delete-btn'>Delete</button>
      </div>
    </>

  )
}

export default Listtasks;
