import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";


function Signup() {
    return (
        <div>
            <Nav />
            <div className="container" id="signup">
                <form className="form-horizontal mt-3" action='' method="POST">
                    <fieldset>
                        <div id="legend">
                            <legend className="">Register</legend>
                        </div>

                        {/* Username */}
                        <div className="control-group">
                            <label className="control-label"  htmlFor="username">Username</label>
                            <div className="controls">
                                <input type="text" id="username" name="username" placeholder="" className="input-xlarge"/>
                                <p className="help-block">Username can contain any letters or numbers, without spaces</p>
                            </div>
                        </div>
                    
                        {/* E-mail */}
                        <div className="control-group">
                            <label className="control-label" htmlFor="email">E-mail</label>
                            <div className="controls">
                                <input type="text" id="email" name="email" placeholder="" className="input-xlarge"/>
                                <p className="help-block">Please provide your E-mail</p>
                            </div>
                        </div>

                        {/* Phone Number */}
                        <div className="control-group">
                            <label className="control-label" htmlFor="phone">Phone Number</label>
                            <div className="controls">
                                <input type="text" id="phone" name="phone" placeholder="" className="input-xlarge"/>
                                <p className="help-block">Please provide your cell phone number </p>
                            </div>
                        </div>

                        
                        <label>Are you a Barber or Client?</label>
                        <div className="custom-control custom-radio">
                            <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"/>
                            <label className="custom-control-label" htmlFor="customRadio1">Barber</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"/>
                            <label className="custom-control-label mb-4 mt-2" htmlFor="customRadio2">Client</label>
                        </div>
                    
                        {/* Password */}
                        <div className="control-group">
                            <label className="control-label" htmlFor="password">Password</label>
                            <div className="controls">
                                <input type="password" id="password" name="password" placeholder="" className="input-xlarge"/>
                                <p className="help-block">Password should be at least 4 characters</p>
                            </div>
                        </div>
                    
                        {/* Confirm Password */}
                        <div className="control-group">
                            <label className="control-label"  htmlFor="password_confirm">Password (Confirm)</label>
                            <div className="controls">
                                <input type="password" id="password_confirm" name="password_confirm" placeholder="" className="input-xlarge"/>
                                <p className="help-block">Please confirm password</p>
                            </div>
                        </div>
                    
                        {/* Button */}
                        <div className="control-group">
                            <div className="controls">
                                <button className="btn btn-success">Register</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Signup;