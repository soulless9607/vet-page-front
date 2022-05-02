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
//   var axios = require('axios');

// var users = {
//   method: 'get',
//   url: 'https://api.businesscentral.dynamics.com/v2.0/fd62330a-a1ca-4ab2-b688-c375d4b924ed/Sandbox/ODataV4/Company(\'CRONUS%20ES\')/B2BCustomerAPI',
//   headers: {
//     'Authorization': 'Basic QU5BTFlUSUNTOlByK2MvUnJUOEJ0SEFvR20ySUd2L01URmQxbHdVUXFJWUhzSDc5UWdJbXc9'
//   }
// };

// axios(users)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });

// var products = {
//   method: 'get',
//   url: 'https://api.businesscentral.dynamics.com/v2.0/fd62330a-a1ca-4ab2-b688-c375d4b924ed/Sandbox/ODataV4/Company(\'CRONUS%20ES\')/B2BItemAPI',
//   headers: {
//     'Authorization': 'Basic QU5BTFlUSUNTOlByK2MvUnJUOEJ0SEFvR20ySUd2L01URmQxbHdVUXFJWUhzSDc5UWdJbXc9'
//   }
// };

// axios(products)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });


  return (

    <div>
      <header>
        <Navbar/>
        <Banner />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
        {/* <Search /> */}
      </header> <br></br> <br></br><br></br>
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