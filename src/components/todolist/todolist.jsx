import React, {useState} from "react";
import './todolist.css';

function ToDoList() {
    const [todos, setTodos] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTodo = (e) => {
        e.preventDefault();
        if (newTask.trim() !== '') {
            setTodos([...todos, { task: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const toggleComplete = (index) => {
        const updatedTodos = todos.map((todo, i) =>
            i === index ? { ...todos, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
   };

   const deletetodo = (index) => {
    const filteredtodos = todos.filter((_, i) => i !== index);
    setTodos(filteredtodos);
   };

   return (
    <div className="ToDoList">
        <h1>TODo List</h1>
        <form onSumbit={addTodo}>
            <input
            type="text"
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>

        <ul>
            {todos.map((todo, index) => (
                <li key={index} className={todo.completed ? 'completed' : ''}>
                    <span onClick ={() => toggleComplete(index)}>
                        {todo.completed ? <s> {todos.task}</s> : todo.task}
                    </span>
                    <button onClick= {() => deletetodo(index)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
   );
}

export default ToDoList;