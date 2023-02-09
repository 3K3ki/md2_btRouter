import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route,Link,NavLink } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contract from './components/Contract';
import UserDetails from './components/UserDetails';
import User from './components/User';
import About from './components/About';
import Error from './components/Error';
import { useState } from 'react';


function App() {
  const [users, setUsers] = useState([
    {id:'001',name:"Tuấn Anh 1", email:"ttuananh1@gmail.com"},
    {id:'002',name:"Tuấn Anh 2", email:"ttuananh2@gmail.com"},
    {id:'003',name:"Tuấn Anh 3", email:"ttuananh3@gmail.com"},
    {id:'004',name:"Tuấn Anh 4", email:"ttuananh4@gmail.com"},
    {id:'005',name:"Tuấn Anh 5", email:"ttuananh5@gmail.com"},
    {id:'006',name:"Tuấn Anh 6", email:"ttuananh6@gmail.com"},
    {id:'007',name:"Tuấn Anh 7", email:"ttuananh7@gmail.com"},
    {id:'008',name:"Tuấn Anh 8", email:"ttuananh8@gmail.com"}
])
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/About' element={<About/>} ></Route>
        <Route path='/User' element={<User users={users} />} ></Route>
        <Route path='/Contract' element={<Contract/>} ></Route>
        <Route path={"/User/:userid"} element={<UserDetails users={users}/>}/>
        {/* <Route path='*' element={<Error/>} ></Route> */}
      </Routes>
</div>

  );
}

export default App;
