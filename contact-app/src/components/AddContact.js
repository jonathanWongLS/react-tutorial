import React from "react";

class AddContact extends React.Component {
    render() {
        return (
            <div>
                <h2 className="mt-3 text-center">Add Contact</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="nameInput" className="form-label">Name</label>
                        <input type="name" placeholder="Enter your name here" className="form-control" id="nameInput" aria-describedby="nameHelp"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-label">Email</label>
                        <input type="email" placeholder="Enter your email address here" className="form-control" id="inputEmail"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;