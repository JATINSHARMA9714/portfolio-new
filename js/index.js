const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});


let items = document.querySelectorAll(".items");
items.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    let item = element.querySelector(".item");
    gsap.to(item, {
      y: "-100%"
    })
  })
  element.addEventListener("mouseleave", () => {
    let item = element.querySelector(".item");
    gsap.to(item, {
      y: "0%"
    })
  })
})

let tl = gsap.timeline();


tl.from("#page1",{
  height:"0vh",
  duration:1.3,
  ease: "expo.inOut",
})
tl.from("#text div",{
  y: "100%",
  opacity:0,
  duration:0.5,
  stagger:0.2
})
tl.to("#transparent-layer",{
  backdropFilter: "blur(0px)",
  duration:0.2,
  ease: "easeInCirc"
})
tl.to("#transparent-layer",{
  display:"none",
})
