import { Header } from './components/Header/Header'
import Styles from './App.module.css';
import './global.css'
import { FormTasks } from './components/Task/Task';

export function App() {
  return (
    <div className={Styles.wrapper}>
      <Header />
      <FormTasks />   
    </div>
  )
}
