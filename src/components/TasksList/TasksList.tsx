import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { EmptyTasksList } from '../EmptyTasksList/EmptyTasksList';
import Styles from './TasksList.module.css'

export function TasksList() {
  const [tasks, setTasks] = useState([''])

  const [newTasks, setNewTasks] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    setTasks([...tasks, newTasks])
    setNewTasks('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTasks(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  const isNewTaskEmpty = newTasks.length === 0;

  return (
    <div className={Styles.tasksList}>      
      <div className={Styles.tasksListAdd}>
       
        <input 
        type="text" 
        placeholder='Enter a new task'
        value={newTasks}
        onChange={handleNewTaskChange}
        onInvalid={handleNewTaskInvalid}
        required
        />

        <button 
        type='submit'
        className={Styles.button} 
        disabled={isNewTaskEmpty}
        onClick={handleCreateNewTask}        
        >
          Add task
        </button>
      </div>
      <EmptyTasksList/>
  
    </div>
  )
}
