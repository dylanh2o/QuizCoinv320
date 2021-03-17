import React, {useState} from 'react';
import { useDispatch,useSelector} from 'react-redux';
import {logoutUser} from '../store/appSlice';

const Nav = () => {
  const dispatch=useDispatch();
     const [visible, setVisible] = useState(null);

     return(
       <>
    </>

     );


   };
 export default Nav;
