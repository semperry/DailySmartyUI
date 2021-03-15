import React, { Component } from "react";

import Logo from "./logo";
import RecentPosts from "./recentPosts";
import SearchBar from "./searchBar";

export default class App extends Component {
	render() {
		return (
			<div>
				<div>
					<Logo />
					<SearchBar />
					<RecentPosts />
				</div>
			</div>
		);
	}
}
