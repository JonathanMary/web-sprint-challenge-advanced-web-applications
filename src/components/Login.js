import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const initialFormValues = {
  username: "Lambda School",
  password: "i<3Lambd4",
}

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const history = useHistory();
  const [formData, setFormData] = useState(initialFormValues)
  
  const loginRequest = (e) => {
    e.preventDefault();
    axios
        .post(`http://localhost:5000/api/login`, formData)
        .then(res => {
          localStorage.setItem("token", JSON.stringify(res.data.payload));
          history.push("/bubblepage");
        })
        .catch(err => console.log("Error: ", err.message))
  }

  const formInput = e => {
    console.log(e.target.name)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(()=>{
    axios
      .delete(`http://localhost:5000/api/colors/1`, {
        headers:{
          'authorization': "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
        }
      })
      .then(res=>{
        axios.get(`http://localhost:5000/api/colors`, {
          headers:{
            'authorization': ""
          }
        })
        .then(res=> {
          console.log(res);
        });
        console.log(res);
      })
  });

  return (
    <>
      <h1>
        Welcome to the Bubble App!
        <p>Build a login page here</p>
      </h1>
      <form>
        <input
          placeholder="username..."
          name="username"
          type="text"
          onChange={formInput}
          value={formData.username}
        ></input>
        <input
        placeholder="password..."
        name="password"
        type="password"
        onChange={formInput}
        value={formData.password}
        ></input>
        <button onClick={loginRequest}>Login</button>
      </form>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.