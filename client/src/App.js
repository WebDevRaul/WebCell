import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Navbar from './layout/navbar/Navbar';
import Home from './pages/home/Home';
import SignIn from './pages/sign_in/Sign_In';
import Register from './pages/register/Register';
import NotFound from './pages/not_found/Not_Found';
import Footer from './layout/footer/Footer';

import './App.css';

const App = () => {
  return (
    <div className='app'>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/sign-in' component={SignIn} />
          <Route exact path='/register' component={Register} />

          <Route path='*' component={NotFound} />
        </Switch>
        <Footer />
      </>
    </div>
  )
}

export default App