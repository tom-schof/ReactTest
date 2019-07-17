import React, { Component } from "react";
import Member from "./Member";
import API from "../utils/API";
import _ from "lodash";

class MemberList extends Component {
    componentDidMount(){
        const members = API.getMemberList();
        console.log(members);
    }
	render() {

		return (
            
			<div>
				{/* {props.members.map(m => <Member key = {m._id} name={m.officialName} /> )} */}
			</div>
		);
	}
}

export default MemberList;
