import React from "react";
import reactions from "../assets/images/reactions.png";  
import "../scss/components/Reactions.scss";
 
class Reactions extends React.Component {
	constructor( props ) {
		super( props )
			this.state = {
				reactions: [],
				error: undefined,
				total: undefined
			}
	} 
	
	componentWillMount() {
		if(this.props.reactions.length > 0) {
			let totalReactions = 0;
			this.props.reactions.map((reaction) => { 
				 totalReactions = totalReactions + reaction.number
			});
			
			this.setState({
				reactions: this.props.reactions,
				error: "",
				total: totalReactions
			})	
		}
		else {
			this.setState({
				reactions: [],
				error: "No have reactions",
				total: undefined
			})	
		}
	}
	render() { 
		return ( 
			<div className="reactions">
				<img className="reactions__img" src={reactions} /> 
				<div className="reactions__total">
					{this.state.total}
				</div>
			</div>
		)
	}
}

export default Reactions; 
