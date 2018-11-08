import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
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

  deleteContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: newContacts });
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}
export default Contacts;
