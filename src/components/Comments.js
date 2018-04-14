import React from "react";
import Post from "./Post.js";
import "../scss/components/Comments.scss";
 
class Comments extends React.Component {
	constructor( props ) {
		super( props )
			this.state = {
				comments: [],
				error: undefined
			}
	} 
	
	componentWillMount() {
		if(this.props.comments.length > 0) {
			this.setState({
				comments: this.props.comments,
				error: ""
			})	
		}
		else {
			this.setState({
				comments: [],
				error: "No have reactions"
			})	
		}
		
	}
	render() { 
		
		return ( 
			<div className="comments">
				{this.state.comments.map((comment, index) =>
					<Post 
						username={comment.user.name} 
						date={comment.date} 
						text={comment.text}
						photo={comment.user.image}
						reactions={[]}
						comments={[]}
						type={"comment"}
					/> 
																)}
			</div>
		)
	}
}

export default Comments; 
