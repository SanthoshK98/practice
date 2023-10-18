import React from 'react';
import { useState,useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';



const Hodregister = ()=>{

    const[hoddetails,setHoddetails] = useState({
        name:'',
        email:'',
        mobilenumber:'',
        employeeid:'',
        department:'',
        dateofjoining:'',
        password:''
    })
    const[errors,setErrors] = useState({})
    const inputHandler = (e)=>{
        setHoddetails({...hoddetails,[e.target.name]:e.target.value})
    
    }

    const validateForm = ()=>{
        const errors ={};
        const nameregex = /^[A-Za-z0-9_]{3,20}$/;
        const studentidregex = /^[A-Z0-9]+$/;;
        const departmentregex = /^[A-Za-z0-9_]{3,20}$/;
        const emailregex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const mobileregex = /^[0-9]{10}$/;
        const dateregex = /^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-\d{4}$/;
        const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])(?=.*[a-zA-Z0-9@#$%^&+=!]).{8,}$/;
        
        if(!nameregex.test(hoddetails.name)){
            errors.name = 'Please Enter Valid Name'
        }
        if(!emailregex.test(hoddetails.email)){
            errors.email = 'Please Enter Valid Email'
        }
        
        if(!mobileregex.test(hoddetails.mobilenumber)){
            errors.mobile = 'Please Enter Valid Mobile Number'
        }
        
        if(!studentidregex.test(hoddetails.employeeid)){
            errors.employeeid = 'Please Enter Valid Employeeid'
        }
        
        if(!departmentregex.test(hoddetails.department)){
            errors.department = 'Please Enter Valid Department'
        }
        if(!dateregex.test(hoddetails.dateofjoining)){
            errors.date = 'Please Enter Valid Date of joining'
        }
        if(!passwordregex.test(hoddetails.password)){
            errors.password = 'Please Enter Valid Date of password'
        }
        
        
        return errors;
        
        }


    const formHandler = async(e)=>{
        e.preventDefault();
        const errors = validateForm()
        if(Object.keys(errors).length === 0){
            try{
                const data =  await axios.post('http://localhost:5999/registerhod',hoddetails);
                console.log(data)
          
              }catch(err){
                  console.log(err.message)
              }
        }else{
            setErrors(errors)
        }
      
    }

   

return(

<div>
    <h1>Hod Register</h1>
<form>
<TextField
name='employeeid'
 label='Employee Id'
 variant='outlined'
 type='text'
 onChange={inputHandler}
 required
/><br/><br/>
{errors.studentid && <p style={{color:'red'}}>{errors.studentid}</p>}
<TextField
name='name'
 label='Username'
 variant='outlined'
 type='text'
 onChange={inputHandler}
 required
/><br/><br/>
{errors.name && <p style={{color:'red'}}>{errors.name}</p>}
<TextField
name='email'
 label='Email'
 variant='outlined'
 type='email'
 onChange={inputHandler}
 required
/><br/><br/>
{errors.email && <p style={{color:'red'}}>{errors.email}</p>}
<TextField
name='mobilenumber'
 label='number'
 variant='outlined'
 type='number'
 onChange={inputHandler}
 required
/><br/><br/>
{errors.mobile && <p style={{color:'red'}}>{errors.mobile}</p>}
<TextField
name='department'
 label='Department'
 variant='outlined'
 type='text'
 onChange={inputHandler}
 required
/><br/><br/>
<TextField
name='dateofjoining'
 label='DOJ'
 variant='outlined'
 type='text'
 onChange={inputHandler}
 required
/><br/><br/>
{errors.date && <p style={{color:'red'}}>{errors.date}</p>}
<TextField
name='password'
 label='Password'
 variant='outlined'
 type='password'
 onChange={inputHandler}
 required
/><br/><br/>
{errors.password && <p style={{color:'red'}}>{errors.password}</p>}
<Button onClick={formHandler} variant='contained' color='secondary'>Submit</Button>

</form>

</div>

)

}

export default Hodregister;