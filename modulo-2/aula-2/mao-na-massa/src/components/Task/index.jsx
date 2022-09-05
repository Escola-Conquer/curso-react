import React from "react"
 
import { Trash } from "react-feather"
 
import styles from "./styles.module.css"
 
export function Task() {
  return (
    <div className={styles.container}>
      <input type="checkbox"
      className={styles.input}
      />
      <label >task.title</label>
 
      <div className={styles.buttonsWrapper}>
        <button type="button" className={styles.button}>
          <Trash size={16} />
        </button>
      </div>
    </div>
  )
}

