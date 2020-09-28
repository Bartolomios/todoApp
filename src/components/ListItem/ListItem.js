import React from 'react'
import styles from './ListItem.module.scss'

const ListItem = ({id, name, date, done, priority, deleteItem, complete, finishDate}) => {

   



    return (
        
        <li className={styles.listItem}>
        <p className={`${styles.taskName} ${priority && styles.priority}`}>{name} - <span className={styles.data}> termin: {date} </span>
        <span className={styles.finishDate}>{finishDate && `Ukończono: ${finishDate}`}</span></p>
        <div>
        {done === false ? <button onClick={() => complete(id)}>Zrobione</button> : ''} 
        <button onClick={() => deleteItem(id)}>X</button>
        </div>        
        </li>
    )
}

export default ListItem;




