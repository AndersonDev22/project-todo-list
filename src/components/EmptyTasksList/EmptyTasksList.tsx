import styles from './EmptyTasksList.module.css'
import Task from '../../assets/task.png';

export function EmptyTasksList() {
  return (
    <div className={styles.container}>
      <img src={Task} alt="" />
      <div className={styles.create}>
        <strong>
          You don't have any tasks registered yet.</strong>
        <p>
          Create tasks for your day!</p>
      </div>
    </div>
  )
}