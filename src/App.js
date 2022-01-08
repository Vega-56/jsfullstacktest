import "./App.css";
import { useState, useEffect } from "react";
function App() {
	const [expressData, setExpressData] = useState(null);

	useEffect(() => {
		// Here we fetch from the endpoint we defined in our server.js
		fetch("/api/my_sick_url")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setExpressData(data);
			});
	}, []);

	return (
		<div className="App">
			<p className="apitext">
				{!expressData ? "loading.." : expressData.express}
			</p>
		</div>
	);
}

export default App;
