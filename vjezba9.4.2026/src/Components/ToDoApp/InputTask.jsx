// InputTask.jsx
import { useState } from "react";
import { Tasks } from "./Tasks";

export const InputTask = () => {
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState("");

    // Dodavanje novog taska
    const addTask = () => {
        if (currentTask.trim() === "") return; // ne dodaj prazno
        setTasks(prev => [...prev, { text: currentTask, done: false }]);
        setCurrentTask(""); // reset inputa
    };

    // Funkcija za završavanje taska
    const finishTask = (index) => {
        setTasks(prev =>
            prev.map((task, i) =>
                i === index ? { ...task, done: true } : task
            )
        );
    };

    const deleteTask = (index) => {
        setTasks(prev => prev.filter((_, i) => i !== index))
    }

    return (
        <div>
            <input
                placeholder="Enter task"
                value={currentTask}
                onChange={e => setCurrentTask(e.target.value)}
            />
            <button onClick={addTask}>Dodaj task</button>

            <Tasks tasks={tasks} finishTask={finishTask} deleteTask={deleteTask} />
        </div>
    );
};