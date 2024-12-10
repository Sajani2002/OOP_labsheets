import React from 'react';

import CustomButton from './CustomButton';

import UserForm from './UserForm';

import InputWithEvents from './InputWithEvents';

import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

import RegistrationForm from './RegistrationForm';

const App = () => {
  return (
      <Router>
      <div>
      <div>
      <h1>Exercise 1</h1>
      <CustomButton />
      <h1>Exercise 2</h1>
      <UserForm />
      <h1>Exercise 3</h1>
      <InputWithEvents />
    </div>
    <h1>Exercise 4</h1>
        <nav>
          <ul>
            <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div>
      <h1>Exercise 5</h1>
      <RegistrationForm />
      </div>
      </Router>
  );
  
};

export default App;
