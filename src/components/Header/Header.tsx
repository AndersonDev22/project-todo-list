import Styles from './Header.module.css'
import TodoLogo from '../../assets/task.png'

export function Header(){
  return(
    <header className={Styles.header}>
      <img src={TodoLogo} alt='Logo do Ignite'/>
      <strong>
        My To-do List
      </strong>
    </header>
  )
}