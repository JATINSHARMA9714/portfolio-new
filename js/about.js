function locomotive(){
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
locomotive();

var tl = gsap.timeline();

tl.from("#page1",{
  x:"-100%",
  duration:1.3,
  ease: "expo.inOut",
})

tl.from("#photoAndResume",{
  x:"100%",
  opacity:0,
  duration:1.5,
  ease:"easeInCirc"
})
tl.from("#about h1",{
  y:"100%"
})
tl.from("#about h2",{
  y:"100%"
})
tl.from("p",{
  y:"100%",
  opacity:0,
  stagger:0.2
})

let paragraphs = document.querySelectorAll("p");
paragraphs.forEach((paragraph)=>{
  let pragraphInside = paragraph.innerText;
  let clutter = "";
  let letters = pragraphInside.split("");
  letters.forEach((letter)=>{
    clutter+=`<span>${letter}</span>`;
  });
  paragraph.innerHTML = clutter;
})


gsap.to("span",{
  color:"#ECE7E1",
  stagger:0.2,
  scrollTrigger:{
    trigger:"#firstp",
    scroller:"#main",
    start:"top 85%",
    end:"top -30%",
    scrub:2
  }
})