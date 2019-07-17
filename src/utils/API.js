import axios from "axios";

export default {
	getMemberList: () => {
		return axios.get(
			"https://clerkapi.azure-api.net/Members?key=da13cc0dce344b3fa36b500e01602df8"
		);
	},
	getVotes: () =>{
		return axios.get(
			"https://clerkapi.azure-api.net/Votes?$filter=superEvent/superEvent/congressNum%20eq%20%27116%27&key=da13cc0dce344b3fa36b500e01602df8"
		);
	}
};
