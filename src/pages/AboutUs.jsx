import React from 'react'
import Footer from '../components/UI/Footer/Footer';
import Navbar from '../components/UI/Navbar/Navbar';
import CardContent from "@mui/material/CardContent";
import Typography from '@mui/material/Typography';
import Card from "@mui/material/Card";
import './AboutUs.css'

import YoutubeEmbed from "../components/Youtube/Youtube";

const AboutUs = () => {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <div className="about-us" align="center">
      <Card className="card-about" align="center" sx={{ width: 800, height: 500 }}>
          <CardContent className="about-container">
            <Typography variant="h2" >
                Conócenos
              </Typography>
            <Typography variant="subtitle1" align="center"  component="div">
              Lorem ipsum dolor sit amet.
              <br/>
              <br/>
            </Typography>
            <Typography variant="content" align="center"  component="div">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </Typography>


          </CardContent>

        </Card>


      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AboutUs;