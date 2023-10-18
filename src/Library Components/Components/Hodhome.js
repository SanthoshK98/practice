import React from 'react';
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import Table from '@mui/material/Table';
import { TableBody,TableHead,TableRow,TableCell } from '@mui/material';
import Button from '@mui/material/Button';
import {useSelector} from 'react-redux';




function Hodhome() {

const[data,setData] = useState([])
const dato = useSelector((state)=>state.general.hodid)
console.log(dato)
useEffect(()=>{

},[])

const result = async()=>{
  try{


  }catch(err){
    console.log(err.message)
  }
}

  return (
    <div>
        <div className='pope'>
      <h1 >
      This is Library Management Application
     </h1>
     <Link className='core' to='/hodlogin'>Logout</Link>
      </div>
<Table>
<TableHead>
  <TableRow>
    <TableCell>S.No</TableCell>
    <TableCell>Student Id</TableCell>
    <TableCell>Department</TableCell>
    <TableCell>Hodid</TableCell>
    <TableCell>Actions</TableCell>
    </TableRow>
 </TableHead>
 <TableBody>
  <TableRow>
    <TableCell>1.</TableCell>
    <TableCell>Rs5223</TableCell>
    <TableCell>Maths</TableCell>
    <TableCell>RS1256</TableCell>
    <TableCell>
<Button variant='contained' color='success'>Approve</Button>
<Button variant='contained' color='warning'>Reject</Button>
    </TableCell>
    
  </TableRow>
 </TableBody>

</Table>
    </div>
  )
}

export default Hodhome