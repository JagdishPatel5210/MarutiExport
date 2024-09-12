
const boxes = document.querySelectorAll(".box");
let activeIndex = 1;
let isTransitioning = false;

function updateCurrentImg() {
  isTransitioning = true;

  boxes.forEach((box, index) => {
    const isActive = index === activeIndex;
    box.classList.toggle("expanded", isActive);
    box.classList.toggle("closed", !isActive);
  });

  setTimeout(() => {
    isTransitioning = false;
  }, 500);
}

function handleArrowKey(event) {
  if (isTransitioning) {
    return;
  }

  if (event.key === "ArrowRight") {
    activeIndex = (activeIndex + 1) % boxes.length;
  } else if (event.key === "ArrowLeft") {
    activeIndex = (activeIndex - 1 + boxes.length) % boxes.length;
  }

  updateCurrentImg();
}

function handleBoxClick(index) {
  if (isTransitioning) {
    return;
  }

  if (index === activeIndex && boxes[index].classList.contains("expanded")) {
    boxes.forEach((box) => box.classList.remove("closed", "expanded"));
    activeIndex = 0;
  } else {
    activeIndex = index;
    updateCurrentImg();
  }
}

document.addEventListener("keydown", handleArrowKey);

updateCurrentImg();

boxes.forEach((box, index) => {
  box.addEventListener("click", () => handleBoxClick(index));
});















// document.addEventListener('DOMContentLoaded', () => {
//   const slidesData = [
//     { src: '../assets/Images/Home/carsolimg-2.jpg', description: 'Description 1' },
//     { src: './images/img2.jpg', description: 'Description 2' },
//     { src: './images/img3.jpg', description: 'Description 3' },
//     { src: './images/img4.jpg', description: 'Description 4' },
//     { src: './images/img5.jpg', description: 'Description 5' },
//     { src: './images/img6.jpg', description: 'Description 6' },
//     { src: './images/img7.jpg', description: 'Description 7' },
//     { src: './images/img8.jpg', description: 'Description 8' },
//     { src: './images/img9.jpg', description: 'Description 9' }
//   ];

//   const carouselTrack = document.querySelector('.carousel-track');

//   const createSlide = ({ src, description }) => {
//     const slideElement = document.createElement('div');
//     slideElement.className = 'slide';

//     const imgElement = document.createElement('img');
//     imgElement.src = src;
//     imgElement.alt = description;

//     const overlayElement = document.createElement('div');
//     overlayElement.className = 'overlay';
//     overlayElement.textContent = description;

//     slideElement.append(imgElement, overlayElement);

//     return slideElement;
//   };

//   const populateCarouselTrack = (slides) => {
//     const fragment = document.createDocumentFragment();
//     slides.forEach(slide => fragment.appendChild(createSlide(slide)));

//     // Duplicate slides to create a seamless loop effect
//     slides.forEach(slide => fragment.appendChild(createSlide(slide)));

//     carouselTrack.appendChild(fragment);

//     const slideWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--slide-width'));
//     const gapWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--gap-width'));
//     const totalWidth = (slideWidth + gapWidth) * slides.length;
//     const duplicatedTotalWidth = totalWidth * 2;
//     const halfTotalWidth = duplicatedTotalWidth / 2;

//     carouselTrack.style.setProperty('--total-width', `${halfTotalWidth}px`);

//     const baseDuration = 40; // secondes | default = 40
//     const baseWidth = 5000; // px | default = 5000
//     const scrollDuration = (halfTotalWidth / baseWidth) * baseDuration;

//     carouselTrack.style.setProperty('--scroll-duration', `${scrollDuration}s`);
//   };

//   populateCarouselTrack(slidesData);
// });






// import $ from 'jquery';

// let page = 0;
// let limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
//              document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
// let vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
// let done = Math.round(limit/vh)-1;

// let clock = 0;
// window.onwheel = function (event) {
//   //console.log(clock);
//   if(clock === 0){
//   clock = 1;
  
//   let pos= event.deltaY;
//   let scroll=0;  
//   //console.log(event.deltaY);
//   //console.log(scroll);
//       let go = (event.deltaY < 0 ) ? -1 : +1;
//       page = page + go;
//       if(page < 0 )page = 0;
//       if(page > done) page = done;
//       //console.log(page);
              
// $('html, body').animate({
//   scrollTop: vh*page
// });
//   setTimeout(function(){clock = 0}, 1000);
 
// }
// }




// import $ from 'jquery';

// (document).ready(function() {
    
//   //activate wow.js
//    new WOW().init();

