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
    
    CloseAboutMeNavFunction.to(".Header-container",1.5,{opacity:1},">")
    CloseAboutMeNavFunction.to("#AboutMe-MainClip, .linear-Portfolio-handWrite, .linear-Portfolio-Header",2,{opacity:1},">")

    CloseAboutMeNavFunction.set(".IconWrapper, .Nav-Skills-Box, .SkillsWrapper, .Nav-Skills-lineDecorate-end, .AboutMeNavSection0, #AboutMe-MainClip-Inside, .AboutMe-container-Inside, .closebtn, .Nav-Header-Text, .Nav-Header-Content, .Nav-name-box, .Nav-school-box, .Nav-age-box",{opacity:1},">")
    CloseAboutMeNavFunction.to("#AboutMe-MainClip-Inside", 1, {width: "30%", top:"50%",ease: Power3.easeOut},"<");
    CloseAboutMeNavFunction.to("#AboutMe-MainClip-Inside", 1.2, {height: "85%",ease: Power3.easeOut},"<");
    CloseAboutMeNavFunction.set(".AboutMe-MainIMG-Inside",{height:"200%",ease: Power1.easeOut},"<");
    CloseAboutMeNavFunction.set(".AboutMeNav",{overflowY: "scroll"},"<")
    CloseAboutMeNavFunction.set(".AboutMeNav",{height: "0"},"<")
    CloseAboutMeNavFunction.to(".AboutMeButton",1,{opacity:1},">")
  }







function AboutMeFunction() {
  
    // var AboutMeFunction = gsap.timeline();
    // AboutMeFunction.to(".Header-container, .linear-Portfolio-handWrite, .linear-Portfolio-Header, .AboutMeButton",0.5,{opacity:0},"0")
    // AboutMeFunction.add(function(){
    //   OpenAboutMeNav();
    //   },">" );

    // AboutMeFunction.set(".AboutMeNav",{display: "unset"},">+0.5")
    // AboutMeFunction.set("body",{overflowY: "hidden"},"<")

    // AboutMeFunction.to(".AboutMe-MainIMG-Inside", 1.5, {height:"100%",ease: Power3.easeOut},"<");
    // AboutMeFunction.to("#AboutMe-MainClip-Inside", 1, {width: "40%", top:"115%",ease: Power3.easeOut},"<");
    // AboutMeFunction.to("#AboutMe-MainClip-Inside", 1.2, {height: "120%",ease: Power3.easeOut},"<");
    // AboutMeFunction.set(".AboutMe-container-Inside",{overflow: "unset"},"<")


    // AboutMeFunction.from('.Nav-Header-Text, .Nav-Header-Content', 0.7,{opacity: 0,ease: Power3.easeOut},">+0.5");
    // AboutMeFunction.from('.Nav-Header-Text, .Nav-Header-Content', 0.4,{filter:"blur(3px)", height:"20%",ease: Power1.easeOut},"<");

    // AboutMeFunction.from('.Nav-name-box, .Nav-school-box, .Nav-age-box', 0.9,{opacity: 0,ease: Power3.easeOut},">+0.1");
    // AboutMeFunction.from('.Nav-name-box, .Nav-school-box, .Nav-age-box', 0.5,{filter:"blur(3px)", y:23,ease: Power1.easeOut},"<");
    // AboutMeFunction.set("#AboutMe-MainClip",{opacity:0},"<")

    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;




    ScrollTrigger.matchMedia({
      //Laptop
      "(min-width: 1024px)": function() {
        var AboutMeFunction = gsap.timeline();
        AboutMeFunction.to(".Header-container, .linear-Portfolio-handWrite, .linear-Portfolio-Header, .AboutMeButton",0.5,{opacity:0},"0")
        AboutMeFunction.add(function(){
          OpenAboutMeNav();
          },">" );
    
        AboutMeFunction.set(".AboutMeNav",{display: "unset"},">+0.5")
        AboutMeFunction.set("body",{overflowY: "hidden"},"<")
    
        AboutMeFunction.to(".AboutMe-MainIMG-Inside", 1.5, {height:"100%",ease: Power3.easeOut},"<");
        AboutMeFunction.to("#AboutMe-MainClip-Inside", 1, {width: "40%", top:"115%",ease: Power3.easeOut},"<");
        AboutMeFunction.to("#AboutMe-MainClip-Inside", 1.2, {height: "120%",ease: Power3.easeOut},"<");
        AboutMeFunction.set(".AboutMe-container-Inside",{overflow: "unset"},"<")
    
    
        AboutMeFunction.from('.Nav-Header-Text, .Nav-Header-Content', 0.7,{opacity: 0,ease: Power3.easeOut},">+0.5");
        AboutMeFunction.from('.Nav-Header-Text, .Nav-Header-Content', 0.4,{filter:"blur(3px)", height:"20%",ease: Power1.easeOut},"<");
    
        AboutMeFunction.from('.Nav-name-box, .Nav-school-box, .Nav-age-box', 0.9,{opacity: 0,ease: Power3.easeOut},">+0.1");
        AboutMeFunction.from('.Nav-name-box, .Nav-school-box, .Nav-age-box', 0.5,{filter:"blur(3px)", y:23,ease: Power1.easeOut},"<");
        AboutMeFunction.set("#AboutMe-MainClip",{opacity:0},"<")
    
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      },
    
      
      "(max-width: 767px)": function() {
        var AboutMeFunction = gsap.timeline();
        AboutMeFunction.to(".Header-container, .linear-Portfolio-handWrite, .linear-Portfolio-Header, .AboutMeButton",0.5,{opacity:0},"0")
        AboutMeFunction.add(function(){
          OpenAboutMeNav();
          },">" );
    
        AboutMeFunction.set(".AboutMeNav",{display: "unset"},">+0.5")
        AboutMeFunction.set("body",{overflowY: "hidden"},"<")
    
        AboutMeFunction.to(".AboutMe-MainIMG-Inside", 1.5, {height:"100%",ease: Power3.easeOut},"<");
        AboutMeFunction.to("#AboutMe-MainClip-Inside", 1, {width: "85%", top:"20%",ease: Power3.easeOut},"<");
        AboutMeFunction.to("#AboutMe-MainClip-Inside", 1.2, {height: "50vh",ease: Power3.easeOut},"<");
        AboutMeFunction.set(".AboutMe-container-Inside",{overflow: "unset"},"<")
    
    
        AboutMeFunction.from('.Nav-Header-Text, .Nav-Header-Content', 0.7,{opacity: 0,ease: Power3.easeOut},">+0.5");
        AboutMeFunction.from('.Nav-Header-Text, .Nav-Header-Content', 0.4,{filter:"blur(3px)", height:"20%",ease: Power1.easeOut},"<");
    
        AboutMeFunction.from('.Nav-name-box, .Nav-school-box, .Nav-age-box', 0.9,{opacity: 0,ease: Power3.easeOut},">+0.1");
        AboutMeFunction.from('.Nav-name-box, .Nav-school-box, .Nav-age-box', 0.5,{filter:"blur(3px)", y:23,ease: Power1.easeOut},"<");
        AboutMeFunction.set("#AboutMe-MainClip",{opacity:0},"<")
    
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        }
    })
}