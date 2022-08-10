import React, {  useState } from "react";
import TaskList from "./task_list.jsx";

export default function Form() {

	const [tasks, setTask] = useState([])
	const [input, setInput] = useState("")

	const handleChange = (event) => {
		setInput(event.target.value)
	}

	const infoSubmited = (event) => {
		event.preventDefault()
		const data = new FormData(event.target)
		setTask([...tasks, data.get("task")])	
		event.target.reset()
	}

	const removeTask = indexItem => {
		setTask(prevState =>
			prevState.filter((todo, index) => index !== indexItem)
		);
	};

	let allTasks = tasks.map((elements, index) => 
				<li key={index.toString()} className="list-group-item d-flex justify-content-between"> 
					{elements} 
					<button onClick={() => removeTask(index)}>
						Remove
					</button>
				</li>)
				

	return (

        <div className="text-center" style={{ marginTop: "1rem" }}>
			
			<form id="Form" onSubmit={infoSubmited}>
				<div className="form-group d-flex justify-content-center" id = 'font-link'>	
                        <input className="form-control" type="text" 
							name="task" style={{width: "50rem"}}
							id="task" placeholder="what do you want to do?"
							value={input} onChange={(handleChange)}/>
				</div>
				<div className="form-group" style={{ marginTop: "1rem" }}>					
                        <button type="submit" className="btn btn-light" 
						    style={{background: "white"}}>
							Submit
						</button>
				</div>
			</form>

			<TaskList tasks={allTasks}/>
			<h3>
				Tasks pending: {tasks.length}
			</h3>
		</div>
	);
};