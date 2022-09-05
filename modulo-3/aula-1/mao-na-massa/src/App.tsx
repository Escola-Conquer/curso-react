import {useState} from 'react'
import {Task} from './components/Task/index'
import { Plus } from "react-feather"
 
import styles from "./styles/pages/home.module.css"
 
import { CreateTaskModal } from './components/CreateTaskModal'
 
import Modal from "react-modal"
 
Modal.setAppElement("#root")
 
function App() {
 
  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);;
 
  function handleRequestCloseCreateTaskModal() {
    setIsCreateTaskModalOpen(false)
  }

  return (
    <div className="App">
      <section className={styles.container}>
        <header className={styles.header}>
          <h1>Minhas tarefas</h1>
          <button type="button"
          className={styles.addTaskButton}
          onClick={() => setIsCreateTaskModalOpen(true)}>
            Adicionar uma nova tarefa
            <Plus />
          </button>

        </header>
        <div className={styles.tasks}>
          <Task />
        </div>
      </section>
      <CreateTaskModal
      isOpen={isCreateTaskModalOpen}
      onRequestClose={handleRequestCloseCreateTaskModal}/>

    </div>
  )
}
export default App
