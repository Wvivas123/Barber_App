import React from "react";

const divStyle = {
    padding: "20px",
    backgroundColor: "purple"
};

function Login() {
    return (
        <div style={divStyle}>
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