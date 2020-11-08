import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import "../styles/Title.css"
function Title() {
    return (
        <Jumbotron fluid className= "jumbo">
     
          <h1  style={{textAlign: "center",}}>Employee Directory</h1>
         
      </Jumbotron>
      );

}

export default Title;