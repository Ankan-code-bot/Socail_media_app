import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Headers from './Components/Header'
import Footer from './Components/Footer';
import Sidebar from './Components/sideBar';
import Postes from './Components/Posts';
import CreatePost from './Components/Create_Post';
import { useState } from 'react';
import StoreProvider from './Strore/Post_Store';
import LoadingState from './Components/Loading';

function App() {

  

  const [navbar, setNavbar] = useState("Home");
  return (
    <StoreProvider>
    <div className="containers">
      <Sidebar setNavbar={setNavbar} navbarval = {navbar}></Sidebar>
      <div className="second-container">
        <Headers></Headers>
        {navbar !== "Home"? (<CreatePost></CreatePost>) : (<Postes></Postes>)}
        <Footer></Footer>
      </div>
    </div>
    </StoreProvider>
  );
 
}

export default App
