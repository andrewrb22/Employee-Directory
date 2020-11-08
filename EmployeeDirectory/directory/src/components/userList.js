import React from "react";

function UserList(props) {
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <h3>{props.name}</h3>
                <img src={props.picture}/>
                <p>{props.email}</p>
                <p>{props.phone}</p>
            </li>
        </ul>
    );
}

export default UserList;