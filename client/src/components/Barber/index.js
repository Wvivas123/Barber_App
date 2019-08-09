import React from "react";
import Nav from "../Nav";
import DatePicker from "../DatePicker";


function Barber() {
    return(
        <div>
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h5 className="mt-4">Pick a date to update your schedule</h5>
                        <DatePicker />
                    </div>
                    <div className="tableFixHead col-8 mt-4">
                        <table className="table" id="barber-schedule">
                            <thead className="table-dark">
                                <tr>
                                    <td>Time</td>
                                    <td>Status</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="table-primary">
                                    <td>9:00AM</td>
                                    <td>Available</td>
                                </tr>
                                <tr className="table-warning">
                                    <td>10:00AM</td>
                                    <td>Booked</td>
                                </tr>
                                <tr className='table-warning'>
                                    <td>11:00AM</td>
                                    <td>Booked</td>
                                </tr>
                                <tr className="table-primary">
                                    <td>12:00PM</td>
                                    <td>Available</td>
                                </tr>
                                <tr className="table-success">
                                    <td>1:00PM</td>
                                    <td><button type="button" className="mr-4 btn btn-warning btn-sm">Book</button>
                                        <button type="button" className="btn btn-primary btn-sm">Available</button>
                                    </td>
                                </tr>
                                <tr className="table-primary">
                                    <td>12:00PM</td>
                                    <td>Available</td>
                                </tr>
                                <tr className="table-primary">
                                    <td>12:00PM</td>
                                    <td>Available</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Barber;