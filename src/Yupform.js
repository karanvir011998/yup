import React from "react";
import { User } from "./UserValidation";
import { useState } from "react";


const Yupform = () =>{

    const [name, setName] = useState("");
   
    const create = async (e)=>{
        e.preventDefault();
        let formData = {
            name:e.target[0].value,
            email:e.target[1].value,
            password:e.target[2].value,
        };
        const isValid = await User.isValid(formData);
        if(isValid === true){
            alert("All values are correct");
            
        }
        else{
            alert("All values are wrong");

        }
        console.log(isValid);//shows whether the value is true or false
    };
    return(
        <div >
            <form onSubmit={create}>
            <h1>Login Page</h1>
        <span>Name:</span>
        <input className="name" type="text" name="text"   />
        <span className="spanname"></span>
        <br/>
        <span>Email:</span>
        <input className="email" type="email" name="email"   />
        <span className="spanemail"></span>
        <br/>
        <label>Password:</label>
        <input type="password" name="pass" />
        <span className="spanpass"></span>
        <br/>
        <button type="submit" >Submit</button>
        </form>
        </div>
    )
}
export default Yupform;