import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from"./Checkout";
import Login from './Login';
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';

function App() {

  const [{user}, dispatch] = useStateValue();
  
  useEffect (() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user is logged in...
        dispatch({
          type: "SET_USER",
          user: authUser,
        });  

      } else {
        // the user is logged out...
        dispatch({
          type: "SET_USER",
          user: null,
        });  

      }
    });

    return () => {
      unsubscribe(); // Any cleanup go in here...

    };

  }, []);

  console.log("USER IS >>> ",user);

  return (
    <Router>
       <div className="app">
         <Routes>
           <Route path="/checkout" element={<><Header/><Checkout/></>}>             
           </Route>
           <Route path="/login" element={<Login />}>             
           </Route>
           <Route path="/" element={<><Header/><Home/></>}>           
           </Route>
         </Routes>
      
    
    </div>
    </Router>
   
  );
}

export default App;
