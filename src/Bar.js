import React from "react"
import "./App.css"

export class Bar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			content: this.props.content
		}
	}
	
	render() {
		return (
			<div className = {"Bar " + this.props.className}>
				<p>{this.state.content}</p>
			</div>
		)
	}
}

export default Bar