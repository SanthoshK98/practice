import React from "react";
import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import axios from "axios";
import Card from "@mui/material/Card";
import {Link} from 'react-router-dom';
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import { getid,getage } from "../Features/studentslice";
import { addage } from "../Features/studentslice";
import { useSelector} from "react-redux/es/hooks/useSelector";
import {useDispatch} from 'react-redux';



function Home() {
  const [books, setBooks] = useState([]);
  const[filteredbooks,setFilteredbooks] = useState([])
const[bookname,setBookname] = useState("");
const[search,setSearch] = useState('');
const[status,setStatus] = useState(false);
const data = useSelector((state)=>state?.general?.studentid);

const wait = useDispatch()

console.log(data)

  useEffect(() => {
    axios.get("http://localhost:5999/getbook").then((response) => {
      setBooks(response.data.result);
   
    });
  }, []);
  console.log(books);

const bookingHandler = async(dato)=>{
  let out={};
  out.studentid = data;
 
  let result = prompt("Please Enter the Date")
  out.Hodid = dato.Hodid;
  out.librarianid = dato.Librarianid;
  out.date = result;
  out.department = dato.department;
  out.bookname = dato.bookname;

const digo = await   axios.post('http://localhost:5999/bookservice',out);
 console.log(digo)
 if(digo){
  alert('Book Request Went Successfully')
 }

}

// console.log(bookname)
const searchHandler = (e)=>{
setSearch(e.target.value)
}
console.log(search)
const dataHandler = (e)=>{
e.preventDefault()

const filtered = books.filter((items)=>{
  return items.department.toLowerCase().includes(search.toLowerCase());
})

setFilteredbooks(filtered)

}


  return (
    <div>
       <div className='pope'>
      <h1 >
      This is Library Management Application
     </h1>
     <form>
    
      <input className="form" type='text' value={search} onChange={searchHandler} placeholder="Enter your Search"/>
      <Button onClick={dataHandler} className="btn" variant="contained" size='medium' color='secondary'>Search</Button>
     </form>
     <Link className='core' to='/login'>Logout</Link>
      </div>

    <Grid container spacing={2}>
        {books.map((item) => {
          return (
            <>
              <Grid item xs={6} md={4} lg={3}>
                <Card>
                  <img
                    style={{ width: "300px", height: "300px" }}
                    src={item.image}
                    alt="img.jpg"
                  />
                  <CardContent>
                     
                    <Typography variant="h5" gutterBottom>
                      {item.department}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                    {item.bookname}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                    {item.author}
                    </Typography>
                    <CardActions>
                  
                    <Button onClick={()=>bookingHandler(item)} className="btn" color='secondary' variant="contained">Book Now</Button>
                  
                  </CardActions>
                  </CardContent>
               
                </Card>
              </Grid>
            </>
          );
        })}
      </Grid>  
     
    </div>
  );
}

export default Home;
