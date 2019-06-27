import React from "react";

import Member from "./Member";


function MemberList(props) {
    return (
        <div>
            {props.members.map(m => <Member key = {m._id} name={m.officialName} /> )}
        </div>
    );
}

export default MemberList;