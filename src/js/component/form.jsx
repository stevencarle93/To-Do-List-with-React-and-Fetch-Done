import React, {  useState } from "react";
/*import Font from 'react-font';*/
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
		/*<div className="text-center" style={{ marginTop: "1rem" }}>
			
			<form id="formulario" onSubmit={infoSubmited}>
				<div className="form-group d-flex justify-content-center">	
				<Font family='Fredericka the Great'>				
						<input className="form-control" type="text" 
							name="task" style={{width: "50rem"}}
							id="task" placeholder="what do you want to do?"
							value={input} onChange={(handleChange)}/>
					</Font>
				</div>
				<div className="form-group" style={{ marginTop: "1rem" }}>					
					<Font family='Fredericka the Great'>
						<button type="submit" className="btn btn-light" 
						style={{background: "white"}}>
							Submit
						</button>
					</Font>
				</div>
			</form>

			<TaskList tasks={allTasks}/>

		</div>*/

        <div className="text-center" style={{ marginTop: "1rem" }}>
			
			<form id="formulario" onSubmit={infoSubmited}>
				<div className="form-group d-flex justify-content-center">	
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

		</div>
	);
};