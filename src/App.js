import {Routes, Route, Navigate} from 'react-router-dom'
import Navbar from "./components/Navbar";
import './App.css'
import AboutMe from './components/AboutMe';
import Banner from './components/Banner';
import ProjectsBanner from './components/ProjectsBanner';
import FooterPortfolio from './components/FooterPortfolio';
import ContactForm from './components/ContactForm';
import FitLabBanner from './components/FitLabBanner';


function App() {

  return (
    <div>
      <Navbar/>

      <FooterPortfolio/>

      <Routes>
        <Route path='*' element={<Navigate to='/projects' replace/>}/>

        <Route path='/projects' element={<>
                                            <Banner/>
                                            <ProjectsBanner/>
                                            </>}/>
        <Route path='/introduction' element={<AboutMe/>}/>

        <Route path='/contact' element={<ContactForm/>}/>

        <Route path='/project/fitlab' element={<>
                                                  <FitLabBanner/>
                                                  </>}/>

      </Routes>
    </div>
  );
}

export default App;
