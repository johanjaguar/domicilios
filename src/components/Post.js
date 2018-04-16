import React from "react";
import ProfilePhoto from "./ProfilePhoto.js";
import Reactions from "./Reactions.js";
import Comments from "./Comments.js";

import { getDays } from "../lib/Util.js";  

import "../scss/common/general.scss";
import "../scss/components/Post.scss";


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
				type: undefined, 
				numberComments: undefined
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
			type: this.props.type,
			numberComments: this.props.comments.length
		}) 
	} 
	render() {
		if( this.state.type === "post" ) {
			return (
				<div className="post">
					<div className="post__1">
						<ProfilePhoto 
							photo={this.state.photo}
							alt={this.state.username}
						/> 
						<div className="post__info">
							<h3 className={this.state.type + `__username`}>{this.state.username}</h3>
							<h4 className="post__until until">
								Hace <span className="until__number">{this.state.untilNumber}</span> <span className="until__name">{this.state.untilName}</span> 
							</h4>

							<p className="post__text">{this.state.text}</p>
						</div>
					</div>
					<div class="post__2">
						<Reactions 
							reactions={this.state.reactions}
						/>
						<div class="comments__number">
							{this.state.numberComments + " comentario" + ((this.state.numberComments !== 1)? "s":"")}
						</div>
					</div>
					

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
					<div className="comment__info">
						<h3 className="comment__username">{this.state.username}</h3>

						<p className="comment__text">{this.state.text}</p> 

						<h4 className="comment__until until">
							Hace <span className="until__number">{this.state.untilNumber}</span> <span className="until__name">{this.state.untilName}</span> 
						</h4>
					</div>
	
					

				</div> 
			)	
		}
	}
}
 
export default Post; 