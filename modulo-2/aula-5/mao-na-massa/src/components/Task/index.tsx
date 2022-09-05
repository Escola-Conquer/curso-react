import React from "react"
 
import { Trash } from "react-feather"
 
import styles from "./styles.module.css"
 
export function Task({task, handleToggleTask, handleRemoveTask}) {
  return (
    <div className={styles.container}>
      <input type="checkbox"
      className={styles.input}
      onClick={() => handleToggleTask(task)}
      />
      <label >task.title</label>
 
      <div className={styles.buttonsWrapper}>
        <button type="button" className={styles.button}
        onClick={() => handleRemoveTask(task.id)}>
          <Trash size={16} />
        </button>
      </div>
    </div>
  )
}
