import Modal from "react-modal"
import { X } from "react-feather"
import styles from "./styles.module.css"
import {useState, FormEvent} from "react"

import { ICreateTaskModalProps } from "./types"

export function CreateTaskModal({isOpen, onRequestClose, tasks, setTasks}: ICreateTaskModalProps) {

  const [newTask, setNewTask] = useState("")

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    if (newTask === '') {
      return
    }

    setTasks((prevState) => {
      return [...prevState,
      {
        id: tasks.length +1,
        title: newTask,
        isCompleted: false,
      }]
    })

    setNewTask('')
    onRequestClose()

  }


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className={styles.container}
    >
      <button
        type="button"
        onClick={() => onRequestClose()}
        className={styles.closeButton}
      >
        <X size={16} />
      </button>

      <h1>Adicionar tarefa</h1>

      <form onSubmit={handleCreateNewTask}>
        <label htmlFor="task">Título da tarefa</label>
        <input
          type="text"
          name="task"
          placeholder="Digite aqui"
          onChange={(event) => setNewTask(event.target.value)}
          value={newTask}
        />

        <button type="submit" className={styles.button}>
          Adicionar
        </button>
      </form>
    </Modal>
  )
}
