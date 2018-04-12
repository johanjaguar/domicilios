import React from "react";

const Form = props => (
	<form onSubmit={props.getData}>
		<input type="text" name="city" placeholder="City ..."/>
		<input type="text" name="country" placeholder="Country ..."/>
		<button>Get Data</button>
	</form>
);

export default Form;