import React,{useState} from 'react';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";

//react router
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";

//firebase
import firebase from "firebase/app"
import "firebase/auth"

//pages
import Dashboard from './Pages/Dashboard';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import PageNotFound from './Pages/PageNotFound';

//user context
import {UserContext} from './Context/UserContext';

//components
import Footer from './Components/Footer';
import Header from './Components/Header';

//init firebase
import firebaseConfig from './Config/firebaseConfig';

firebase.initializeApp(firebaseConfig);

const App = () => {

const [user, setUser] = useState(null);
  return (
    <Router>
      <ToastContainer/>
      <UserContext.Provider value={{user,setUser}}>
        <Header/>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/Dashboard" component={Dashboard}/>
          <Route exact path="/Signin" component={Signin}/>
          <Route exact path="/Signup" component={Signup}/>
          <Route exact path="*" component={PageNotFound}/>

        </Switch>
        <Footer/>
      </UserContext.Provider>
      
    </Router>
  );
}

export default App;
