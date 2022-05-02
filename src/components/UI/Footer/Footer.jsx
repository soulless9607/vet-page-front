import React from "react";
import "./Footer.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Footer = () => {
  return (

    <div id="wrapper" class="animsition">
    <div id="page" class="clearfix">
    <footer id="footer" class="clearfix">
    <div id="footer-widgets" class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="logo-footer margin-bottom-20">
                    <a href="index.html" rel="home" class="main-logo">
                        <h2> LOGO </h2>
                    </a>
                </div>
                <p class="text-white line-height-32 margin-bottom-20">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus provident culpa
                    aut
                    enim voluptates rerum itaque fugit animi. Consectetur consequatur accusantium asperiores
                    ea
                    ducimus, iste quae ipsam illo minus ad!
                </p>
                <div class="widget-subcribe">
                    <form action="#" method="get" class="subcribe-form margin-right-100">
                        <input type="email" class="subcribe-form-footer" style={{marginRight: "100px"}} placeholder="Ingrese correo"
                               value="" name="s" required /> <ArrowRightAltIcon  sx={{color: "#00a1e6", fontSize: 50 }}/>
                        <button class="btn-subcribe-footer" type="submit" title="subcribe"></button>
                    </form>
                </div>
            </div>
            <div class="col-md-6">
                <div class="footer-widgets-nav-menu text-white">
                    <div class="menu-1 col-md-6 ml-auto mr-auto">
                        <h3 class="widget-title-link-wrap">PRODUCTOS</h3>
                        <ul class="link-wrap" id="footer-ul">
                            <div className="arrow-container">
                            <ArrowRightAltIcon  sx={{color: "#00a1e6", fontSize: 35 }} className = "arrow-icon"/><li><a href="#"> Productos</a></li>
                            </div>
                            <div className="arrow-container">
                            <ArrowRightAltIcon  sx={{color: "#00a1e6", fontSize: 35 }} className = "arrow-icon"/><li><a href="#"> Productos</a></li>
                            </div>

                            <div className="arrow-container">
                            <ArrowRightAltIcon  sx={{color: "#00a1e6", fontSize: 35 }} className = "arrow-icon"/><li><a href="#"> Productos</a></li>
                            </div>

                            <div className="arrow-container">
                            <ArrowRightAltIcon  sx={{color: "#00a1e6", fontSize: 35 }} /><li><a href="#"> Productos</a></li>
                            </div>

                        </ul>
                    </div>
                    <div class="menu-3 col-md-6">
                        <h3 class="widget-title-link-wrap">CONTACTENOS</h3>
                        <ul class="widget-list-contact text-white link-style-2">
                            <li><LocalPhoneIcon/><a href="tel:012345678"
                                   class="">+00
                                1234567</a></li>
                            <li><MailIcon/><a href="#"
                                   class="ml-5">correo@gmail.com</a>
                            </li>
                            <li>
                                <h3 class="address mt-3"> <LocationOnIcon/> Direccion pais y ciudad</h3>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
<div id="bottom" class="clearfix has-spacer">
            <div id="bottom-bar-inner" class="container">
                <div class="bottom-bar-inner-wrap">
                    <div class="bottom-bar-content">
                        <div id="copyright">© 2021 Todos los derechos reservados.</div>
                    </div>
                </div>
            </div>
        </div>
</div>
</div>
  );
};

export default Footer;