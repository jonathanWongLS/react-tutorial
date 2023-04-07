import React from "react";
import {Trash} from "react-bootstrap-icons";

const ContactList = (props) => {
    console.log(props);

    const renderContactList = props.contacts.map((contact) => {
        return (  
            <div className="d-flex align-items-center justify-content-between p-3 border rounded">
                <div>
                    <h5 key={contact.name} className="mb-1">{contact.name}</h5>
                    <small key={contact.email} className="text-muted">{contact.email}</small>
                </div>  
                <a href="https://www.google.com" color="black" rel="noreferrer noopener"><Trash/></a>
            </div>
        );
    })

    return (
        <div>
            {renderContactList}
        </div>
    );
}

export default ContactList;