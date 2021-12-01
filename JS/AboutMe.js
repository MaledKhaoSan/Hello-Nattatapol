function OpenAboutMeNav() {
    document.getElementById("AboutMeNav").style.height = "100%";
  }
  
  function CloseAboutMeNav() {
    // document.getElementById("AboutMeNav").style.height = "0";
    var CloseAboutMeNavFunction = gsap.timeline();

      CloseAboutMeNavFunction.to(".closebtn, .Nav-Header-Text, .Nav-Header-Content, .Nav-name-box, .Nav-school-box, .Nav-age-box",1,{opacity:0},"<")
      CloseAboutMeNavFunction.to(".IconWrapper, .Nav-Skills-Box, .SkillsWrapper, .Nav-Skills-lineDecorate-end, .AboutMeNavSection0, #AboutMe-MainClip-Inside, .AboutMe-container-Inside",1,{opacity:0},"<")

      CloseAboutMeNavFunction.set(".AboutMeNav",{display: "none"},">")
      CloseAboutMeNavFunction.set("body",{overflowY: "scroll"},"<")
      CloseAboutMeNavFunction.set(".Horizontal-Section",{display: "unset"},"<")
      



      // CloseAboutMeNavFunction.set(".AboutMeNav",{overflowY: "hidden"},">")
      // CloseAboutMeNavFunction.set("body",{overflowY: "scroll"},"<")
      // CloseAboutMeNavFunction.set(".closebtn",{display: "none"},">")
      // CloseAboutMeNavFunction.set(".AboutMeNav",{display: "none"},">")
      CloseAboutMeNavFunction.to(".Header-container",1.5,{opacity:1},">")
      CloseAboutMeNavFunction.to("#AboutMe-MainClip, .linear-Portfolio-handWrite, .linear-Portfolio-Header",2,{opacity:1},">")

      CloseAboutMeNavFunction.set(".IconWrapper, .Nav-Skills-Box, .SkillsWrapper, .Nav-Skills-lineDecorate-end, .AboutMeNavSection0, #AboutMe-MainClip-Inside, .AboutMe-container-Inside, .closebtn, .Nav-Header-Text, .Nav-Header-Content, .Nav-name-box, .Nav-school-box, .Nav-age-box",{opacity:1},">")
      CloseAboutMeNavFunction.to("#AboutMe-MainClip-Inside", 1, {width: "30%", top:"50%",ease: Power3.easeOut},"<");
      CloseAboutMeNavFunction.to("#AboutMe-MainClip-Inside", 1.2, {height: "93%",ease: Power3.easeOut},"<");
      CloseAboutMeNavFunction.set(".AboutMeNav",{overflowY: "scroll"},"<")
      CloseAboutMeNavFunction.set(".AboutMeNav",{height: "0"},"<")
      CloseAboutMeNavFunction.to(".AboutMeButton",1,{opacity:1},">")
    }










// let AboutMeInsideAnimation = gsap.timeline({
//   scrollTrigger: {
//       trigger: ".AboutMeNavSection1",
//       start: "center center",
//       end: "bottom center",
//       toggleActions: "play complete pause reverse",
//       scrub: 2.5,
//       markers: {
//           startColor: "white",
//           endColor: "white"}
//       }
//   });
//   AboutMeInsideAnimation.to("#AboutMe-MainClip-Inside", 1, {width: "90%", top:"50%",ease: Power3.easeOut},"<");
//   AboutMeInsideAnimation.to("#AboutMe-MainClip-Inside", 1.2, {height: "100%",ease: Power3.easeOut},"<");

function AboutMeFunction() {
    var AboutMeFunction = gsap.timeline();
    AboutMeFunction.set(".Horizontal-Section",{display: "none"},"0")
    AboutMeFunction.to(".Header-container, .linear-Portfolio-handWrite, .linear-Portfolio-Header, .AboutMeButton",0.5,{opacity:0},"0")
    AboutMeFunction.add(function(){
        OpenAboutMeNav();
        // document.body.style.overflowY = "hidden";
    },">" );

    AboutMeFunction.set(".AboutMeNav",{display: "unset"},">+0.5")
    AboutMeFunction.set("body",{overflowY: "hidden"},"<")

    // AboutMeIntrol.to(".AboutMe-MainIMG", 1.5, {width:"100vh",ease: Power3.easeOut},"<+0.2");
    AboutMeFunction.to("#AboutMe-MainClip-Inside", 1, {width: "40%", top:"115%",ease: Power3.easeOut},"<");
    AboutMeFunction.to("#AboutMe-MainClip-Inside", 1.2, {height: "120%",ease: Power3.easeOut},"<");
    AboutMeFunction.set(".AboutMe-container-Inside",{overflow: "unset"},"<")
    // AboutMeFunction.set(".AboutMeNavSection1",{display: "unset"},">")


    AboutMeFunction.from('.Nav-Header-Text, .Nav-Header-Content', 0.7,{opacity: 0,ease: Power3.easeOut},">+0.5");
    AboutMeFunction.from('.Nav-Header-Text, .Nav-Header-Content', 0.4,{filter:"blur(3px)", height:"20%",ease: Power1.easeOut},"<");

    AboutMeFunction.from('.Nav-name-box, .Nav-school-box, .Nav-age-box', 0.9,{opacity: 0,ease: Power3.easeOut},">+0.1");
    AboutMeFunction.from('.Nav-name-box, .Nav-school-box, .Nav-age-box', 0.5,{filter:"blur(3px)", y:23,ease: Power1.easeOut},"<");
    AboutMeFunction.set("#AboutMe-MainClip",{opacity:0},"<")

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}