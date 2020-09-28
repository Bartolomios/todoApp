import React from 'react';
import './App.css';
import List from './components/List/List'
import Form from './components/Form/Form'
class App extends React.Component  {

 state = {
   list: [
     { 
       id:0,
       title: "Nauczyc się React",
       done: false,
       date: "02.08.2020",
       finishDate: "",
       priority: false,

     },
     {
       id: 1,
       title: "Przejsć Spyro na PS4",
       done: false,
       date: "12.08.2020",
       finishDate: "",
       priority: false,
     },
     {
       id: 2,
       title: "Napisać program z piosenkami",
       done: false,
       date: "1.08.2020",
       finishDate: "",
       priority: true,
    }, 
     {
       id: 3,
       title: "Posprzątać dom",
       done: false,
       date: "05.08.2020",
       finishDate: "",
       priority: false,
     },   
      {
       id: 4,
       title: "Nauczyć się piosenki na gitarze",
       done: false,
       date: "15.08.2020",
       finishDate: "20.20.2002",
       priority: false,
     }     
  ]

 }
  counter = this.state.list.length

handleDeleteItem = (id) =>{

  const deleteTab=[...this.state.list]
  const index = deleteTab.findIndex(item => (
    item.id===id
  ))
  deleteTab.splice(index,1)
  this.setState({
    list : deleteTab
  })

}
handleDoneTask = (id) =>{
 
  const finishDate = new Date().getTime()
  const finish = new Date(finishDate).toLocaleString();
  const doneTab=[...this.state.list]
  doneTab.forEach(item => {
      
    if(item.id === id){
      item.done = true;
      item.finishDate = finish
    }

  }              
  )
  this.setState({
    list: doneTab
  })

}

addNewTask = (name, date, priority) => {

  const task = {

    id: this.counter,
    title: name,
    done: false,
    date: date,
    finishDate: '',
    priority: priority,

  }
  this.counter++;  
  this.setState(prevState =>
    ({
      list: [...prevState.list, task]
    }))
}
  
  render(){
   
  return (
    <div className="App">
    <Form addTask={this.addNewTask}/>
    <h1>Lista zaplanowanych zadań</h1>
    <List
    list = {this.state.list}
    deleteItem = {this.handleDeleteItem}
    complete = {this.handleDoneTask}
    />
    </div>
  )
  }
}

export default App;
 