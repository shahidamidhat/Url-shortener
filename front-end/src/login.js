import axios from "axios";
import React, { useState } from "react";

function Login(){

    const [username,setUsername]=useState("");
    const [userpassword,setUserPassword]=useState("")

    let handleSubmit = async () => {
        try {
            let data= {
                userName,
                userPassword
            }

            await axios.post("",data)
            alert("You are Logged in")
        }catch (error) {
            alert("Error"- error)
        }
    }
    return(
        <>
            <form onSubmit = {(e)=>{
                e.preventDefault();
                handleSubmit()
            }}>
                <label>UserName</label>
                <input id="username" placeholder="Your Username"></input>
                <label>Password</label>
                <input id="userpass" placeholder="********"></input>
            </form>
        </>
    );
}

export default Login;