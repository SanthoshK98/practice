import React from 'react';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import{useDispatch} from 'react-redux';
import { addhodid } from '../Features/studentslice';

function Hodlogin() {

    const[hodlogindetails,setHodlogindetails] = useState({
        email:'',
        password:''

    })
    const dispatch = useDispatch()
    const navigate = useNavigate();
const inputHandler = (e)=>{
setHodlogindetails({...hodlogindetails,[e.target.name]:e.target.value})
}

console.log(hodlogindetails)

const loginHandler = async (e)=>{
    try{

        const result = axios.post('http://localhost:5999/hodlogin',hodlogindetails);

       
        if(result){
            dispatch(addhodid(result?.data?.hodloggedin?.employeeid))
               navigate('/hodhome')
        }else{
           navigate('/hodlogin')
        }

        console.log(result)

    }catch(err){
        console.log(err.message)
    }

}




  return (
    <div>
        <h1>Hodlogin</h1>
        <form>
<TextField
name='email'
 label='HOD  Email'
 variant='outlined'
 type='email'
onChange={inputHandler}
 required
/><br/><br/>
<TextField
name='password'
 label='Password'
 variant='outlined'
 type='password'
onChange={inputHandler}
 required
/><br/><br/>
<Button onClick={loginHandler}  variant='contained' color='secondary'>Submit</Button>
</form>

    </div>
  )
}

export default Hodlogin;