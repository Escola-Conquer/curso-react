import {useState, useEffect} from 'react'
import {Task} from './components/Task/index'
import { Plus } from "react-feather"

import { ITaskProps } from './components/Task/types'

import styles from "./styles/pages/home.module.css"

import { CreateTaskModal } from './components/CreateTaskModal'

import Modal from "react-modal"

Modal.setAppElement("#root")

function App() {
  const [tasks, setTasks] = useState<ITaskProps []>(() => {
    const tasksfromLocalStorage = localStorage.getItem("tasks")

    if(!tasksfromLocalStorage) {
      return []
    }

    return JSON.parse(tasksfromLocalStorage)
  })

  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);

  function handleToggleTask(clickedTask: ITaskProps) {
    setTasks((prevState) => {
      return prevState.map((task) => {
        if (task.id === clickedTask.id) {
          return {
            ...task, isCompleted: !task.isCompleted
          }
        }
        return task
      })
    })
  }

  function handleRemoveTask(taskId: number) {
    setTasks((prevState) => {
      return prevState.filter((task) => 
        task.id !== taskId)
    })
  }

  function handleRequestCloseCreateTaskModal() {
    setIsCreateTaskModalOpen(false)
  }

  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])

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
          {tasks?.map((task) => (
            <Task
            key={task.id}
            task={task}
            handleToggleTask={handleToggleTask}
            handleRemoveTask={handleRemoveTask}
            />))}
        </div>
      </section>
      <CreateTaskModal 
      isOpen={isCreateTaskModalOpen}
      onRequestClose={handleRequestCloseCreateTaskModal}
      tasks={tasks}
      setTasks={setTasks}/>
    </div>
  )
}
export default App
