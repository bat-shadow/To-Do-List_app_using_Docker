import { useEffect, useState } from "react";

function App() {

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const response = await fetch("http://localhost:5000/tasks");
    const data = await response.json();
    setTasks(data);
  };

  const addTask = async () => {
    if (!title) return;

    await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    setTitle("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container mt-5">

      <h2 className="text-center mb-4">Todo List</h2>

      <div className="input-group mb-3">
        <input
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task"
        />

        <button className="btn btn-primary" onClick={addTask}>
          Add
        </button>
      </div>

      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between"
          >
            {task.title}

            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;