import React from 'react'
import Listitem from '../ListItem/ListItem'
import styles from './List.module.scss'

const List = (props) => {
   
    const active = props.list.filter(item => (
        item.done === false
    ));
    const done = props.list.filter(item =>(
        item.done === true
    ));

    active.sort((a, b) => {
        if (b.title > a.title){
            return -1;
        }
        
        if (b.title < a.title) {
                return 1;
            }
       return 0;
    })
    

    const activeTasks = active.map(item => (
    <Listitem
        key={item.id}
        id={item.id}
        name={item.title}
        date={item.date}
        done={item.done}
        priority={item.priority}
        deleteItem={props.deleteItem}
        complete={props.complete} />
    ))
   
    

    const doneTasks = done.map(item => (
        <Listitem
            key={item.id}
            id={item.id}
            name={item.title}
            date={item.date}
            done={item.done}
            finishDate={item.finishDate}
            deleteItem={props.deleteItem}
            />
    ))
    const activeTasksLenght = Object.keys(activeTasks).length;
    const doneTasksLenght = Object.keys(doneTasks).length;           
    return (
        <>
        <ul className={styles.listActive}>
                {activeTasksLenght > 0 ? activeTasks : <p>Brak bieżących zadań</p>}
        </ul>
        <h2>Skończone zadania</h2>
        <ul className={styles.listDone}>
                {doneTasksLenght > 0 ? doneTasks : <p>Nie ukończono żadnego zadania</p>}
        </ul>
        </>
    )
}
export default List;