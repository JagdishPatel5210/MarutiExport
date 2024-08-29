import React, { useEffect } from 'react';
import logoImage from '../assets/Images/Home/LogoWhite.png';
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoEarthSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import WAVES from 'vanta/dist/vanta.waves.min.js';


import carouselImg1 from "../assets/Images/Home/dimondcaresol-133.jpg";
import carouselImg2 from "../assets/Images/Home/dimondcarosal-155.jpg";
import carouselImg3 from "../assets/Images/Home/dimonds-144.jpg";
import carouselImg4 from "../assets/Images/Home/dimondcarsol-66.jpg";


import card11Image from '../assets/Images/Home/card111.jpg';
import card12Image from '../assets/Images/Home/cardimg12a.jpg';
import card13Image from '../assets/Images/Home/card-img13.jpg';
import card14Image from '../assets/Images/Home/cardimg.webp';
import card15Image from '../assets/Images/Home/diamond-polishing.jpg';
import card16Image from '../assets/Images/Home/cardimg-222.jpg';

import doteImage from "../assets/Images/Home/back12.jpg";
import rufeImage from "../assets/Images/Home/diomand-56.jpg";
import rufe1Image from "../assets/Images/Home/Victor_Rough.png";
import rufe2Image from "../assets/Images/Home/diamond-131.jpg";

import dote2Image from "../assets/Images/Home/diomand-222.jpg";
import our2Image from "../assets/Images/Home/culture5.png";
import pill2Image from "../assets/Images/Home/diamond-225.jpg";
import well2Image from "../assets/Images/Home/download-212.jpeg";

import dote3Image from "../assets/Images/Home/background-3.jpg";
import missn31Image from "../assets/Images/Home/mission3.jpg";
import missn32Image from "../assets/Images/Home/How Diamonds-213.jpg";
import missn33Image from "../assets/Images/Home/1.jpg";

import dote4Image from "../assets/Images/Home/background-6.jpg";
import pilr41Image from "../assets/Images/Home/pillars2.png";
import pilr42Image from "../assets/Images/Home/StockCake-Lustrous Diamond Brilliance_1724156918.jpg";
import pilr43Image from "../assets/Images/Home/StockCake-Cradling Precious Gem_1724156976.jpg";

import dote5Image from "../assets/Images/Home/background-52.jpg";
import cult21Image from "../assets/Images/Home/diamonds-4040800_1920.jpg";
import cult22Image from "../assets/Images/Home/StockCake-Sparkling Diamond Brilliance_1724156554.jpg";
import cult23Image from "../assets/Images/Home/StockCake-Sparkling Solitaire Diamond_1724156478.jpg";

import dote6Image from "../assets/Images/Home/172072.jpg";
import craf11Image from "../assets/Images/Home/process-7.jpg";
import craf12Image from "../assets/Images/Home/diomand-54.jpg";
import craf13Image from "../assets/Images/Home/diomand-53.jpg";

import dote7Image from "../assets/Images/Home/backgrund-32.jpg";
import step11Image from "../assets/Images/Home/diamond61.jpeg";
import step12Image from "../assets/Images/Home/step-66.jpg";
import step13Image from "../assets/Images/Home/shorting8.png";

import dot1Image from "../assets/Images/Home/marking33.jpg";
import mark11Image from "../assets/Images/Home/marking9.png";
import mark12Image from "../assets/Images/Home/marking44.jpg";
import mark13Image from "../assets/Images/Home/marking-22.jpg";

import dot2Image from "../assets/Images/Home/shawing51-.jpg";
import saw11Image from "../assets/Images/Home/sawing10a.jpg";
import saw12Image from "../assets/Images/Home/sawing10b.png";
import saw13Image from "../assets/Images/Home/shawing55-.jpeg";

import dot13Image from "../assets/Images/Home/polish271.jpg";
import poli11Image from "../assets/Images/Home/polish-11.png.jpg";
import poli12Image from "../assets/Images/Home/polisg27.jpg";
import poli13Image from "../assets/Images/Home/polish25.jpg";

