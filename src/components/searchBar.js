import React, { Component } from "react";

class SearchBar extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<form>
				<input placeholder="Search DailySmarty" />
			</form>
		);
	}
}

export default SearchBar;
