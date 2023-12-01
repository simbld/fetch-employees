import DisplayEmployee from './components/DisplayEmployee';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
	const [employee, setEmployee] = useState(null);
	const getEmployee = () => {
		axios.get('https://randomuser.me/api?nat=en').then((response) => {
			setEmployee(response.data.results[0]);
		});
	};
	useEffect(() => {
		getEmployee();
	}, []);

	return (
		<>
			<div className="App">
				<DisplayEmployee employee={employee} />
				<button type="button" onClick={getEmployee}>
					Get employee
				</button>
			</div>
		</>
	);
}

export default App;
