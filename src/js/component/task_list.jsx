import React, {  useState } from "react";

export default function TaskList(props) {
	
	let taskList = ""
	if(props.tasks != "")
		taskList = props.tasks 
	else 
		taskList = "No task"

	return (
        <div className="d-flex justify-content-center" style={{ marginTop: "2rem" }}>
            <ul className="list-group list-group-flush" style={{width: "50rem"}}>
					{taskList}						
			</ul>
		</div>
	);
};