import React, { useState } from "react";
import './App.css';
import Header from "./Header"
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  // useState holds the starting value, in this scenario - an empty list
  const [contacts, setContacts] = useState([])

  return (
    <div className="container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
