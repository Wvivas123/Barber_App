import React from "react";
import Nav from "../Nav";


function Barber() {
    return(
        <div>
            <Nav />
            <div className="container">
            {/* Barber Schedule */}
                <div class="panel panel-primary">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Time</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Book Now</th>
                                
                                </tr>
                            </thead>
                            <tbody id="table-data">
                            </tbody>
                        </table>
                </div>
                    
                <div class="panel panel-primary">
                    <div class="panel-heading">Add a time</div>
                    <div class="panel-body">
                        <form>
                            <div class="form-group">
                                <label>Train Name</label>
                                <input type="text" class="form-control" id="train-name"/>
                            </div>
                            <div class="form-group">
                                <label>Destination</label>
                                <input type="text" class="form-control" id="train-destination"/>
                            </div>
                            <div class="form-group">
                                <label></label>
                                <input type="text" class="form-control" id="train-time"/>
                            </div>
                            <div class="form-group">
                                <label>Frequency (min)</label>
                                <input type="text" class="form-control" id="train-frequency"/>
                            </div>
                            <button type="button" class="btn btn-primary" id="add-train">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Barber;