//   //activate fullpage.js
//   $('#fullpage').fullpage({
//     scrollBar: true,
//     navigation: true,
//     navigationTooltips: ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4'],
//     loopBottom: true,
//     sectionSelector: 'section'
//   });

// //apply color to each section from array
// int = -1;
// color_array = ['#1abc9c','#c0392b','#9b59b6','#3498db','#f1c40f','#16a085'];

// $('section').each(function(){
//   int++
//   $(this).addClass('grid-item-' + int).css('background-color', color_array[int]);
// });

// });






// import $ from 'jquery';

// $(document).ready(function(){
//   //variable
//   debugger
//   const pages = document.querySelectorAll(".page");
//   const container = document.querySelector(".content-container");
//   const scrollDots = document.querySelectorAll(".scroll > li");
//   const numOfPages = pages.length;
//   let pageIndex = 0;
//   //first slideIn
//   $('.page.active').find('div').css("transform","translateX(0)");
//   //wheel function
//   window.addEventListener("wheel", function (e) {
//     // Scroll Up
//     if (0 < pageIndex && e.deltaY < 0) {pageIndex--;}
//     // Scroll Down
//     else if (pageIndex < numOfPages - 1 && e.deltaY > 0){ pageIndex++;}
//     // Move container up/down.
//     var position="-"+pageIndex*100;
//     container.style.transform="translateY("+position+"vh)";
//     // Change active scroll dot after scroll.
//     scrollDots.forEach(dot => dot.classList.remove("active"));
//     scrollDots[pageIndex].classList.add("active");
//     //show text when it get there
//     $('.page').eq(pageIndex).children('div').css("transform","translateX(0)");
    
    
//   //add click nav to change page
//     $('.scroll>li').click(function(){
//       //the li position that you click
//       pageIndex = $(this).index();
//       var position="-"+pageIndex*100;
//       container.style.transform = "translateY("+position+"vh)";
//       $('li').removeClass('active');
//       $(this).addClass('active');
//     })
//   });/*wheel*/
  
  
  
//   /*wheel for cellfone*/
//   //if($(window).width()<768){}
// })

// import gsap from 'gsap';
// import { SplitText } from 'gsap/all';

// import { gsap } from 'gsap';
// import { Observer } from 'gsap/Observer';
// import { SplitText } from 'gsap/SplitText';

// const headings = document.querySelectorAll('.heading-class');
// const images = document.querySelectorAll('.image-class');

// gsap.registerPlugin(Observer);

// let sections = document.querySelectorAll("section"),
//   // images = document.querySelectorAll(".bg"),
//   // headings = gsap.utils.toArray(".section-heading"),
//   outerWrappers = gsap.utils.toArray(".outer"),
//   innerWrappers = gsap.utils.toArray(".inner"),
//   splitHeadings = headings.map(
//     (heading) =>
//       new SplitText(heading, {
//         type: "chars,words,lines",
//         linesClass: "clip-text"
//       })
//   ),
//   currentIndex = -1,
//   wrap = gsap.utils.wrap(0, sections.length),
//   animating;

// gsap.set(outerWrappers, { yPercent: 100 });
// gsap.set(innerWrappers, { yPercent: -100 });

// function gotoSection(index, direction) {
//   index = wrap(index); // make sure it's valid
//   animating = true;
//   let fromTop = direction === -1,
//     dFactor = fromTop ? -1 : 1,
//     tl = gsap.timeline({
//       defaults: { duration: 1.25, ease: "power1.inOut" },
//       onComplete: () => (animating = false)
//     });
//   if (currentIndex >= 0) {
//     // The first time this function runs, current is -1
//     gsap.set(sections[currentIndex], { zIndex: 0 });
//     tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
//       sections[currentIndex],
//       { autoAlpha: 0 }
//     );
//   }
//   gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
//   tl.fromTo(
//     [outerWrappers[index], innerWrappers[index]],
//     {
//       yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor)
//     },
//     {
//       yPercent: 0
//     },
//     0
//   )
//     .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
//     .fromTo(
//       splitHeadings[index].chars,
//       {
//         autoAlpha: 0,
//         yPercent: 150 * dFactor
//       },
//       {
//         autoAlpha: 1,
//         yPercent: 0,
//         duration: 1,
//         ease: "power2",
//         stagger: {
//           each: 0.02,
//           from: "random"
//         }
//       },
//       0.2
//     );
  
//   currentIndex = index;
// }

// Observer.create({
//   type: "wheel,touch,pointer",
//   wheelSpeed: -1,
//   onDown: () => !animating && gotoSection(currentIndex - 1, -1),
//   onUp: () => !animating && gotoSection(currentIndex + 1, 1),
//   tolerance: 10,
//   preventDefault: true
// });

// gotoSection(0, 1);