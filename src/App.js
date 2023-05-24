import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './Components/Layout/Header';
import Hero from './Components/Elements/Hero';
import Footeer from './Components/Layout/Footeer';
import Section1 from './Components/Elements/Section1';
import Section2 from './Components/Elements/Section2';
import Section3 from './Components/Elements/Section3';
import Section4 from './Components/Elements/Section4';

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Footeer/>
      
    </div>
  );
}

export default App;
