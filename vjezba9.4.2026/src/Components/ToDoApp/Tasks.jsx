// Tasks.jsx
export const Tasks = ({ tasks, finishTask, deleteTask }) => {
    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                    <span style={{ textDecoration: task.done ? "line-through" : "none" }}>
                        {task.text}
                    </span>
                    {!task.done && (
                        <button onClick={() => finishTask(index)}>Završi</button>
                    )}
                    <button onClick={() => deleteTask(index)}>Obriši</button>
                </li>
            ))}
        </ul>
    );
};