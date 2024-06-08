const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

let tl = gsap.timeline();
tl.from("body", {
  x: "100%",
  duration: 1.3,
  ease: "expo.inOut",
})

let items = document.querySelectorAll(".item");
items.forEach((item, index) => {
  if (index % 4 == 0) {
    tl.from(item, {
      x: "100%",
      opacity: 0,
      duration: 0.3,
      stagger: 0.2
    })
  }
  else if(index%4==1){
    tl.from(item, {
      y: "100%",
      opacity: 0,
      duration: 0.3,
      stagger: 0.2
    })
  }
  else if(index%4==2){
    tl.from(item, {
      x: "-100%",
      opacity: 0,
      duration: 0.3,
      stagger: 0.2
    })
  }
  else{
    tl.from(item, {
      y: "-100%",
      opacity: 0,
      duration: 0.3,
      stagger: 0.2
    })
  }
})
