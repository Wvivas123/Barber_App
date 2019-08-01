import React from "react";

function Login() {
    return (
        <div>
            <h2>Welcome</h2>
            
            <form>
                Email: {" "}
                <input type="email"></input>
                <br></br>
                Password: {" "}
                <input type="password"></input>
            </form>
            
        </div>
    );
}

export default Login;