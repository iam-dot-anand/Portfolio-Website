import './App.css';
import { About } from './Component/AboutMe';
import { Contact } from './Component/ContactUs';
import { Footer } from './Component/Footer';
import Navbar from './Component/Navbar';
import { Project } from './Component/Project';

function App() {
  return (
    <div className="">
      <Navbar />
      <About/>
      <Project/>
      <Contact/> 
      <Footer/> 
    </div>
  );
}

export default App;
