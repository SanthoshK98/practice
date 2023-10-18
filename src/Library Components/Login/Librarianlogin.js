import React from 'react';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function Librarianlogin() {

    const[librarianlogindetails,setLibrarianlogindetails] = useState({
        email:'',
        password:''

    })

    const navigate = useNavigate()
    const inputHandler = (e)=>{
        setLibrarianlogindetails({...librarianlogindetails,[e.target.name]:e.target.value})
        }

        console.log(librarianlogindetails)
        const loginHandler = async (e)=>{
            try{
        
                const result = axios.post('http://localhost:5999/librarianlogin',librarianlogindetails);
                if(result){
                   navigate('/librarianhome')
                }else{
                     navigate('/hodlogin')
                }
        
            }catch(err){
                console.log(err.message)
            }
        
        }



  return (
    <div>
      <h1> Librarianlogin</h1> 
      <form>
<TextField
name='email'
 label='Librarian Email'
 variant='outlined'
 type='text'
onChange={inputHandler}
 required
/><br/><br/>
<TextField
name='password'
 label='Password'
 variant='outlined'
 type='text'
 onChange={inputHandler}

 required
/><br/><br/>
<Button onClick={loginHandler} variant='contained' color='secondary'>Submit</Button>
</form>
        </div>
  )
}

export default Librarianlogin