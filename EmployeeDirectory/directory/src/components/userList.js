import React from "react";

function UserList(props) {
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <h3>{props.name}</h3>
                <img src={props.picture}/>
            </li>
        </ul>
    );
}

export default UserList;