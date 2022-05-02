import React from 'react'
import  Navbar from "../components/UI/Navbar/Navbar";
import Banner from "../components/Home/Banner";
import Sales from "../components/Home/Sales";
import Testimonial from "../components/Home/Testimonial";
import Join from "../components/Home/Join";
import About from "../components/Home/About";
import Tutorial from "../components/Home/Tutorial";
import Footer from '../components/UI/Footer/Footer';
import Distributor from '../components/Home/Distributor';

const Home = () => {
  return (

    <div>
      <header>
        <Navbar/>
        <Banner />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
        {/* <Search /> */}
      </header>
      <Sales />
      <Testimonial />
      <Join />
      <About />
      <Tutorial />
      <Distributor />
      <footer>
        <Footer />
      </footer>
    </div>

  );
};

export default Home;