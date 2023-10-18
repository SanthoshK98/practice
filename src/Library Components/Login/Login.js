import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { addstudentid } from "../Features/studentslice";
import { useDispatch } from "react-redux";

function Login() {
  const [studentlogin, setStudentlogin] = useState({
    email: "",
    password: "",
  });
  const [studentid, setStudentid] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const inputHandler = (e) => {
    setStudentlogin({ ...studentlogin, [e.target.name]: e.target.value });
  };
  const loginHandler = async (e) => {
    try {
      const result = await axios.post(
        "http://localhost:5999/studentlogin",
        studentlogin
      );
      console.log(result);
     
    
      dispatch(addstudentid(result?.data?.loggedin?.studentid))
      if (result) {
        navigate("/studenthome");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  console.log("student number",studentid);
  return (
    <div>
      <h1>Login</h1>
      <form>
        <TextField
          name="email"
          label="Student Email"
          variant="outlined"
          type="text"
          onChange={inputHandler}
          required
        />
        <br />
        <br />
        <TextField
          name="password"
          label="Password"
          variant="outlined"
          type="text"
          onChange={inputHandler}
          required
        />
        <br />
        <br />
        <Button onClick={loginHandler} variant="contained" color="secondary">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Login;
