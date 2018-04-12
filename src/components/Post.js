import React from "react";
import ProfilePhoto from "./components/ProfilePhoto.js";

class Post extends React.Component {  
	constructor(props) {
		super(props)
			this.state = {
				username: undefined,
				dateNumber: undefined,
				dateName: undefined,
				text: undefined,
			}
	}
	getDays = ( postDate ) => {
		const ONE_DAY=1000*60*60*24;
		let today = new Date();
		let dd = today.getDate();
		let mm = today.getMonth() + 1;
		let yyyy = today.getFullYear();
		
		if(dd<10){
		    dd='0'+dd;
		}
		if(mm<10){
		    mm='0'+mm;
		}
		
		today = dd+'/'+mm+'/'+yyyy;

		let todayInMs = Date.parse( today );
		let difInMin = todayInMs - postDate;
		let diffInDays = Math.round( (difInMin)/ONE_DAY );

		let lapsus = [];

		if( difInMin > ONE_DAY ) {
			lapsus[0] = "dias";
			lapsus[1] = diffInDays;
		}
		else {
			lapsus[0] = "minutos";
			lapsus[1] = difInMin;	
		}

		return lapsus;
	}
 
	componentWillMount() {

		this.setState({
			username: this.props.username,
			dateNumber: this.getDays(this.props.date)[1],
			dateName: this.getDays(this.props.date)[0],
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
	      <p className="post__date">Hace <span className="post__datenumber">{this.state.dateNumber}</span> <span className="post__datename">{this.state.dateName}</span>
	      </p>
	      <p className="post__text">{this.state.text}</p>
			</div> 
		)
	}
}
 
export default Post; 