import React from "react";
import './App.css';
import Header from "./Header"
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {

  const contacts = [
    {
      id: "1",
      "name": "Ahmed",
      "email": "ahmed@gmail.com"
    },
    {
      id: "2",
      "name": "Bobby",
      "email": "bobby@gmail.com"
    }
  ]

  return (
    <div className="container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
