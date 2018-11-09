import React, { Component } from "react";
import Contacts from "./componets/contacts/Contacts";
import Header from "./componets/layout/Header";
import AddContact from "./componets/contacts/AddContact";
import { Provider } from "./context";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
