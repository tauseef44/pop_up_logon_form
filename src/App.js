import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/body';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import { Routes, Route } from 'react-router-dom';
import Usecontext from './hooks/Usecontext';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Contactus from './components/Contactus';
import Registerpage from './components/Registerpage';
import RegistrationForm from './components/rgsform';


function App() {
  
  return (
   <>
   
   
   <Navbar/>
   
   <Routes>
    
    <Route path="/" element={<Navbar/>} />
    
    <Route path="/footer" element={<Footer/>} />
    <Route path="/aboutus" element={<Aboutus/>} />
    <Route path='/services' element={<Services/>}/>
    <Route path='/portfolio' element={<Portfolio/>}/>
    <Route path='/contact' element={<Contactus/>}/>
    <Route path='/team' element={<Team/>}/>
    <Route path='/re' element={<RegistrationForm/>}/>


    <Route path='/registerpage' element={<Registerpage/>}/>








    
   </Routes>
   <Footer/>
   </>
     );
}

export default App;
