import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { v4 as ids } from 'uuid'
import { EmptyTasksList } from '../EmptyTasksList/EmptyTasksList'
import { TasksList } from '../TasksList/TasksList'
import styles from './Task.module.css'

interface TaskList {
  id: string
  task: string
  isCompleted: boolean
}

export function FormTasks() {
  const [task, setTask] = useState('')
  const [tasksList, setTasksList] = useState<TaskList[]>([])
  const numberOfTasksCompleted = tasksList.filter((task) => task.isCompleted === true)

  useEffect(() => {
    const storagedTasksList = window.localStorage.getItem('myTodoList')

    if (storagedTasksList) {
      setTasksList(JSON.parse(storagedTasksList))
    }
  }, [])

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    const newTask = {
      id: ids(),
      task: task,
      isCompleted: false,
    }

    setTasksList([...tasksList, newTask])

    window.localStorage.setItem(
      'myTodoList',
      JSON.stringify([...tasksList, newTask]),
    )

    setTask('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value)
  }

  function changeTaskIsCompleted(taskId: string) {
    const newTasks = tasksList.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task
    })

    setTasksList(newTasks)

    window.localStorage.setItem('myTodoList', JSON.stringify(newTasks))
  }

  function deleteTask(taskId: string) {
    const tasksWithoutDeletedOne = tasksList.filter((task) => {
      return task.id !== taskId
    })

    setTasksList(tasksWithoutDeletedOne)

    window.localStorage.setItem('myTodoList',JSON.stringify(tasksWithoutDeletedOne),
    )
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleCreateNewTask} className={styles.createdNewTask}>
        <input
          type="text"
          placeholder="Enter new task"
          onChange={handleNewTaskChange}
          value={task}
        />
        <button type="submit" disabled={!task}>
          Add new task
        </button>
      </form>

      <main>
        <div className={styles.counters}>
          <div className={styles.tasksCreated}>
          <p>Tasks Created:</p>
            <span className={styles.counterTasksCreated}>{tasksList.length}</span>
          </div>
          <div>
            {tasksList.length !== 0 ? (
              <div className={styles.counterTasksCompleted}>
                <p>Tasks Completed:</p>
                <span className={styles.counter}>
                  {numberOfTasksCompleted.length} de {tasksList.length}
                </span>
              </div>
            ) : (
              <div className={styles.counterTasksCompleted}>
                <p>Completed:</p>
                <span className={styles.counter}>0</span>
              </div>
            )}
          </div>
        </div>

        {tasksList.length !== 0 ? (
          tasksList.map((task) => {
            return (
              <TasksList
                key={task.id}
                task={task}
                onDeleteTask={deleteTask}
                onChangeTaskIsCompleted={changeTaskIsCompleted}
              />
            )
          })
        ) : (
          <EmptyTasksList />
        )}
      </main>
    </div>
  )
}
