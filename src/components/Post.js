import React from "react";
import ProfilePhoto from "./ProfilePhoto.js";
//import DatesUntil from "./DatesUntil.js";
import { getDays } from "../lib/Util.js";  

class Post extends React.Component {  
	constructor( props ){
		super( props )
			this.state = {
				username: undefined,

				text: undefined,
			}
	}
 
	componentWillMount() {

		this.setState({
			username: this.props.username,
			text: this.props.text,
		}) 
	} 
	render() {
		return (
			<div className="post">
				<ProfilePhoto 
					photo={this.props.photo}
					alt={this.state.username}
				/> 

				<p className="post__username">{this.state.username}</p>
				{getDays(this.props.date)}
				<p className="post__text">{this.state.text}</p> 
			</div> 
		)
	}
}
 
export default Post; 