import React from "react";
import ProfilePhoto from "./ProfilePhoto.js";
import Reactions from "./Reactions.js";
import Comments from "./Comments.js";
//import DatesUntil from "./DatesUntil.js";
import { getDays } from "../lib/Util.js";  

class Post extends React.Component {  
	constructor( props ){
		super( props )
			this.state = {
				username: undefined,
				text: undefined,
				photo: undefined,
				untilName: undefined,
				untilNumber: undefined,
				reactions: undefined,
				comments: undefined,
				type: undefined
			}
	}
 
	componentWillMount() {
		this.setState({
			username: this.props.username,
			text: this.props.text,
			photo: this.props.photo,
			untilName: getDays(this.props.date)[0],
			untilNumber: getDays(this.props.date)[1],
			reactions: this.props.reactions,
			comments: this.props.comments,
			type: this.props.type
		}) 
	} 
	render() {
		if( this.state.type === "post" ) {
			return (
				<div className="post">
					<ProfilePhoto 
						photo={this.state.photo}
						alt={this.state.username}
					/> 

					<p className="post__username">{this.state.username}</p>
					<p className="post__until until">
						Hace <span className="until__number">{this.state.untilNumber}</span> <span className="until__name">{this.state.untilName}</span> 
					</p>

					<p className="post__text">{this.state.text}</p> 

					<Reactions 
						reactions={this.state.reactions}
					/>

					<Comments
						comments={this.state.comments	} />	
				</div> 
			)	
		}
		else if( this.state.type === "comment" ) {
			return (
				<div className="comment">
					<ProfilePhoto 
						photo={this.state.photo}
						alt={this.state.username}
					/> 

					<p className="comment__username">{this.state.username}</p>
					<p className="comment__until until">
						Hace <span className="until__number">{this.state.untilNumber}</span> <span className="until__name">{this.state.untilName}</span> 
					</p>

					<p className="comment__text">{this.state.text}</p> 
				</div> 
			)	
		}
	}
}
 
export default Post; 