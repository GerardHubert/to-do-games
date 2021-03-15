import React from "react";
import Welcome from "./components/Welcome";
import Form from "./components/Form";
import GamesList from './components/GamesList';

class App extends React.Component {
  render() {
    return(
      <div>
        <Welcome />
        <Form />
      </div>
    )
  }
}

export default App;
