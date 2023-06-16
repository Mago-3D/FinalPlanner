import "./App.css";
import LargeCarousel from "./components/Carousel/LargeCarousel";
import { Route, Routes, NavLink } from "react-router-dom";
import Error404 from './pages/Error404'
import './components/NavBar/navBar.css'
import logo from './image/logo.png'
import Contact from './pages/Contact'
import About from "./pages/About";
import Baby from "./components/Application/Baby";
import Bucket from "./components/Application/Bucket";
import Celebrity from "./components/Application/Celebrity";
import Facts from "./components/Application/Facts";
import Hobby from "./components/Application/Hobby";
import Marvel from "./components/Application/Marvel";
import StarWars from "./components/Application/StarWars";
import OpenAI from './components/Application/OpenAI'
import Forum from "./pages/Forum";




function App() {


  return (
    <div className="wrapper">
      
      <div className="navBar">
                <div className="logo-div"><img className="logo-img" src={logo} alt="logo"/></div>
            <ul className="list-navBar">
                <NavLink to='/' ><li className='navBar-link'>Home</li></NavLink>
                <NavLink to='/about'><li className='navBar-link'>About</li></NavLink>
                <NavLink to='/contact'><li className='navBar-link'>Contacts</li></NavLink>
                <a href='#forum'><li className='navBar-link'>Comments</li></a>
            </ul>
      </div>

      <div className="wrap-container">

        <div className="router">
          <Routes>
            <Route path = '/' element = {<LargeCarousel/>}/>
            <Route path = '/about' element = {<About/>}/>
            <Route path = '/contact' element = {<Contact/>}/>
            <Route path = '/baby' element = {<Baby/>}/>
            <Route path = '/bucket' element = {<Bucket/>}/>
            <Route path = '/celebrity' element = {<Celebrity/>}/>
            <Route path = '/facts' element = {<Facts/>}/>
            <Route path = '/hobby' element = {<Hobby/>}/>
            <Route path = '/marvel' element = {<Marvel/>}/>
            <Route path = '/starwars' element = {<StarWars/>}/>
            <Route path = '/openai' element = {<OpenAI/>}/>
            <Route path = '*' element = {<Error404/>}/>
          </Routes>
      </div>

      <div className="forum" id="forum">
          <Forum />
      </div>



    </div>
    </div>
  );
}

export default App;
