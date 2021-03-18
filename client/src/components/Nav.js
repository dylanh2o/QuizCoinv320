import React, {useState} from 'react';
import { useDispatch,useSelector} from 'react-redux';
import {logoutUser} from '../store/appSlice';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Login';
import Register from './Register';
import Home from '../views/Home';

const Nav = () => {
  const dispatch=useDispatch();
     const [visible, setVisible] = useState(null);

     return(
       <Router>
         <div>
           <ul>
             <li>
               <Link to="/">Home</Link>
             </li>
             <li>
               <Link to="/login">Login</Link>
             </li>
             <li>
               <Link to="/register">Register</Link>
             </li>
           </ul>

           <hr />

           {}
           <Switch>
             <Route exact path="/">
               <Home />
             </Route>
             <Route path="/login">
               <Login/>
             </Route>
             <Route path="/register">
               <Register/>
             </Route>
           </Switch>
         </div>
       </Router>
     );


   };


 export default Nav;
