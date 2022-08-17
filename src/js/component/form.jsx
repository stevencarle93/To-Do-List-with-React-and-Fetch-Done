import React, { useState, useEffect } from "react";
import TaskList from "./task_list.jsx";

export default function Form() {
  const [tasks, setTask] = useState([]);
  const [input, setInput] = useState("");
  const apiUrl = "https://assets.breatheco.de/apis/fake/todos/user/stevenc";

  useEffect(async () => {
    // componentDidMount
    /*fetch(apiUrl)
		.then(res=>{
			if(res.ok) return res.json()
			else{
				// Crear la lista con post
				createList()
			}
		})
		.then(data=>setTask(data))
		.catch(error=>console.error(error))*/

    /*  let response = await fetch(apiUrl) //obj promesa
		if(response.ok){
			response = await response.json() //obj javascript
		}else{
			createList()
		}*/

    try {
      let response = await fetch(apiUrl); //obj promesa
      response = await response.json(); //obj javascript
    } catch {
      createList();
      console.log("effect");
    }
  }, []);

  useEffect(() => {
    // componentDidUpdate
    console.log(tasks);
    fetch(apiUrl, {
      method: "PUT",
      body: JSON.stringify(tasks),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log(res.status + ": " + res.statusText);
      })
      .catch((error) => console.error(error));
  }, [tasks]);

  const createList = () => {
    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify([]),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => console.log(res.status))
      .catch((error) => console.error(error));
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const infoSubmitted = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    setTask([
      ...tasks,
      {
        label: `Task: ${data.get("task2")} ; Status `,
        done: false,
      },
    ]);
    event.target.reset();
  };

  const removeTask = (indexItem) => {
    setTask((prevState) =>
      prevState.filter((todo, index) => index !== indexItem)
    );
  };

  const removeUserTasks = () => {
	console.log(tasks);
    fetch(apiUrl, {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
		}
	)
  };

  let allTasks = tasks.map((elements, index) => {
    if (tasks != "")
      return (
        <li
          key={index}
          className="list-group-item d-flex justify-content-between"
        >
          {elements.label}: {elements.done ? "Done" : "Pending"}
          <button onClick={() => removeTask(index)}>Remove</button>
        </li>
      );
    else return "No task";
  });

  return (
    <div className="text-center" style={{ marginTop: "1rem" }}>
      <form id="Form" onSubmit={(e) => infoSubmitted(e)}>
        <div
          className="form-group d-flex justify-content-center"
          id="font-link"
        >
          <input
            className="form-control"
            type="text"
            name="task2"
            style={{ width: "50rem" }}
            id="task"
            placeholder="what do you want to do?"
            value={input}
            onChange={handleChange}
          />
        </div>
        <div className="form-group" style={{ marginTop: "1rem" }}>
          <button
            type="submit"
            className="btn btn-light"
            style={{ background: "white" }}
          >
            Submit
          </button>
        </div>
      </form>

      {
        //<TaskList tasks={allTasks}/>
        allTasks
      }
      <h3>Tasks pending: {tasks.length}</h3>
	  <button onClick={() => removeUserTasks()}>Remove all</button>
	  <button onClick={() => createList()}>Create List API</button>
    </div>
  );
}
