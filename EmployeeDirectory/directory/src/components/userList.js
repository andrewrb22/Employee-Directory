import React from "react";
import Card from 'react-bootstrap/Card'
import "../styles/UserList.css"

function UserList(props) {
    return (
            <Card className="card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.picture} />
                <Card.Body>
                    <Card.Title><strong>Name:</strong> {props.name}</Card.Title>
                    <Card.Text>
                        <p><strong>Email:</strong>{props.email}</p>
                        <p><strong>Phone Number:</strong> {props.phone}</p>
                         <p><strong>Age:</strong>{props.age}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        
    );
}

export default UserList;