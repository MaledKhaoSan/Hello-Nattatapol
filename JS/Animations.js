gsap.registerPlugin(ScrollTrigger)

const intro = document.getElementById("intro");
const helper = document.getElementById("helper");
const container = document.getElementById("main-Horizontal-container");

gsap.to(container, {
  x: () => -(container.offsetWidth - innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: intro,
    start: "bottom top",
    invalidateOnRefresh: true,
    markers: true,
    scrub: 1,
    end: () => "+=" + (container.offsetWidth - innerWidth)
  }
})




ScrollTrigger.matchMedia({
    //Laptop
    "(min-width: 1024px)": function() {
    var AboutMeIntrol = gsap.timeline();
        // AboutMeIntrol.to(".AboutMe-Text1-Box", 2.5,{scale: 23, left: "455%", ease: Power3.easeIn},">+0.5")
        // AboutMeIntrol.to(".AboutMe_Background1", 2.5,{scale: 4, left: "30%", ease: Power3.easeIn},"<")

        // // AboutMeIntrol.to('.AboutMe_Background1', 1,{filter:"blur(4px)"},"<+1");
        // AboutMeIntrol.to('.AboutMe_Background1', 1,{opacity: 0},"<+1");


        // AboutMeIntrol.from('.AboutMe_Background2, .AboutMe-Text2-Box', 0.5,{filter:"blur(8px)"},">-0.5");
        // AboutMeIntrol.to(".AboutMe-Text2-Box", 2.3,{scale: 20, left: "-360%", ease: Power3.easeIn},"<+0.5")
        // AboutMeIntrol.to(".AboutMe_Background2", 2.5,{scale: 4, left: "30%", ease: Power3.easeIn},"<")

        // // AboutMeIntrol.to('.AboutMe_Background2', 0.6,{filter:"blur(4px)",ease: Power3.easeIn},"<+1");
        // AboutMeIntrol.to('.AboutMe_Background2', 0.9,{opacity: 0},"<+1");

        // AboutMeIntrol.from('.AboutMe_Background3, .AboutMe-Text3-Box', 0.3,{filter:"blur(8px)"},">-0.3");
        // AboutMeIntrol.to(".AboutMe-Text3-Box", 2.5,{scale: 35, top:"-45%", ease: Power3.easeIn},"<+0.5")
        // AboutMeIntrol.to(".AboutMe_Background3", 2.8,{scale: 4, left: "100%", ease: Power3.easeIn},"<")

        // AboutMeIntrol.to('.AboutMe_Background3', 1,{filter:"blur(4px)"},"<+1");
        // AboutMeIntrol.to('.AboutMe_Background3', 1,{opacity: 0},"<+0.5");


        AboutMeIntrol.to(".AboutMe-MainIMG, .AboutMe-MainIMG-Inside", 1.5, {width:"100vh",ease: Power3.easeOut},"<+0.2");
        AboutMeIntrol.to("#AboutMe-MainClip, #AboutMe-MainClip-Inside", 1, {width: "30%", top:"50%",ease: Power3.easeOut},"<");
        AboutMeIntrol.to("#AboutMe-MainClip, #AboutMe-MainClip-Inside", 1.2, {height: "85%",ease: Power3.easeOut},"<");
        AboutMeIntrol.to(".AboutMe-container, .AboutMe-container-Inside", 0.5, {boxShadow:"0 0 0 0 green",ease:Power3.easeOut},"<");
        AboutMeIntrol.to(".AboutMe-container, .AboutMe-container-Inside", 2, {scale: 1.1,ease: Power3.easeOut},"<+0.2");
        AboutMeIntrol.to("#intro", 1.2,{backgroundColor:"#272727", ease:Power3.easeOut},"<");
        AboutMeIntrol.from("#AboutMe-MainClip, #AboutMe-MainClip-Inside", 1.5, {borderRadius: "160% 500%",ease: Power3.easeOut},"<");
        AboutMeIntrol.from('.linear-Portfolio-Header, .AboutMeButton', 1.7,{filter:"blur(8px)", opacity: 0,ease: Power3.easeOut},"<");
        

    // var mouth_animated = gsap.timeline({defaults:{},repeat:-1, repeatDelay: 0.1 });
    //     mouth_animated.to(".MainStudent_animated1", 0.1, {left:"50.1%", top:"55.1%", ease: Linear.easeNone}, ">");
    //     mouth_animated.to(".MainStudent_animated1", 0.1, {left:"50.2%", top:"55.2%", ease: Linear.easeNone}, ">");
    //     mouth_animated.to(".MainStudent_animated1", 0.1, {left:"50.1%", top:"55.3%", ease: Linear.easeNone}, ">");
    //     mouth_animated.to(".MainStudent_animated1", 0.1, {left:"50.0%", top:"55.2%", ease: Linear.easeNone}, ">");
    }
})



// var tl = new TimelineMax({delay:1});
// //clip the right/bottom:
//     tl.to(".AboutMe-MainIMG", 1.5, {width:"100vh",ease: Power3.easeOut},"<");
//     tl.to("#AboutMe-MainClip", 1, {width: "30%", top:"50%",ease: Power3.easeOut},"<");
//     tl.to("#AboutMe-MainClip", 1.2, {height: "85%",ease: Power3.easeOut},"<");
//     //   .to("#containerTest", 2, {x:150, y:100, width:"-=150", height:"-=100", repeat:1, yoyo:true}, "top-left")







//——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#+;"%/'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.5) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

const phrases = [
  'Nattatapol',
  'Genshin Traveller ',
]

const el = document.querySelector('.text')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 1000)
  })
  counter = (counter + 1) % phrases.length
}

next()


