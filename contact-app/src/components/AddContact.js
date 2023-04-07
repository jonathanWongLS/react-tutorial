import React from "react";

class AddContact extends React.Component {
    render() {
        return (
            <div>
                <h2 className="mt-3 text-center">Add Contact</h2>
                <form>
                    <div class="mb-3">
                        <label for="nameInput" class="form-label">Name</label>
                        <input type="name" placeholder="Enter your name here" class="form-control" id="nameInput" aria-describedby="nameHelp"></input>
                    </div>
                    <div class="mb-3">
                        <label for="inputEmail" class="form-label">Email</label>
                        <input type="email" placeholder="Enter your email address here" class="form-control" id="inputEmail"></input>
                    </div>
                    <button type="submit" class="btn btn-primary">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;