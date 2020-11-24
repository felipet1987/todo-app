
import React, { useState } from "react";
import axios from 'axios'




const TaskForm = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const createTask = () =>{
    axios.post('http://localhost:8080/task/save', {
      name: name,
      description: description
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }


  const handleSubmit = (evt) => {
    evt.preventDefault();
    createTask()
  }



  return (
    <form onSubmit={handleSubmit}>
      <label>
        name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        descripcion:
        <input
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default TaskForm
