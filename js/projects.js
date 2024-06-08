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

let projects = document.querySelectorAll(".project");
projects.forEach((project,index) => {
  if(index==0){
    gsap.from(project,{
      x:"100%",
      duration:1,
      ease: "expo.inOut",
    })
  }
  else if(index%2==0){
    gsap.from(project,{
      x:"100%",
      duration:1,
      ease: "expo.inOut",
      scrollTrigger:{
        trigger:project,
        scroller:"#main",
        start:"top 80%",
        end:"top 20%",
        scrub:2
      }
    })
  }
  else{
    gsap.from(project,{
      x:"-100%",
      duration:1,
      ease: "expo.inOut",
      scrollTrigger:{
        trigger:project,
        scroller:"#main",
        start:"top 80%",
        end:"top 20%",
        scrub:2
      }
    })
  }
})
