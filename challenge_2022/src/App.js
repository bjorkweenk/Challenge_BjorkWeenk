import './App.css';


import NavBar from './components/NavBar/NavBar';
import Landing from './components/LandingPicture/Landing';
import ClientsLogo from './components/ClientDetails/ClientsLogo/ClientsLogo';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';

import ClientCard from './components/ClientDetails/ClientCard/ClientCard';
import ClientNote from './components/ClientDetails/ClientNote/ClientNote';
import ClientCard2 from './components/ClientDetails/ClientCard2/ClientCard2';
import ClientNote2 from './components/ClientDetails/ClientNote2/ClientNote2';
import ClientCard3 from './components/ClientDetails/ClientCard3/ClientCard3';
import ClientQoute from './components/ClientDetails/ClientQoute/ClientQoute';
import ClientCard4 from './components/ClientDetails/ClientCard4/ClientCard4';
import ClientQoute2 from './components/ClientDetails/ClientQoute2/ClientQoute2'

import MenuBar from './components/MenuBar/MenuBar';
import React, { useState } from 'react';


function App () {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    return (
      <div>
       <NavBar setMenuStatus={setIsMenuOpen}/>
      <MenuBar isOpen={isMenuOpen}/>
      <Landing/> 
      <ClientCard />
      <ClientNote /> 
      <ClientCard2 />
      <ClientNote2 />
      <ClientCard3 />
      <ClientQoute />
      <ClientCard4 /> 
      <ClientQoute2 />
      <ClientsLogo/>
      <Form/>
      <Footer/>
        
      </div>
    );
  }


export default App;