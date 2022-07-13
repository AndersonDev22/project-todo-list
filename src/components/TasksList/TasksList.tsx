import { Trash } from 'phosphor-react'
import { useState } from 'react'
import styles from './TasksList.module.css'

type TaskList = {
  id: string
  task: string
  isCompleted: boolean
}

interface TasksListProps {
  task: TaskList
  onDeleteTask: (taskId: string) => void
  onChangeTaskIsCompleted: (taskId: string) => void
}

export function TasksList({
  task,
  onDeleteTask,
  onChangeTaskIsCompleted,
}: TasksListProps) {
  const [isChecked, setIsChecked] = useState(task.isCompleted)

  function handleDeleteTask() {
    onDeleteTask(task.id)
  }

  function handleChangeTask() {
    onChangeTaskIsCompleted(task.id)
  }

  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        id={task.id}
        onClick={handleChangeTask}
        onChange={(event) => setIsChecked(event.target.checked)}
        checked={isChecked}
      />
      <label htmlFor={task.id} />
      <p>{task.task}</p>
      <button title="Delete Task" onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </div>
  )
}
