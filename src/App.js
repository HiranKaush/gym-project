import { useEffect } from 'react';
import Aos from "aos";
import './App.css';
import Header from './components/Header/header'
import Hero from './components/UI/Hero'
import Exercise from './components/UI/Exercise';
import Start from './components/UI/Start'
import Pricing from './components/UI/Pricing'
import Footer from './components/UI/Footer';

function App() {

  useEffect(()=>{
    Aos.init()
  },[])

  return (
    <>
    <Header/>
    <Hero />
    <Exercise/>
    <Start />
    <Pricing />
    <Footer/>
    </>
  );
}

export default App;
