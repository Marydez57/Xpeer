import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import LandingPage from '../Screens/LandingPage/LandingPage';
import './App.css';
import {BrowserRouter,  Route, Routes } from 'react-router-dom'
import Events from '../Screens/Events/Events'

function App() {
  return (
    <BrowserRouter>
      <Header />
     
        <Routes>
       <Route path='/' element={<LandingPage />}/>
      <Route path='/events' element={<Events />} /> 
      </Routes>
     
       
        <Footer />
    </BrowserRouter>
    
  );
}

export default App;
