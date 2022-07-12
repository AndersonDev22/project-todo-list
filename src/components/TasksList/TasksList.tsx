import { ChangeEvent, useState } from 'react';
import { Task } from '../Task/Task'
import Styles from './TasksList.module.css'

export function TasksList() {
  const [newTaskText, setNewTaskText] = useState('')

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value);
  }

  const isNewTaskEmpty = newTaskText.length === 0;

  return (
    <div className={Styles.tasksList}>      
      <div className={Styles.tasksListAdd}>
        <input 
        type="text" 
        placeholder='Enter a new task'
        value={newTaskText}
        onChange={handleNewTaskChange}
        required
        />
        <button 
        className={Styles.button} 
        disabled={isNewTaskEmpty}        
        >
          Add task
        </button>
      </div>
      <Task
       content={comment}
       onDeleteTask={deleteTask} />
  
    </div>
  )
}