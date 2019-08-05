import React from "react";


const divStyle = {
   textAlign: "center"
};

function Landing() {
    return (
        <div style={divStyle} className="container">
            <div className="jumbotron">
                <h1>Welcome to Barberfy!</h1>
                <p>Getting your haircut just got easier.</p>
                
                <a href="/login">
                    <button type="button" class="btn btn-success">Login</button>
                </a>


                <p>New to Barberfy? Sign up here!</p>
                <a href="/signup">
                    <button type="button" class="btn btn-info">Sign-up!</button>
                </a>
            </div>        
        </div>
    );
}

export default Landing;