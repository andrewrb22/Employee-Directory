import React, { Component } from "react";
import UserList from "./components/userList"
import Title from "./components/Title"
import API from "./utils/API"
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
        {this.state.result.map((element,index) => (
          <UserList
            key={index}
            name={element.name.first}
            picture={element.picture.thumbnail}
          />
        ))}
      </div>
    );
  }
}

export default App;
