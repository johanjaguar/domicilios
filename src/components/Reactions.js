import React from "react";
import "../scss/components/Reactions.scss";
 
class Reactions extends React.Component {
	constructor( props ) {
		super( props )
			this.state = {
				reactions: [],
				error: undefined
			}
	} 
	
	componentWillMount() {
		console.log(this.props.reactions)
		console.log(typeof(this.props.reactions))
		if(this.props.reactions.length > 0) {
			this.setState({
				reactions: this.props.reactions,
				error: ""
			})	
		}
		else {
			this.setState({
				reactions: [],
				error: "No have reactions"
			})	
		}
		
	}
	render() { 
		
		return ( 
			<div className="reactions">
				{this.state.reactions.map((reaction, index) =>
					<div className={`reaction reaction-${reaction.name}`}>
					{reaction.number}</div>					
				)}
			</div>
		)
	}
}

export default Reactions; 
