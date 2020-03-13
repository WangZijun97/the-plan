import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bar from "./Bar.js"
import Section from "./Section.js"

function App() {
	return (
		<div className = "App">
			<div className = "header">
				<h1> The Plan (WIP) </h1>
				<p> Click on each box for details. Maybe we can use this for future stuffs LOL </p>
			</div>
			<div className = "App-content borders">
				<h3>Sec 1</h3>
				<Section 
					boxname = "Introductory"
					text = "What is RCY?"
					/>
				<Section
					boxname = "Exploratory"
					text = "Who are the people in the community around us?"
					/>
			</div>
			<div className = "App-content borders">
				<h3>Sec 2</h3>
				<Section
					boxname = "Paving"
					text = "Who are these people whom we interact with?"
					/>
				<Section
					boxname = "Building"
					text = "How can we enhance our interactions with this community?"
					/>
				<Section
					boxname = "Record"
					text = "paperwork ; _ ; for EUA!"
					/>
			</div>
		</div>
	)
}

export default App;
