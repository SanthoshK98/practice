import './App.css';
import Button from '@mui/material/Button';
import Register from './Library Components/Register/Register';
import {Link,Routes,Route} from 'react-router-dom';
import Hodregister from './Library Components/Register/Hodregister';
import Librarianregister from './Library Components/Register/LibrarianRegister';
import Login from './Library Components/Login/Login';
import Hodlogin from'./Library Components/Login/Hodlogin'
import Librarianlogin from './Library Components/Login/Librarianlogin';
import Home from './Library Components/Components/Home';
import Librarianhome from './Library Components/Components/Librarianhome';
import Hodhome from './Library Components/Components/Hodhome'
import { useSelector,useDispatch } from 'react-redux';
import {getage} from './Library Components/Features/studentslice';
import { addage } from './Library Components/Features/studentslice';
import { useEffect } from 'react';



function App() {
const data = useSelector((state)=>state.general.age)
 console.log(data)

 const result = useDispatch()

//  useEffect(()=>{
//  result(addage())
//  },[])

  return (
    <div className="App">
   
  



   
    <Routes>
   <Route path='/librarianregister' element={<Librarianregister/>}></Route>
  <Route path='/hodregister' element={<Hodregister/>}></Route>
  <Route path='/' element={<Register/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/hodlogin' element={<Hodlogin/>}></Route>
  <Route path='/librarianlogin' element={<Librarianlogin/>}></Route>
  <Route path='/studenthome' element={<Home/>}></Route>
  <Route path='/librarianhome' element={<Librarianhome/>}></Route>
  <Route path='/hodhome' element={<Hodhome/>}></Route>
</Routes>
    {/* <button onClick={()=>result(addage())}>Click</button> */}
    </div>
  );
}

export default App;
