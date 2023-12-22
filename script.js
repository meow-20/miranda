// import LocomotiveScroll from 'locomotive-scroll'

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline();

tl.to(".wrapper",{
    y:"100vh",
    duration:0,
    scale:0.2
})
tl.to(".wrapper",{
    y:"-150vh",
    scale:0.4,
    duration:1.5,
    ease: "expo.out"
})
.to(".wrapper", {
    y:"0vh",
    rotate:720,
    duration:2,
    scale:1,
    delay:1.5,
    ease: "Power4.easeInOut"
})