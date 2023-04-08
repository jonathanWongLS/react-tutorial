import React from "react";

class AddContact extends React.Component {
    state = {
        name: "",
        email:"",
    }
    
    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("All the fields are mandatory!");
            return;
        }
        this.props.addContactHandler(this.state); // Adds the props from App.js (addcontactHandler)
        console.log(this.state);
    }
    
    render() {
        return (
          <div>
            <h2 className="mt-3 text-center">Add Contact</h2>
            <form onSubmit={this.add}>
              <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">
                  Name
                </label>
                <input
                  type="name"
                  placeholder="Enter your name here"
                  className="form-control"
                  id="nameInput"
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Enter your email address here"
                  className="form-control"
                  id="inputEmail"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                ></input>
              </div>
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </form>
          </div>
        );
    }
}

export default AddContact;