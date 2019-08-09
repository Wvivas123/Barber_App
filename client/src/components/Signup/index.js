import React from "react";


function Signup() {
    return (
        <div className="container">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" for="inputGroupSelect01">Options</label>
                </div>
                <select className="custom-select" id="inputGroupSelect01">
                    <option selected>Choose...</option>
                    <option value="1">Client</option>
                    <option value="2">Barber</option>
                </select>
                </div>
        </div>
    );
}

export default Signup;