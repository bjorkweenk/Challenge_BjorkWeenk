import React from 'react';
import './App.css';
import Navbar from './components/NavbarMenu/Navbar';
import Menubar from './components/MenuBar/MenuBar';
import Landing from './components/LandingPicture/Landing';
import ClientCard from './components/ClientCard/ClientCard';
import ClientsLogo from './components/ClientsLogo/ClientsLogo';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';


function App() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="App">
      <Menubar setMenuStatus={setIsMenuOpen}/>
      <Navbar isOpen={isMenuOpen}/>
      <Landing/> 
      <ClientCard />
      <ClientsLogo/>
      <Form/>
      <Footer/>
    </div>
  );

}

export default App;
