import React, { Component } from "react";
import UserList from "./components/userList"
import Title from "./components/Title"
import API from "./utils/API"
import Wrapper from "./components/Wrapper";

class App extends Component {

  state = {
    result: [],
    randomuser: ""
  };

  componentDidMount() {
    API.randomuser()
    .then(res => this.setState({ result: res.data.results }))
    .catch(err => console.log(err));
  }

  render() {

    return (
      <div>
      <Title />
      <Wrapper>
        {this.state.result.map((element,index) => (
          <UserList
          key={index}
          name={element.name.first}
          picture={element.picture.thumbnail}
          email={element.email}
          phone={element.phone}
          age={element.age}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
