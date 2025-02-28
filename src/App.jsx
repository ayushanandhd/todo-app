import { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  function addTask() {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask(""); 
    }
  }

  function removeTask(index){
      setTasks(tasks.filter((_,i)=> i!== index))
  }

  return (
    <div className="container w-75">
      <h1 className="title">Todo List ✅</h1>

      <div className="add-task d-flex w-50">
        <input
          type="text"
          placeholder="Add task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="form-control w-100"
        />
        <button className="btn btn-primary m-2" onClick={addTask}>Add</button>
      </div>

      <ul className="task-list list-group w-50 d-flex ">
        {tasks.map((t, index) => (
          <li className="list-group-item d-flex align-items-center" key={index}>
            <span>{t}</span>
            <button onClick={()=>{removeTask(index)}} className="btn btn-danger m-2 ms-auto">delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
