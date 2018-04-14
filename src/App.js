import React from 'react';
import Post from "./components/Post.js";
import "./scss/App.scss";
class App extends React.Component {
	constructor(props) {
		super(props)
			this.state = {
				posts: [],
				error: undefined  
			}
	}
 
	componentWillMount() {
    fetch('http://www.mocky.io/v2/5a663e0d2e0000002b323e0e')
      .then((response) => { 
        return response.json()
      })
      .then((data) => {
      	console.log(data)
        this.setState({
					posts: data,
					error: ""
				})
      }) 
  }

	render() {
		//variables here
 
    if (this.state.posts.length > 0) {
      return (
        <div className="domicilios">
 					<div class="container">
						{this.state.posts.map((post, index) =>
							<Post 
								username={post.user.name} 
								date={post.date} 
								text={post.text}
								photo={post.user.image}
							/> 
						)}
	
 					</div>
          
        </div>
      )
    } else {
      return <p className="text-center">Cargando empleados...</p>
    }	
  }
}

export default App;
