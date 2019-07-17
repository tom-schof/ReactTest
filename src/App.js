import React, { Component } from "react";
import MemberList from "./components/MemberList";
import Header from "./components/Header";

class App extends Component {
	render() {
		return (
			<div className='container'>
				<Header />
				<div>
					<h3>Members</h3>
					<MemberList />
				</div>
			</div>
		);
	}
}

export default App;
