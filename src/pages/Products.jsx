import React from "react";
import Navbar from "../components/UI/Navbar/Navbar";
import Products from "../components/Products/Products";
import Footer from "../components/UI/Footer/Footer";

const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Products />
      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  );
};

export default Home;
