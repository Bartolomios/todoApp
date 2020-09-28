import React, { Component } from 'react'
import styles from './Form.module.scss'
class Form extends Component{
    
    state = {
       
            name: "",
            date: "",
            priority: false,
        }

   
    
    handlerTaskNameChange = (e) =>{
        const name = e.target.value
        this.setState({
        name
        })
    }
    handleCheckboxOnChange = () =>
    {
        this.setState(
        {
        priority: !this.state.priority
        }
        )
    }
    handlerDateSet = (e) =>{
        const date = e.target.value
        this.setState({
            date
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        const { name, date, priority } = this.state;
        if(name.length >= 4){
        this.props.addTask(name,date,priority);
        
        this.setState({
            name: '',
            date: null,
            proprity: false

        })
            e.target.reset();
        
        }
        else{
            alert("minimum 4 znaki")
        }
        
    }

    render(){
        

        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <h1>Dodaj zadanie</h1>
            <label>
            <input className={styles.nameInput} required type="text" onChange={this.handlerTaskNameChange} placeholder="Dodaj zadanie"></input>
            </label>
            <label>
            Zadanie z priorytetem
            <input onChange={this.handleCheckboxOnChange} type="checkbox"></input>
            </label>
            <label>
                <p>Do kiedy zrobić?</p>
                <input required onChange={this.handlerDateSet} type="date"></input>
            </label>
            <button type="submit">Prześlij</button>
            </form>
        )


        }   
}

export default Form


