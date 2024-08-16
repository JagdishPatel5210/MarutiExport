import React, { useEffect } from 'react';
import diamondImage from '../assets/Images/Home/Daimond.png';
import pillarsImage from '../assets/Images/Home/pillars2.png';
import missionImage from '../assets/Images/Home/mission3.jpg';
import visionImage from '../assets/Images/Home/vision_4.png';
import cultureImage from '../assets/Images/Home/culture5.png';
import stepImage from '../assets/Images/Home/step-6.png';
import processImage from '../assets/Images/Home/process-7.jpg';
import selectImage from '../assets/Images/Home/shorting8.png';
import markImage from '../assets/Images/Home/marking9.png';
import sowingImage from "../assets/Images/Home/back10.png";
import sowing1Image from '../assets/Images/Home/sawing10a.jpg';
import sowing2Image from '../assets/Images/Home/sawing10b.png';
import polishImage from '../assets/Images/Home/polish-11.png.jpg';
import logoImage from '../assets/Images/Home/LogoWhite.png';
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { IoEarthSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import BIRDS from 'vanta/dist/vanta.birds.min'
import WAVES from 'vanta/dist/vanta.waves.min.js';


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
                            <a className="navbar-brand " href="#" id='home'><img src={logoImage} alt="logo" className="w-25 " /></a>
                        </div>
                        <div className="col-lg-8">
                            <ul className="nav pt-4 d-flex ">
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><h5>Home</h5></a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="#about"><h5>About  </h5></a>
                                </li>
                                <li className="nav-item">
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#Quality"><h5>Quality</h5></a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#Process"><h5>Process</h5></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#Contect"><h5>Contact Us</h5></a>
                                </li>
                                <li className='d-flex pt-2 ican'>
                                    <a href="#" className="ps-2 text-light"> <GrInstagram /> </a>
                                    <a href="#" className="ps-2 text-light"> <FaFacebookF /> </a>
                                    <a href="#" className="ps-2 text-light">  <FaLinkedinIn /> </a>
                                    <a href="#" className="ps-2 text-light"> <FaTelegram /></a>
                                    <a href="#" className="ps-2 text-light"> <BsWhatsapp /> </a>
                                </li>
                                <li className='  ps-4'>
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

            <div className="container-fluid pt-5 " id='vanta1'>
                <div className="container p-5 ">
                    <div className="row py-4 my-5 " >
                        <div className="col-md-6 text-center main" data-aos="zoom-in" data-aos-duration="3000">
                            <img src={diamondImage} alt="diamond1" className="img-fluid w-100  rounded-4 " data-aos="fade-up" />
                        </div>
                        <div className="col-md-6 ps-4" data-aos="zoom-in" data-aos-duration="3000">
                            <h1 className='head1 pt-2' >Maruti Export: A Legacy of Diamonds</h1>
                            <p className='discription '>
                                Established in 2019,
                                <a href='#' className='text-black text-decoration-none fw-bold'><span>  Maruti Export  </span></a>
                                is a well-recognized and one of the most trusted diamond manufacturers and exporters in India. Built on the legacy of faith, trust, honesty,
                                transparency and perfection. At Maruti Export, we try to integrate the latest technology with our conventional values to turn stones into a perfect diamond.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container p-5 mt-5 " id='about'>
                    <div className="row py-5 my-5 ">
                        <div className="col-md-6 " data-aos="flip-left" data-aos-duration="3000">
                            <h1 className='secondhead pt-4'>Our Foundation: Pillars of Trust</h1>
                            <p className='discription pt-5'>
                                Maruti Export was built on the foundation of four key pillars -faith, trust, honesty & transparency.
                                The 4 main pillars are on which the foundation of the Maruti Export was built and will sustain forever.
                            </p>
                        </div>
                        <div className="col-md-6  pillars " data-aos="flip-right" data-aos-duration="3000" >
                            <img src={pillarsImage} alt="pillars2" className="img-fluid w-100  rounded-4" />
                        </div>
                    </div>
                </div>


                <div className="container p-5 mt-5">
                    <div className="row py-5 my-5 ">
                        <div className="col-md-6 mission" data-aos="fade-right" data-aos-duration="3000" >
                            <img src={missionImage} alt="mission3" className="img-fluid w-100  rounded-4 " />
                        </div>
                        <div className="col-md-6 ps-4" data-aos="fade-left" data-aos-duration="3000" >
                            <h1 className='secondhead pt-5'>Our Mission: Excellence in Diamonds</h1>
                            <p className='discription pt-5'>
                                Our Mission is to be the leading diamond manufacturer in the industry while guaranteeing maximum
                                satisfaction with the purchase of each stone and to provide fine quality diamond in terms of cut,
                                color, carat, and clarity for its price.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="container p-5 mt-5" id='Quality'>
                    <div className="row py-5 my-5">
                        <div className="col-md-6 pt-5 " data-aos="flip-up" data-aos-duration="3000" >
                            <h1 className='secondhead pt-4'>Our Vision: Shaping the Future of Diamonds</h1>
                            <p className='discription pt-5'>
                                Maruti Export's vision is to adopt the latest manufacturing technology and innovative management concepts
                                to become the world's leading diamond manufacturer, and become the world's most valued company by setting
                                industry standards for the highest quality and most efficient diamonds.
                            </p>
                        </div>
                        <div className="col-md-6  vision " data-aos="flip-down" data-aos-duration="3000">
                            <img src={visionImage} alt="vision4" className="img-fluid w-100 rounded-4" />
                        </div>
                    </div>
                </div>



                <div className="container p-4 mt-5">
                    <div className="row my-5 ">
                        <div className="col-md-6  culture" data-aos="flip-right" data-aos-duration="3000"  >
                            <img src={cultureImage} alt="culture5" className="img-fluid w-100 rounded-4" />
                        </div>
                        <div className="col-md-6" data-aos="flip-left" data-aos-duration="3000" >
                            <h1 className='secondhead '>A Culture of Performance</h1>
                            <p className='discription'>
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



                <div className="container p-5  " id='Process'>
                    <div className="row py-5 my-5">
                        <div className="col-md-6" data-aos="zoom-in-right" data-aos-duration="3000" >
                            <h1 className='secondhead pt-5'>QUALITY AT EACH STEP</h1>
                            <ul className='discription text-black ps-3 pt-3 list-unstyled'>
                                <li> <a href="#craftmenship"> <MdArrowForwardIos /> CRAFTMENSHIP </a></li>
                                <li> <a href="#selecting"> <MdArrowForwardIos /> SELECTING / SORTING </a></li>
                                <li> <a href="#marking"> <MdArrowForwardIos /> MARKING </a></li>
                                <li><a href="#sawing"> <MdArrowForwardIos /> SAWING </a></li>
                                <li><a href="#polishing"> <MdArrowForwardIos /> POLISHING </a></li>
                                <li><a href="#monitoring"> <MdArrowForwardIos /> MONITORING </a></li>
                            </ul>
                        </div>
                        <div className="col-md-6  step" data-aos="zoom-in-right" data-aos-duration="3000">
                            <img src={stepImage} alt="step1" className="img-fluid w-100 rounded-4" />
                        </div>
                    </div>
                </div>




                <div className="container pt-5 mt-4" id='craftmenship'>
                    <div className="row py-5 my-5 ">
                        <div className="col-md-6 process" data-aos="fade-right" data-aos-duration="3000"  >
                            <img src={processImage} alt="process7" className="img-fluid w-100  rounded-4" />
                        </div>
                        <div className="col-md-6 ps-4 " data-aos="fade-right" data-aos-duration="3000" >
                            <h1 className='secondhead '>Craftsmanship: The Heart of Our Process</h1>
                            <p className='discription'>
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



                <div className="container p-5 mt-5" id='selecting'>
                    <div className="row py-5 my-5">
                        <div className="col-md-6 " data-aos="fade-left" data-aos-duration="3000">
                            <h1 className='secondhead pt-5'>Selecting and Sorting: The First Step</h1>
                            <p className='discription pt-5'>
                                The first and vital step in the diamond cutting and polishing process is the analysis of the rough diamond. This step requires
                                all-consuming imagination, skill, and precision, by an experienced diamond cutter. The optimum cut for the diamond is chosen after assessing
                                its size, shape, clarity, and crystal direction in order to maximize its final value and beauty. At Maruti Export, we ensure that each rough is
                                evaluated by a trained eye capable of determining the finest potential cut for the stone.
                            </p>
                        </div>
                        <div className="col-md-6  sorting" data-aos="fade-left" data-aos-duration="3000">
                            <img src={selectImage} alt="select8" className="img-fluid w-100 rounded-4" />
                        </div>
                    </div>
                </div>



                <div className="container pb-5 " id='marking'>
                    <div className="row py-5 my-5 ">
                        <div className="col-md-6 mark" data-aos="fade-right" data-aos-duration="3000" >
                            <img src={markImage} alt="mark9" className="img-fluid w-100 rounded-4" />
                        </div>
                        <div className="col-md-6 ps-4 " data-aos="fade-right" data-aos-duration="3000">
                            <h1 className='secondhead pt-5'>Marking: Precision for Perfection</h1>
                            <p className='discription'>
                                One of the most important phases in the production process is marking. It is accomplished by the use of 3D laser technology.
                                Incorrect marking by a fraction of a millimeter can have a significant influence on the finished gem's quality. Every rough
                                contains impurities that must be removed in order to optimize the rough gemstone's output and reduce waste.
                            </p>
                        </div>
                    </div>
                </div>





                <div className="container mt-5" id='sawing'>
                    <div className="row py-5 my-5">
                        <div className="col-md-6" data-aos="fade-left" data-aos-duration="3000">
                            <h1 className='secondhead pt-5'>Sawing: Shaping the Diamond</h1>
                            <p className='discription pt-5'>
                                Sawing is the process of separating a diamond rough into separate pieces that will be polished as individual diamonds. During the design stage,
                                our artisans identify the sawing planes. At Maruti Export, we utilize the most recent high-quality laser sawing machines to cut raw diamonds
                                extremely precisely and accurately, in line with the appropriate cutting plans. This approach saves time and reduces human error to virtually
                                nil, which would otherwise have resulted in a significant decrease in its worth.
                            </p>
                        </div>
                        <div className="col-md-6 position-relative p-5" data-aos="fade-left" data-aos-duration="3000">
                            <div className="image-stack ">
                                <img src={sowing1Image} alt="First" className="  w-50 rounded-4 stack-image image1" />
                                <img src={sowingImage} alt="Second" className=" w-50  rounded-4 stack-image image2" />
                                <img src={sowing2Image} alt="Third" className=" w-50  rounded-4 stack-image image3" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container p-5 mt-5" id='polishing'>
                    <div className="row py-5 my-5 p-5">
                        <div className="col-md-6 polish  " data-aos="fade-right" data-aos-duration="3000">
                            <img src={polishImage} alt="mark9" className="img-fluid w-100 rounded-4" />
                        </div>
                        <div className="col-md-6 ps-4" data-aos="fade-right" data-aos-duration="3000">
                            <h1 className='secondhead pt-5'>Polishing: Bringing Out the Sparkle</h1>
                            <p className='discription'>
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
                <div className="container">
                    <div className="row text-light py-3">
                        <div className="row text-light">
                            <div className="col-lg-3">
                                <img src={logoImage} alt="logo2" className="w-75 py-5 text-center" />
                            </div>
                            <div className="col-lg-3 text-start ">
                                <h2 className='py-4'>Contact Us :-</h2>
                                <div className='pt-3 fs-5 cont'> <IoEarthSharp /> marutiexport.com</div>
                                <div className='pt-3 fs-5 cont'><IoCall />  +91 73861 58615</div>

                                <div className="d-flex fs-3 m-2">
                                    <a href="#" className="pe-3 text-light"> <FaFacebookF className='cont' /></a>
                                    <a href="#" className="pe-3 text-light"> <GrInstagram className='cont' />  </a>
                                    <a href="#" className="pe-3 text-light"> <BsWhatsapp className='cont' /> </a>
                                </div>
                            </div>


                            <div className="col-lg-3 text-start">
                                <h2 className='py-4'>Information</h2>
                                <ul className="m-2 list-unstyled fs-5">
                                    <li className="mt-2 "> <a href="#" className="cont"> <MdArrowForwardIos /> FAQ</a></li>
                                    <li className="mt-2"><a href="#" className="cont"> <MdArrowForwardIos /> About Us</a></li>
                                    <li className="mt-2"><a href="#" className="cont"> <MdArrowForwardIos /> Our collection</a></li>
                                    <li className="mt-2"> <a href="#" className="cont"> <MdArrowForwardIos /> Contect Us</a></li>
                                    <li className="mt-2"> <a href="#" className="cont"> <MdArrowForwardIos /> Login</a></li>
                                </ul>
                            </div>


                            <div className="col-lg-3">
                                <h2 className='py-4 text-center'>Contact With us</h2>
                                <form >
                                    <div className="my-4 d-flex">
                                        <FaUserAlt className='fs-5 m-2 cont' />
                                        <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name" />
                                    </div>
                                    <div className="my-4 d-flex">
                                        <IoMdMail className='fs-5 m-2 cont' />
                                        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                                    </div>
                                    <div className="button-grid text-center ">
                                        <button class="button button--animated bg-dark "  onClick={(() => goToLogin())}>
                                            <span class="button__text">Login </span> <FaArrowRightLong className='button__icon m-1 ' />
                                        </button>
                                        
                                    </div>


                                    {/* <div className="p-3 text-center"><button type="submit" className="btn btn-primary border-0 fs-5 login ">LOGIN</button></div> */}
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