import React, { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoImage from '../assets/Images/Home/Maruti Export Final 01.png';
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoEarthSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import contectlogoImg from '../assets/Images/Home/LogoWhite.png'
import { Carousel, NavbarToggle } from 'react-bootstrap';
import "../Pages/scroll.js";
import "../Pages/Carsousel.js";

import card11Image from '../assets/Images/Home/card111.jpg';
import card12Image from '../assets/Images/Home/cardimg12a.jpg';
import card13Image from '../assets/Images/Home/card-img13.jpg';
import card14Image from '../assets/Images/Home/cardimg.webp';
import card15Image from '../assets/Images/Home/diamond-polishing.jpg';
import card16Image from '../assets/Images/Home/cardimg-222.jpg';

// import video from '../assets/Images/Home/video/video12.jpg';

import carousel11 from '../assets/Images/Home/carsolimage-3.jpg';

// import carousel12 from '../assets/Images/Home/shapesdimnd-2.jpg'
// import carousel13 from '../assets/Images/Home/shapesdimnd-3.jpg'
// import carousel14 from '../assets/Images/Home/carsolimg-5.jpg'

import carousel2 from '../assets/Images/Home/carsolimg-3.jpg';

import carousel31 from '../assets/Images/Home/carsolimage.4.jpg';
// import carousel32 from '../assets/Images/Home/photoescarsol-177.jpg'
// import carousel33 from '../assets/Images/Home/photoescarsol-166.jpg'
// import carousel34 from '../assets/Images/Home/photoescarsol-188.jpg'

import carousel41 from '../assets/Images/Home/carsolimage-1.jpg';
import carousel42 from '../assets/Images/Home/carsolimage-3i.jpg';
import carousel43 from '../assets/Images/Home/photoescarsol-144.jpg';
import carousel44 from '../assets/Images/Home/carsolimage3a.jpg';

import carousel51 from '../assets/Images/Home/carsolimage-11.jpg';

// import car1img from'../assets/Images/Home/shapesdimnd-2.jpg'
// import car2img from'../assets/Images/Home/shapesdimnd-3.jpg'
// import car3img from'../assets/Images/Home/carsolimg-12.jpg'
// import car4img from'../assets/Images/Home/shapesdimnd-5.jpg'

// import doteImage from "../assets/Images/Home/back12.jpg";
import rufeImage from "../assets/Images/Home/diomand-56.jpg";
import rufe1Image from "../assets/Images/Home/Victor_Rough.png";
import rufe2Image from "../assets/Images/Home/diamond-131.jpg";

// import dote2Image from "../assets/Images/Home/diomand-222.jpg";
import fount1Image from "../assets/Images/Home/culture5.png";
import fount2Image from "../assets/Images/Home/diamond-225.jpg";
import fount3Image from "../assets/Images/Home/pillors-22.jpg";

// import dote3Image from "../assets/Images/Home/background-3.jpg";
import missn31Image from "../assets/Images/Home/mission3.jpg";
import missn32Image from "../assets/Images/Home/How Diamonds-213.jpg";
import missn33Image from "../assets/Images/Home/1.jpg";

// import dote4Image from "../assets/Images/Home/background-6.jpg";
import pilr41Image from "../assets/Images/Home/pillars2.png";
import pilr42Image from "../assets/Images/Home/pillors-11.jpg";
import pilr43Image from "../assets/Images/Home/vision-12.jpg";

// import dote5Image from "../assets/Images/Home/background-52.jpg";
import cult21Image from "../assets/Images/Home/cluimg-23.jpg";
import cult22Image from "../assets/Images/Home/cluimg-12.jpg";
import cult23Image from "../assets/Images/Home/cluimg-22.jpg";

// import dote6Image from "../assets/Images/Home/172072.jpg";
import craf11Image from "../assets/Images/Home/process-7.jpg";
import craf12Image from "../assets/Images/Home/diomand-54.jpg";
import craf13Image from "../assets/Images/Home/diomand-53.jpg";

// import dote7Image from "../assets/Images/Home/backgrund-32.jpg";
import step11Image from "../assets/Images/Home/rufgedimond-61.jpg";
import step12Image from "../assets/Images/Home/step-66.jpg";
import step13Image from "../assets/Images/Home/shorting8.png";

// import dot1Image from "../assets/Images/Home/marking33.jpg";
import mark11Image from "../assets/Images/Home/marking9.png";
import mark12Image from "../assets/Images/Home/marking-14a.jpg";
import mark13Image from "../assets/Images/Home/marking-22.jpg";

// import dot2Image from "../assets/Images/Home/shawing51-.jpg";
import saw11Image from "../assets/Images/Home/sawing10a.jpg";
import saw12Image from "../assets/Images/Home/sawing10b.png";
import saw13Image from "../assets/Images/Home/shawing-44.jpg";

// import dot13Image from "../assets/Images/Home/polish271.jpg";
import poli11Image from "../assets/Images/Home/polish-11.jpg";
import poli12Image from "../assets/Images/Home/polisg27.jpg";
import poli13Image from "../assets/Images/Home/polish25.jpg";

import dimond1Img from "../assets/Images/Home/dimond-21.jpg";
import dimond2Img from "../assets/Images/Home/dimond-22.jpg";
import dimond3Img from "../assets/Images/Home/dimond-23.jpg";
import dimond4Img from "../assets/Images/Home/dimond-24.jpg";
import dimond5Img from "../assets/Images/Home/dimond-25.jpg";
import dimond6Img from "../assets/Images/Home/dimond-26.jpg";
import dimond7Img from "../assets/Images/Home/dimond-27.jpg";
import dimond8Img from "../assets/Images/Home/dimond-28.jpg";
import dimond9Img from "../assets/Images/Home/dimond-29.jpg";
import dimond10Img from "../assets/Images/Home/dimond-30.jpg";




function Home() {
    const goToLogin = () => {
        debugger
        window.location.href = 'http://app.marutiexp.com/login';
    }
//   document.addEventListener('DOMContentLoaded', () => {
//         const container = document.getElementById('app');
//         if (container) {
//           const root = createRoot(container);
//           root.render(<App />);
//         } else {
//           console.error("Root element with id 'app' not found!");
//         }
// });


    return (
        <>
            <div data-aos="fade-right"></div>
            <div className="container-fluid">
                <div className="nav1">
                    <div className="container">
                        <div className="row d-flex flex-row-reverse">
                            <div className="col-8">
                                <Navbar collapseOnSelect expand="lg" className=' justify-content-end'>
                                    <NavbarToggle aria-controls="responsive-navbar-nav"><IoMenu className='text-white fs-1'/></NavbarToggle>
                                    <Navbar.Collapse id="responsive-navbar-nav">
                                        <div className=" menu menu-2">
                                            <Nav className="d-flex justify-content-end">
                                                <Nav.Link href="#home" className='text-light px-4 menu-line'>Home</Nav.Link>
                                                <Nav.Link href="#about" className='text-light px-4 menu-line'>About</Nav.Link>
                                                <Nav.Link href="#Shapes" className='text-light px-4 menu-line'>Shapes</Nav.Link>
                                                <Nav.Link href="#Quality" className='text-light px-4 menu-line'>Quality</Nav.Link>
                                                <Nav.Link href="#Process" className='text-light px-4 menu-line'>Process</Nav.Link>
                                                <Nav.Link href="#Contect" className='text-light px-4 menu-line'>Contact Us</Nav.Link>
                                                <div className="button-grid text-center px-5">
                                                    <button class="button button--animated bg-light" onClick={(() => goToLogin())}>
                                                        <span class="button__text">Login </span> <FaArrowRightLong className='button__icon m-1' />
                                                    </button>
                                                </div>
                                            </Nav>
                                        </div>
                                    </Navbar.Collapse>
                                </Navbar>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container-fluid  text-center pt-5 ">
                <a className="" href='' ><img src={logoImage} alt="logo" className="p-3 logo text-black" /></a>
            </div>


            <Carousel className='carsol' fade>
                <Carousel.Item className='carsol-item'>
                    <img src={carousel11} alt="first slide" className="w-100  diamonda" />
                    {/* <div className="img-stak position-relative">
                        <img src={carousel11} alt="first slide" className="w-25  img-fluid stak-img carsolimg-1" />
                        <img src={carousel12} alt="first slide" className="w-25  h-75 img-fluid stak-img carsolimg-2" />
                        <img src={carousel13} alt="first slide" className="w-25 h-75 img-fluid stak-img carsolimg-3" />
                        <img src={carousel14} alt="first slide" className="w-25 img-fluid stak-img carsolimg-4" />
                    </div> */}
                </Carousel.Item>

                <Carousel.Item className='carsol-item'>
                    <img src={carousel2} alt="Second slide" className="w-100  diamonda" />
                </Carousel.Item>

                <Carousel.Item className='carsol-item'>
                     <img src={carousel31} alt="therd slide" className="w-100 diamonda" />
                    {/* <div className="img-stak position-relative">
                        <img src={carousel31} alt="first slide" className="w-25 img-fluid stak-img secimg-5" />
                        <img src={carousel32} alt="first slide" className="w-25 img-fluid stak-img secimg-6" />
                        <img src={carousel33} alt="first slide" className="w-25 img-fluid stak-img secimg-7" />
                        <img src={carousel34} alt="first slide" className="w-25 img-fluid stak-img secimg-8" />
                    </div> */}
                </Carousel.Item>

                <Carousel.Item className='carsol-item'>
                    <div className="img-stak position-relative">
                        <img src={carousel41} alt="fourth slide" className="w-25 img-fluid stak-img secimg-1" />
                        <img src={carousel42} alt="fourth slide" className="w-25 img-fluid stak-img secimg-2" />
                        <img src={carousel43} alt="fourth slide" className="w-25 img-fluid stak-img secimg-3" />
                        <img src={carousel44} alt="fourth slide" className="w-25 img-fluid stak-img secimg-4" />
                    </div>
                </Carousel.Item>

                <Carousel.Item className='carsol-item'>
                    <img src={carousel51} alt="fifth slide" className="w-100  diamonda" />
                </Carousel.Item>
            </Carousel>



            <div className="container-fluid  letest" id='home'>
                <div className="container" >
                    <div className="row">
                        <div className="col-lg-7" data-aos="zoom-in" data-aos-duration="3000">
                            <div className='img-stak position-relative'>
                                {/* <img src={doteImage} alt="" className="img-fluid rounded-4  stak-img img-1" /> */}
                                <img src={rufe1Image} alt="" className="img-fluid rounded-4  stak-img img-2" />
                                <img src={rufe2Image} alt="" className="img-fluid stak-img  rounded-4 img-3" />
                                <img src={rufeImage} alt="rufe" className="img-fluid rounded-4  stak-img img-4" />
                            </div>
                        </div>
                        <div className="col-lg-4  pt-5 justify-content-between" data-aos="zoom-in" data-aos-duration="3000">
                            <h1 className='head1 pt-5'>Maruti Export: A Legacy of Diamonds</h1>
                            <p className='discription pt-2'>
                                Established in 2019,
                                <a href='#' className='text-black text-decoration-none fw-bold'><span>  Maruti Export  </span></a>
                                is a well-recognized and one of the most trusted diamond manufacturers and exporters in India. Built on the legacy of faith, trust, honesty,
                                transparency and perfection. At Maruti Export, we try to integrate the latest technology with our conventional values to turn stones into a perfect diamond.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid  fountion" id='about'>
                <div className="container page pt-5">
                    <div className="row pt-5 ">
                        <div className="col-lg-5 pt-5" data-aos="fade-right" data-aos-duration="3000">
                            <h1 className='secondhead pt-3'>Our Foundation: Pillars of Trust</h1>
                            <p className='discription'>
                                Maruti Export was built on the foundation of four key pillars -faith, trust, honesty & transparency.
                                The 4 main pillars are on which the foundation of the Maruti Export was built and will sustain forever.
                            </p>
                        </div>
                        <div className="col-lg-7">
                            <div className='img-stak position-relative pt-5' data-aos="fade-left" data-aos-duration="3000" >
                                {/* <img src={dote2Image} alt="" className="img-fluid rounded-4  stak-img imag-1" /> */}
                                <img src={fount2Image} alt="" className="img-fluid rounded-4  stak-img imag-2" />
                                <img src={fount3Image} alt="" className="img-fluid rounded-4  stak-img  imag-3" />
                                <img src={fount1Image} alt="rufe" className="img-fluid rounded-4  stak-img imag-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container-fluid  misson">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7" >
                            <div className='img-stak position-relative pt-5' data-aos="zoom-in" data-aos-duration="3000">
                                {/* <img src={dote3Image} alt="" className="img-fluid rounded-4  stak-img iamg1" /> */}
                                <img src={missn32Image} alt="" className="img-fluid rounded-4  stak-img iamg2" />
                                <img src={missn33Image} alt="" className="img-fluid stak-img rounded-4 iamg3" />
                                <img src={missn31Image} alt="rufe" className="img-fluid rounded-4  stak-img iamg4" />
                            </div>
                        </div>
                        <div className="col-lg-4  pt-5" data-aos="zoom-in" data-aos-duration="3000">
                            <h1 className='secondhead pt-5'>Our Mission: Excellence in Diamonds</h1>
                            <p className='discription pt-2'>
                                Our Mission is to be the leading diamond manufacturer in the industry while guaranteeing maximum
                                satisfaction with the purchase of each stone and to provide fine quality diamond in terms of cut,
                                color, carat, and clarity for its price.
                            </p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container-fluid  shep bg-light" id='Shapes'>
                <a href="#shap" className=" fs-2 text-decoration-none text-center p-5 das-1 ">
                    <h1 className='menu-bottom-line'>Shapes</h1> </a>
                <div className="row d-flex p-2">
                    <div className="col-1"></div>
                    <div className="col-1">
                            <img src={dimond1Img} alt="dimond1" className='rounded-3 shadow' />
                            <p className="p-3 dim"> Round</p>
                    </div>
                    <div className="col-1">
                            <img src={dimond2Img} alt="dimond2" className='rounded-3 shadow' />
                            <p className="p-3  dim"> Oval</p>
                    </div>
                    <div className="col-1">
                            <img src={dimond3Img} alt="dimond3" className='rounded-3 shadow' />
                            <p className="p-3  dim"> Emerald</p>
                    </div>
                    <div className="col-1">
                            <img src={dimond4Img} alt="dimond4" className='rounded-3 shadow' />
                            <p className="p-3  dim"> Cushion</p>
                    </div>
                    <div className="col-1">
                            <img src={dimond5Img} alt="dimond5" className='rounded-3 shadow' />
                            <p className="p-3  dim"> Pear</p>
                    </div>
                    <div className="col-1">
                            <img src={dimond6Img} alt="dimond6" className='rounded-3 shadow' />
                            <p className="p-3  dim"> Radiant</p>
                    </div>
                    <div className="col-1">
                            <img src={dimond7Img} alt="dimond7" className='rounded-3 shadow' />
                            <p className="p-3  dim"> Princess</p>
                    </div>
                    <div className="col-1">
                            <img src={dimond8Img} alt="dimond8" className='rounded-3 shadow' />
                            <p className="p-3  dim"> Marquise</p>
                    </div>
                    <div className="col-1">
                            <img src={dimond9Img} alt="dimond9" className='rounded-3 shadow' />
                            <p className="p-3 dim"> Asscher</p>
                    </div>
                    <div className="col-1">
                            <img src={dimond10Img} alt="dimond10" className='rounded-3 shadow' />
                            <p className="p-3 dim"> Heart</p>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>


            <div className="container-fluid vision" id='Quality'>
                <div className="container mt-5">
                    <div className="row mt-5">
                        <div className="col-lg-5 pt-5" data-aos="fade-right" data-aos-duration="3000">
                            <h1 className='secondhead pt-3'>Our Vision: Shaping the Future of Diamonds</h1>
                            <p className='discription '>
                                Maruti Export's vision is to adopt the latest manufacturing technology and innovative management concepts to become the world's leading diamond
                                manufacturer, and become the world's most valued company by setting industry standards for the highest quality and most efficient diamonds.
                            </p>
                        </div>
                        <div className="col-lg-7">
                            <div className='img-stak position-relative pt-5' data-aos="fade-left" data-aos-duration="3000">
                                {/* <img src={dote4Image} alt="" className="img-fluid rounded-4   stak-img imag4-1" /> */}
                                <img src={pilr42Image} alt="" className="img-fluid rounded-4  stak-img imag4-2" />
                                <img src={pilr43Image} alt="" className="img-fluid rounded-4  stak-img  imag4-3" />
                                <img src={pilr41Image} alt="rufe" className="img-fluid rounded-4  stak-img imag4-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid Culture" >
                <div className="container ">
                    <div className="row pt-5">
                        <div className="col-lg-7" >
                            <div className='img-stak position-relative pt-5' data-aos="zoom-in" data-aos-duration="3000">
                                {/* <img src={dote5Image} alt="" className="img-fluid rounded-4  stak-img iamg11" /> */}
                                <img src={cult21Image} alt="" className="img-fluid rounded-4  stak-img iamg12" />
                                <img src={cult22Image} alt="" className="img-fluid stak-img rounded-4 iamg13" />
                                <img src={cult23Image} alt="rufe" className="img-fluid rounded-4  stak-img iamg14" />
                            </div>
                        </div>
                        <div className="col-lg-4 " data-aos="zoom-in" data-aos-duration="3000">
                            <h1 className='secondhead pt-5 fw-bold'>A Culture of Performance</h1>
                            <p className='discription pt-2'>
                                A performance-oriented culture is rooted in our company's DNA, making us globally recognized as the preferred supplier
                                in the industry. We, at Maruti Export ensure that the world's most precious gift is received by our customers with care &
                                elegance. We combine knowledge, experience, and innovations to transform a rough stone into a multifaceted diamond reflecting
                                a scintillating sparkle. For the assurance in the authenticity and integrity of diamonds, we are associated with the largest
                                & trusted mining companies like ALROSA, De Beers, & many more. We have consistently mimicked best work practices and
                                benchmarked our operations to global standards. It has given us the competitive edge to outperform, outreach, and outgrow
                                our business internationally since we are known for exporting diamonds to various counties with the USA, Hong Kong being
                                our principal markets. In our journey towards success, willingness to evolve, & adapt has played a major role in
                                creating value for our customers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container-fluid conte bg-light" id='Process'>
                <a href="#poss" className=" fs-2 text-decoration-none text-center p-5 das-1 ">
                    <h1 className='menu-bottom-line'>Process</h1> </a>
                <div className="row">
                    <div className="col-lg-2"  >
                        <div class="container1">
                            <div class="card border-0 bg-light">
                                <div class="face face1">
                                    <div class="content"> <img src={card11Image} alt="" className="img-fluid w-100 h-100" /> </div>
                                </div>
                                <div class="face face2">
                                    <div class="content">
                                        <a href="#craftmanship" class="card-link fw-bold">CRAFTMANSHIP</a>
                                        <p className='pt-2'>Diamond craftsmanship can involve many aspects, including shaping the diamond, cutting it, and setting it in jewelry</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2" >
                        <div class="container1">
                            <div class="card border-0 bg-light">
                                <div class="face face1">
                                    <div class="content">  <img src={card12Image} alt="" className="w-100 h-100 " /> </div>
                                </div>
                                <div class="face face2">
                                    <div class="content">
                                        <a href="#selecting" class="card-link fw-bold"> SELECTING / SORTING</a>
                                        <p className=" pt-2"> Once gem quality diamonds are isolated, they are further
                                            sorted based on their carat, cut, clarity, and color. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div class="container1">
                            <div class="card border-0 bg-light">
                                <div class="face face1">
                                    <div class="content">  <img src={card13Image} alt="" className="w-100" /> </div>
                                </div>
                                <div class="face face2">
                                    <div class="content">
                                        <a href="#marking" class="card-link fw-bold">MARKING</a>
                                        <p className=" pt-2">  Marking is done after examining each rough diamond to decide how
                                            it should be cut to yield the greatest value. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div class="container1">
                            <div class="card border-0 bg-light">
                                <div class="face face1">
                                    <div class="content">   <img src={card14Image} alt="" className="w-100 " /> </div>
                                </div>
                                <div class="face face2">
                                    <div class="content">
                                        <a href="#sawing" class="card-link fw-bold">SAWING</a>
                                        <p className=" pt-2"> Sawing is a step in the process of cutting a diamond, In this process a
                                            diamond saw is used to cut a rough diamond into smaller pieces. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div class="container1">
                            <div class="card border-0 bg-light ">
                                <div class="face face1">
                                    <div class="content">  <img src={card15Image} alt="" className="w-100 image"/> </div>
                                </div>
                                <div class="face face2">
                                    <div class="content">
                                        <a href="#polishing" class="card-link fw-bold">POLISHING</a>
                                        <p className=" pt-2">  The diamond's final facets are polished and shaped to ideal proportions and
                                            perfect symmetry in order for the diamond to reflect the maximum amount of white light. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div class="container1">
                            <div class="card border-0 bg-light">
                                <div class="face face1">
                                    <div class="content">   <img src={card16Image} alt="" className="w-100"/> </div>
                                </div>
                                <div class="face face2">
                                    <div class="content">
                                        <a href="#monitoring" class="card-link fw-bold">MONITORING</a>
                                        <p className=" pt-2"> The Monitoring Association (TMA) grants Five Diamond status to companies that made it their
                                            practice to meet the highestlevels of professionalism, training, and expertise in the industry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container-fluid Craft" id='craftmanship'>
                <div className="container pt-5">
                    <div className="row pt-5">
                        <div className="col-lg-7" >
                            <div className='img-stak position-relative pt-5' data-aos="fade-right" data-aos-duration="3000">
                                {/* <img src={dote6Image} alt="" className="img-fluid rounded-4  stak-img iamg21" /> */}
                                <img src={craf11Image} alt="" className="img-fluid rounded-4  stak-img iamg22" />
                                <img src={craf12Image} alt="" className="img-fluid stak-img rounded-4 iamg23" />
                                <img src={craf13Image} alt="rufe" className="img-fluid rounded-4  stak-img iamg24" />
                            </div>
                        </div>
                        <div className="col-lg-4 " data-aos="fade-right" data-aos-duration="3000" >
                            <h1 className='secondhead pt-5 fw-bold'>Craftsmanship: The Heart of Our Process</h1>
                            <p className='discription pt-2'>
                                Our skilled artisans are driven by a desire to create the most exquisite diamond. The vast majority of our highly
                                experienced workforce has been with us for many years, ensuring continuity, competence, and quality across the board.
                                Our craftsmen treat each piece of stone with the utmost care and attention. While each diamond in our production facility
                                is allocated a definite amount of hours, from sorting to final polishing. Moreover, the degree of dedication that they have
                                shown to the business is one of the reasons why we are renowned in more than 20 countries across the globe for our high -
                                quality diamonds, as much as we are for our excellent value.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid select" id='selecting'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 " data-aos="fade-left" data-aos-duration="3000">
                            <h1 className='secondhead pt-3'>Selecting and Sorting: The First Step</h1>
                            <p className='discription'>
                                The first and vital step in the diamond cutting and polishing process is the analysis of the rough diamond. This step requires
                                all-consuming imagination, skill, and precision, by an experienced diamond cutter. The optimum cut for the diamond is chosen after assessing
                                its size, shape, clarity, and crystal direction in order to maximize its final value and beauty. At Maruti Export, we ensure that each rough is
                                evaluated by a trained eye capable of determining the finest potential cut for the stone.
                            </p>
                        </div>
                        <div className="col-lg-7">
                            <div className='img-stak position-relative pt-5' data-aos="fade-left" data-aos-duration="3000">
                                {/* <img src={dote7Image} alt="" className="img-fluid rounded-4  stak-img imag41" /> */}
                                <img src={step12Image} alt="" className="img-fluid rounded-4  stak-img imag42" />
                                <img src={step13Image} alt="" className="img-fluid rounded-4  stak-img  imag43" />
                                <img src={step11Image} alt="rufe" className="img-fluid rounded-4  stak-img imag44" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid  marking" id='marking' >
                <div className="container ">
                    <div className="row ">
                        <div className="col-lg-7" >
                            <div className='img-stak position-relative' data-aos="fade-right" data-aos-duration="3000">
                                {/* <img src={dot1Image} alt="" className="img-fluid rounded-4  stak-img iamg-21" /> */}
                                <img src={mark11Image} alt="" className="img-fluid rounded-4  stak-img iamg-22" />
                                <img src={mark12Image} alt="" className="img-fluid stak-img rounded-4 iamg-23" />
                                <img src={mark13Image} alt="rufe" className="img-fluid rounded-4  stak-img iamg-24" />
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="fade-right" data-aos-duration="3000">
                            <h1 className='secondhead'>Marking: Precision for Perfection</h1>
                            <p className='discription '>
                                One of the most important phases in the production process is marking. It is accomplished by the use of 3D laser technology.
                                Incorrect marking by a fraction of a millimeter can have a significant influence on the finished gem's quality. Every rough
                                contains impurities that must be removed in order to optimize the rough gemstone's output and reduce waste.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid sawing" id='sawing'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 " data-aos="fade-left" data-aos-duration="3000">
                            <h1 className='secondhead pt-3'>Sawing: Shaping the Diamond</h1>
                            <p className='discription '>
                                Sawing is the process of separating a diamond rough into separate pieces that will be polished as individual diamonds. During the design stage,
                                our artisans identify the sawing planes. At Maruti Export, we utilize the most recent high-quality laser sawing machines to cut raw diamonds
                                extremely precisely and accurately, in line with the appropriate cutting plans. This approach saves time and reduces human error to virtually
                                nil, which would otherwise have resulted in a significant decrease in its worth.
                            </p>
                        </div>
                        <div className="col-lg-7">
                            <div className='img-stak position-relative pt-5' data-aos="fade-left" data-aos-duration="3000">
                                {/* <img src={dot2Image} alt="" className="img-fluid rounded-4  stak-img imag41" /> */}
                                <img src={saw11Image} alt="" className="img-fluid rounded-4  stak-img ima-g42" />
                                <img src={saw12Image} alt="" className="img-fluid rounded-4  stak-img  ima-g43" />
                                <img src={saw13Image} alt="rufe" className="img-fluid rounded-4  stak-img ima-g44" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid  polish" id='polishing' >
                <div className="container pt-5">
                    <div className="row pt-5 ">
                        <div className="col-lg-7" >
                            <div className='img-stak position-relative' data-aos="fade-right" data-aos-duration="3000">
                                {/* <img src={dot13Image} alt="" className="img-fluid rounded-4  stak-img iamg-25" /> */}
                                <img src={poli11Image} alt="" className="img-fluid rounded-4  stak-img iamg-26" />
                                <img src={poli12Image} alt="" className="img-fluid stak-img rounded-4 iamg-27" />
                                <img src={poli13Image} alt="rufe" className="img-fluid rounded-4  stak-img iamg-28" />
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="fade-right" data-aos-duration="3000">
                            <h1 className='secondhead'>Polishing: Bringing Out the Sparkle</h1>
                            <p className='discription pt-2'>
                                Also known as brillianteering, polishing is the final stage of the cutting process. The diamond's final facets are polished
                                and shaped to ideal proportions and perfect symmetry in order for the diamond to reflect the maximum light. The more sparkle
                                and brilliance a diamond has, the more beautiful it is, and the higher its value will be. At Maruti Export, we work with
                                highly specialized and talented craftsmen that determine the fire, brilliance and scintillation a diamond will have.
                            </p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container-fluid infox" id='Contect'>
                <div className="container p-3">
                    <div className="row text-light">
                        <div className="row text-light">

                            <div className="col-lg-3">
                                <img src={contectlogoImg} alt="logo2" className="w-100 p-5" />
                            </div>

                            <div className="col-lg-3 text-start ">
                                <h4 className='pt-3 '>Contact Us :-</h4>
                                <div className=' pt-3'> <IoEarthSharp /> <a href="#" className="cont "> marutiexport.com </a></div>
                                <div className='pt-3'><IoCall /> <a href="#" className="cont"> +91 73861 58615</a></div>

                                <div className="d-flex fs-5 m-2">
                                    <a href="#" className="pe-3 text-light"> <FaFacebookF className='cont' /></a>
                                    <a href="#" className="pe-3 text-light"> <GrInstagram className='cont' />  </a>
                                    <a href="#" className="pe-3 text-light"> <BsWhatsapp className='cont' /> </a>
                                </div>
                            </div>


                            <div className="col-lg-3 text-start">
                                <h4 className='pt-3'>Information</h4>
                                <ul className=" list-unstyled pt-2 ">
                                    <li className="mt-2 "><RiArrowRightDoubleLine /> <a href="#" className="cont"> FAQ</a></li>
                                    <li className="mt-2"><RiArrowRightDoubleLine />  <a href="#" className="cont">  About Us</a></li>
                                    <li className="mt-2"><RiArrowRightDoubleLine />  <a href="#" className="cont">  Our collection</a></li>
                                    <li className="mt-2"> <RiArrowRightDoubleLine />  <a href="#" className="cont">Contect Us</a></li>
                                    <li className="mt-2"> <RiArrowRightDoubleLine />  <a href="#" className="cont">Login</a></li>
                                </ul>
                            </div>


                            <div className="col-lg-3">
                                <h4 className='pt-3 text-center'>Contact With us</h4>
                                <form>
                                    <div className=" pt-3 d-flex">
                                        <FaUserAlt className='fs-5 m-2 cont' />
                                        <input type="text" className="form-control p-0 mx-1" id="name" placeholder="Enter Name" name="name" />
                                    </div>
                                    <div className="my-4 d-flex">
                                        <IoMdMail className='fs-5 m-2 cont' />
                                        <input type="email" className="form-control p-0 mx-1" id="email" placeholder="Enter email" name="email" />
                                    </div>
                                    <div className="button-grid text-center ">
                                        <button type='submit' class="button button--animated bg-light" onClick={((e) => { e.preventDefault(); goToLogin() })}>
                                            <span class="button__text">Login </span>
                                            <FaArrowRightLong className='button__icon m-1' />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Home