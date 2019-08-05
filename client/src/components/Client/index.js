import React from "react";
import Nav from "../Nav";


function Client() {
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h5 className="mt-4">Select your Barbershop first</h5>
                        <select className="mb-4 custom-select">
                            <option selected>Select Barbershop</option>
                            <option value="1">Southside Barber</option>
                            <option value="2">Headliners Grove</option>
                            <option value="3">Supercutz</option>
                        </select>
                        
                        <h5>Choose Barber</h5>
                        <select className="custom-select">
                            <option selected>Open this select menu</option>
                            <option value="1">Barber 1</option>
                            <option value="2">Barber 2</option>
                            <option value="3">Barber 3</option>
                        </select>

                        <button type="button" class="mt-4 btn btn-danger">Find Times</button>

                    </div>
                    <div className="col-8">
                        <h4 className="mt-4">Barber Schedule</h4>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Booking Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="table-danger">
                                    <td>08/10/19</td>
                                    <td>12:00PM</td>
                                    <td>Unavailable</td>
                                </tr>
                                <tr className="table-danger">
                                    <td>08/10/19</td>
                                    <td>1:00PM</td>
                                    <td>Unavailable</td>
                                </tr>
                                <tr className="table-primary">
                                    <td>08/10/19</td>
                                    <td>2:00PM</td>
                                    <td>Book Now!</td>
                                </tr>
                                <tr className="table-primary">
                                    <td>08/10/19</td>
                                    <td>3:00PM</td>
                                    <td>Book Now!</td>
                                </tr>
                            </tbody>
                        </table>
                    </div> 
                </div>
                <div className="row">
                    <div className="col-4">
                        <img src="..." alt="..." class="rounded-circle"/>
                    </div>
                    <div className="col-8">
                        <h5>Add a comment for your barber</h5>
                        <div class="input-field">
                            <input type="text" placeholder="Comment" name="comment" class="validate active"/>
                            <br></br>
                            <button type="button" class="mt-2 btn btn-secondary btn-sm">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Client;