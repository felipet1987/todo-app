import React, { useState } from "react";
import axios from 'axios'


const TaskList = (props) => {
    const [tasks, setTasks] = useState([]);

    const allTask = async () => {
        const res = await axios.get('http://localhost:8080/task/all');
        setTasks(res.data)
    }

    const resolveTask = async (id) => {
        const res = await axios.get('http://localhost:8080/task/resolve');
        setTasks(res.data)
    }

    return (
        <div>
            <button onClick={() => allTask()}>Actualizar</button>
            <p>Tareas:</p>
            <table>
                <tr>
                    <th>id</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Resuelto?</th>
                    <th>accion</th>
                </tr>
                    {tasks.map(t => (
                        <tr key={t._id}>
                            <td> {t._id}</td>
                            <td>{t.name}</td>
                            <td>{t.description}</td>
                            {/* <td>{t.resolved}</td> */}
                            <td><button onClick={resolveTask(t._id)}>resolver</button></td>
                        </tr>
                    ))}
            </table>
        </div>
    );
}

export default TaskList