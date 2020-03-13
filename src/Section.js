import React from "react"
import "./App.css"
import Bar from "./Bar.js"

export class Section extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			detailsvisible: "hidden"
		}
		this.handleClick = this.handleClick.bind(this)
	}
	
	handleClick() {
		let temp
		if (this.state.detailsvisible === "hidden") {
			temp = "visible"
		} else {
			temp = "hidden"
		}
		this.setState({
			detailsvisible: temp
		})
	}
	
	render() {
		return (
			<div className = "Section" onClick = {this.handleClick}>
				<Bar content = {this.props.boxname}/>
				<Details
					visible = {this.state.detailsvisible}
					text = {this.props.text}
					/>
			</div>
		)
	}
}

class Details extends React.Component {
	render() {
		return (
			<div className = "Details" style = {{visibility: this.props.visible}}>
				<p>{this.props.text}</p>
			</div>
		)
	}
}

export default Section