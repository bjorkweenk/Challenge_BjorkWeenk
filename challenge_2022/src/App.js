import React from 'react';
import './App.css';
import Navbar from './components/NavbarMenu/Navbar';
import Menubar from './components/MenuBar/MenuBar';
import Landing from './components/LandingPicture/Landing';
import ClientCard from './components/ClientCard/ClientCard';


function App() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="App">
      <Menubar setMenuStatus={setIsMenuOpen}/>
      <Navbar isOpen={isMenuOpen}/>
      <Landing/> 
      <ClientCard />
    </div>
  );

}

export default App;
