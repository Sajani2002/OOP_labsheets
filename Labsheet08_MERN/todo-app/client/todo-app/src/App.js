import React, {useState,useEffect} from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(()=>{
    fetch('http://localhost:5000/api/tasks')
    .then(response=>response.json())
    .then(data=>setTasks(data));
  },[]);

  const addTask = () =>{
    fetch('http://localhost:5000/api/tasks',{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({title}),
    })
    .then(response=>response.json())
    .then(newTask=>setTasks([...tasks, newTask]));
    setTitle('');
  };

  const deleteTask = (id)=>{
    fetch(`http://localhost:5000/api/tasks/${id}`,{
      method: 'DELETE',
    })
    .then(() => setTasks(tasks.filter(task => task._id !==id)));
  };

  return(
    <div>
      <h1>ToDo-List</h1>
      <input 
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="New task"/>
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key ={task._id}>
            {task.title}
            <button onClick={() => deleteTask(task._id)}>Delete</button>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
