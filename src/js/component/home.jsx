import React, {  useState } from "react";
import Form from "./form.jsx";

const Home = () => {

	return (
		<div className="text-center" style={{ marginTop: "1rem" }} id = 'font-link'>
			
			<h3 style={{ color: "rgb(255, 0, 0)", fontSize: "5rem" }}>
					TO DO LIST
				</h3>
				<Form />

		</div>
	);
};

export default Home;