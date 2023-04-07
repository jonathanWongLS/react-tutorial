import React from "react";
import {Trash, PersonCircle} from "react-bootstrap-icons";

const ContactCard = (props) => {
    // Destructuring - Can now use the name and email on its own without "contact.XXX"
    const {id, name, email} = props.contact;
    
    return (
      <div className="d-flex align-items-center justify-content-between p-3 border rounded">
        <a
          href="https://www.google.com"
          style={{ fontSize: "30px", color:"#808080" }}
          rel="noreferrer noopener"
        >
          <PersonCircle/>
        </a>
        <div>
          <h5 key={name} className="mb-1">
            {name}
          </h5>
          <small key={email} className="text-muted">
            {email}
          </small>
        </div>
        <a
          href="https://www.google.com"
          style={{ color: "red", fontSize: "20px" }}
          rel="noreferrer noopener"
        >
          <Trash />
        </a>
      </div>
    );

};

export default ContactCard;