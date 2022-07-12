import { Header } from './components/Header/Header'
import Styles from './App.module.css';
import './global.css'
import { TasksList } from './components/TasksList/TasksList';

export function App() {
  return (
    <div>
      <Header />
      <div className={Styles.wrapper}>
        <TasksList/>        
      </div>
    </div>
  )
}
