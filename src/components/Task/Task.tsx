import { Trash } from 'phosphor-react'
import Styles from './Task.module.css'

interface TaskProps {
  content: string;
  onDeleteTask: (task: string) => void
}
export function Task({ content, onDeleteTask }:TaskProps) {

  function handleDeleteTask() {
    onDeleteTask(content)
  }

  return (
    <div className={Styles.container}>
      <div>
        <strong>Estudar Fundamentos React</strong>
      </div>
      <div className={Styles.buttons}>
        <input 
        type="checkbox"
        onClick={handleDeleteTask} 
        />
        <button 
        title="Delete task"
        onClick={handleDeleteTask}
        >
          
          <Trash size={24} />
        </button>
      </div>
    </div>
  )
}
