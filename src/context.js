import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Chathu J",
        email: "cj@gmial.com",
        phone: "0779733078"
      },
      {
        id: 2,
        name: "Amma",
        email: "mother@gmial.com",
        phone: "07673983120"
      },
      {
        id: 3,
        name: "Thaththa",
        email: "father@gmial.com",
        phone: "0777383120"
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
