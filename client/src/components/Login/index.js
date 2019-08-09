import React from "react";


function Login() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-3">
                <form>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label">Remember me</label>
                    </div>
                    <a href="/client">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </a>
                </form>
                </div>
            </div>
        </div>
        
    );
}

export default Login;