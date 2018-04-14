import React from "react";
import defaultPhoto from "../assets/images/mrx.png";  

class ProfilePhoto extends React.Component {
	constructor( props ) {
		super( props )
			this.state = {
				url: defaultPhoto, 
				alt: "Profile Photo"
			}
	} 
	getUserImg = ( img ) => {
		if( img.length === 0 ) {
			img = this.state.url
		}
		return img
	} 
  
	componentWillMount() {
		this.setState({
			url: this.getUserImg( this.props.photo ), 
			alt: "Fotografia de " + this.props.alt
		})
	}
	render() { 
		return ( 
			<div className="photo">
				<img src={this.state.url} alt={this.state.alt} /> 
			</div>
		)
	}
}

export default ProfilePhoto; 
