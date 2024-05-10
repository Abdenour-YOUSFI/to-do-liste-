import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [newTask,setnewTask]=useState("")
  const [tasks,setTask]=useState([])
  const addTask=()=>{
    setTask([...tasks, newTask])
    console.log(tasks);

  }
  return (
    <div className="App">
     
     <input type="text" placeholder="Ecrivez votre tache" value={newTask} onChange={(e)=>{
      setnewTask(e.target.value)}}/>
      <button onClick={addTask} > Ajouter une tache </button>

    </div>
  );
}

export default App;
