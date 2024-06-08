const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });

  let tl  = gsap.timeline();
  tl.from("#page1",{
    y:"100%",
    duration:1,
    ease: "expo.inOut",
  })
  tl.from("#text",{
    y:"100%",
    duration:0.4,
  })
  tl.from("h1",{
    y:"100%",
    duration:0.7,
  })