function Home() {
    useEffect(() => {
        WAVES({
            el: '#vanta',
            color: 0xeaeded,
            waveHeight: 20,
            shininess: 50,
            waveSpeed: 1.5,
            zoom: 0.75
        })
    }, [])
    

    const goToLogin = () => {
        debugger
        window.location.href = 'http://app.marutiexp.com/login';
    }


    return (
        <>
            <div data-aos="fade-right"></div>
            <div className="container-fluid  nav1" >
                <div className='container'>
                    <div className="row d-flex py-2">
                        <div className="col-lg-4 ">
                            <a className="navbar-brand " href="#" id='#'><img src={logoImage} alt="logo" className="w-25" /></a>
                        </div>
                        <div className="col-lg-7 menu menu-2 ">
                            <ul className="nav pt-3 d-flex fw-bold justify-content-end ">
                                <li className="nav-item pe-3 ">
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className="nav-item pe-3 ">
                                    <a className="nav-link" href="#about">About</a>
                                </li>
                                <li className="nav-item pe-3 ">
                                    <a className="nav-link" href="#Quality">Quality</a>
                                </li>
                                <li className="nav-item pe-3 ">
                                    <a className="nav-link" href="#Process">Process</a>
                                </li>
                                <li className="nav-item pe-3 ">
                                    <a className="nav-link" href="#Contect">Contact Us</a>
                                </li>
                                <li className='pe-3'>
                                    <div className="button-grid text-center ">
                                        <button class="button button--animated bg-dark " onClick={(() => goToLogin())}>
                                            <span class="button__text">Login </span> <FaArrowRightLong className='button__icon m-1 ' />
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

              

            



          
            <div className="container-fluid letest pt-5" id='home' >
                <div className="container pt-5" >
                    <div className="row pt-5">
                        <div className="col-lg-7" data-aos="zoom-in" data-aos-duration="3000">
                            <div className='img-stak position-relative pt-5'>
                                <img src={doteImage} alt="" className="img-fluid rounded-4  stak-img img-1" />
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
  



            <div className="container-fluid fountion" id='about'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 pt-5" data-aos="flip-left" data-aos-duration="3000">
                            <h1 className='secondhead pt-3'>Our Foundation: Pillars of Trust</h1>
                            <p className='discription pe-5'>
                                Maruti Export was built on the foundation of four key pillars -faith, trust, honesty & transparency.
                                The 4 main pillars are on which the foundation of the Maruti Export was built and will sustain forever.
                            </p>
                        </div>
                        <div className="col-lg-7">
                            <div className='img-stak position-relative pt-5' data-aos="flip-right" data-aos-duration="3000" >
                                <img src={dote2Image} alt="" className="img-fluid rounded-4  stak-img imag-1" />
                                <img src={pill2Image} alt="" className="img-fluid rounded-4  stak-img imag-2" />
                                <img src={well2Image} alt="" className="img-fluid rounded-4  stak-img  imag-3" />
                                <img src={our2Image} alt="rufe" className="img-fluid rounded-4  stak-img imag-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid misson" >
                <div className="container pt-5">
                    <div className="row pt-5">
                        <div className="col-lg-7" >
                            <div className='img-stak position-relative pt-5' data-aos="fade-right" data-aos-duration="3000">
                                <img src={dote3Image} alt="" className="img-fluid rounded-4  stak-img iamg1" />
                                <img src={missn32Image} alt="" className="img-fluid rounded-4  stak-img iamg2" />
                                <img src={missn33Image} alt="" className="img-fluid stak-img rounded-4 iamg3" />
                                <img src={missn31Image} alt="rufe" className="img-fluid rounded-4  stak-img iamg4" />
                            </div>
                        </div>
                        <div className="col-lg-4  pt-5" data-aos="fade-left" data-aos-duration="3000">
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


            <div className="container-fluid vision" id='Quality'>
                <div className="container mt-5">
                    <div className="row mt-5">
                        <div className="col-lg-5 pt-5" data-aos="flip-up" data-aos-duration="3000">
                            <h1 className='secondhead pt-3'>Our Vision: Shaping the Future of Diamonds</h1>
                            <p className='discription pe-5'>
                                Maruti Export's vision is to adopt the latest manufacturing technology and innovative management concepts to become the world's leading diamond
                                manufacturer, and become the world's most valued company by setting industry standards for the highest quality and most efficient diamonds.
                            </p>
                        </div>
                        <div className="col-lg-7">
                            <div className='img-stak position-relative pt-5' data-aos="flip-down" data-aos-duration="3000">
                                <img src={dote4Image} alt="" className="img-fluid rounded-4  stak-img imag4-1" />
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
                    <div className="row">
                        <div className="col-lg-7" >
                            <div className='img-stak position-relative pt-5' data-aos="flip-right" data-aos-duration="3000">
                                <img src={dote5Image} alt="" className="img-fluid rounded-4  stak-img iamg11" />
                                <img src={cult21Image} alt="" className="img-fluid rounded-4  stak-img iamg12" />
                                <img src={cult22Image} alt="" className="img-fluid stak-img rounded-4 iamg13" />
                                <img src={cult23Image} alt="rufe" className="img-fluid rounded-4  stak-img iamg14" />
                            </div>
                        </div>
                        <div className="col-lg-4 " data-aos="flip-left" data-aos-duration="3000" >
                            <h1 className='secondhead pt-5'>A Culture of Performance</h1>
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



            <div className="container-fluid pt-5 pb-5 conte" id='Process'>
                <a href="#poss" className=" fs-2 text-decoration-none
                 text-center p-5 das-1 ">
                    <h1 className='menu-bottom-line '>Process</h1> </a>
                <div className="row">


                    <div className="col-lg-2"  >
                        <div class="container1">
                            <div class="card border-0">
                                <div class="face face1">
                                    <div class="content"> <img src={card11Image} alt="" className="img-fluid w-100 h-100"/> </div>
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
                            <div class="card border-0">
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
                            <div class="card border-0">
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
                            <div class="card border-0">
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
                            <div class="card border-0">
                                <div class="face face1">
                                    <div class="content">  <img src={card15Image} alt="" className="w-100 image" /> </div>
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
                            <div class="card border-0">
                                <div class="face face1">
                                    <div class="content">   <img src={card16Image} alt="" className="w-100" />  </div>
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


            <div className="container-fluid pt-5 Craft" id='craftmanship'>
                <div className="container pt-5">
                    <div className="row pt-5">
                        <div className="col-lg-7" >
                            <div className='img-stak position-relative pt-5' data-aos="fade-right" data-aos-duration="3000">
                                <img src={dote6Image} alt="" className="img-fluid rounded-4  stak-img iamg21" />
                                <img src={craf11Image} alt="" className="img-fluid rounded-4  stak-img iamg22" />
                                <img src={craf12Image} alt="" className="img-fluid stak-img rounded-4 iamg23" />
                                <img src={craf13Image} alt="rufe" className="img-fluid rounded-4  stak-img iamg24" />
                            </div>
                        </div>
                        <div className="col-lg-4 " data-aos="fade-right" data-aos-duration="3000" >
                            <h1 className='secondhead pt-5'>Craftsmanship: The Heart of Our Process</h1>
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
                            <p className='discription pe-5'>
                                The first and vital step in the diamond cutting and polishing process is the analysis of the rough diamond. This step requires
                                all-consuming imagination, skill, and precision, by an experienced diamond cutter. The optimum cut for the diamond is chosen after assessing
                                its size, shape, clarity, and crystal direction in order to maximize its final value and beauty. At Maruti Export, we ensure that each rough is
                                evaluated by a trained eye capable of determining the finest potential cut for the stone.
                            </p>
                        </div>
                        <div className="col-lg-7">
                            <div className='img-stak position-relative pt-5' data-aos="fade-left" data-aos-duration="3000">
                                <img src={dote7Image} alt="" className="img-fluid rounded-4  stak-img imag41" />
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
                                <img src={dot1Image} alt="" className="img-fluid rounded-4  stak-img iamg-21" />
                                <img src={mark11Image} alt="" className="img-fluid rounded-4  stak-img iamg-22" />
                                <img src={mark12Image} alt="" className="img-fluid stak-img rounded-4 iamg-23" />
                                <img src={mark13Image} alt="rufe" className="img-fluid rounded-4  stak-img iamg-24" />
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="fade-right" data-aos-duration="3000">
                            <h1 className='secondhead'>Marking: Precision for Perfection</h1>
                            <p className='discription pt-2'>
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
                            <p className='discription pe-5'>
                                Sawing is the process of separating a diamond rough into separate pieces that will be polished as individual diamonds. During the design stage,
                                our artisans identify the sawing planes. At Maruti Export, we utilize the most recent high-quality laser sawing machines to cut raw diamonds
                                extremely precisely and accurately, in line with the appropriate cutting plans. This approach saves time and reduces human error to virtually
                                nil, which would otherwise have resulted in a significant decrease in its worth.
                            </p>
                        </div>
                        <div className="col-lg-7">
                            <div className='img-stak position-relative pt-5' data-aos="fade-left" data-aos-duration="3000">
                                <img src={dot2Image} alt="" className="img-fluid rounded-4  stak-img imag41" />
                                <img src={saw11Image} alt="" className="img-fluid rounded-4  stak-img imag42" />
                                <img src={saw12Image} alt="" className="img-fluid rounded-4  stak-img  imag43" />
                                <img src={saw13Image} alt="rufe" className="img-fluid rounded-4  stak-img imag44" />
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
                                <img src={dot13Image} alt="" className="img-fluid rounded-4  stak-img iamg-25" />
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
                    <div className="row text-light py-3">
                        <div className="row text-light">

                            <div className="col-lg-3">
                                <img src={logoImage} alt="logo2" className="w-100 p-5" />
                            </div>

                            <div className="col-lg-3 text-start ">
                                <h4 className='pt-3 '>Contact Us :-</h4>
                                <div className=' pt-3 cont'> <IoEarthSharp /> marutiexport.com</div>
                                <div className='pt-3 cont'><IoCall />  +91 73861 58615</div>

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
                                        <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name" />
                                    </div>
                                    <div className="my-4 d-flex">
                                        <IoMdMail className='fs-5 m-2 cont' />
                                        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                                    </div>
                                    <div className="button-grid text-center ">
                                        <button type='submit' class="button button--animated bg-dark" onClick={((e) => { e.preventDefault(); goToLogin() })}>
                                            <span class="button__text">Login </span>
                                            <FaArrowRightLong className='button__icon m-1 ' />
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