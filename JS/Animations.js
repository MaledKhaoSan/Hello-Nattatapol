ScrollTrigger.matchMedia({
    //Laptop
    "(min-width: 1024px)": function() {
    var AboutMeIntrol = gsap.timeline();
        AboutMeIntrol.to(".AboutMe-Text1-Box", 2.5,{scale: 25, left: "455%", ease: Power3.easeIn},">+0.5")
        AboutMeIntrol.to(".AboutMe_Background1", 2.5,{scale: 4, left: "30%", ease: Power3.easeIn},"<")

        // AboutMeIntrol.to('.AboutMe_Background1', 1,{filter:"blur(4px)"},"<+1");
        AboutMeIntrol.to('.AboutMe_Background1', 1,{opacity: 0},"<+1");


        AboutMeIntrol.from('.AboutMe_Background2, .AboutMe-Text2-Box', 0.5,{filter:"blur(8px)"},">-0.5");
        AboutMeIntrol.to(".AboutMe-Text2-Box", 2.3,{scale: 20, left: "-360%", ease: Power3.easeIn},"<+0.5")
        AboutMeIntrol.to(".AboutMe_Background2", 2.5,{scale: 4, left: "30%", ease: Power3.easeIn},"<")

        // AboutMeIntrol.to('.AboutMe_Background2', 0.6,{filter:"blur(4px)",ease: Power3.easeIn},"<+1");
        AboutMeIntrol.to('.AboutMe_Background2', 0.9,{opacity: 0},"<+1");

        AboutMeIntrol.from('.AboutMe_Background3, .AboutMe-Text3-Box', 0.3,{filter:"blur(8px)"},">-0.3");
        AboutMeIntrol.to(".AboutMe-Text3-Box", 2.5,{scale: 35, top:"-45%", ease: Power3.easeIn},"<+0.5")
        AboutMeIntrol.to(".AboutMe_Background3", 2.8,{scale: 4, left: "100%", ease: Power3.easeIn},"<")

        AboutMeIntrol.to('.AboutMe_Background3', 1,{filter:"blur(4px)"},"<+1");
        AboutMeIntrol.to('.AboutMe_Background3', 1,{opacity: 0},"<+0.5");


        AboutMeIntrol.to(".AboutMe-MainIMG, .AboutMe-MainIMG-Inside", 1.5, {height:"200%",ease: Power3.easeOut},"<+0.2");
        AboutMeIntrol.to("#AboutMe-MainClip, #AboutMe-MainClip-Inside", 1, {width: "30%", top:"50%",ease: Power3.easeOut},"<");
        AboutMeIntrol.to("#AboutMe-MainClip, #AboutMe-MainClip-Inside", 1.2, {height: "85%",ease: Power3.easeOut},"<");
        AboutMeIntrol.to(".AboutMe-container, .AboutMe-container-Inside", 0.5, {boxShadow:"0 0 0 0 green",ease:Power3.easeOut},"<");
        // AboutMeIntrol.to(".AboutMe-container, .AboutMe-container-Inside", 2, {scale: 1.1,ease: Power3.easeOut},"<+0.2");
        AboutMeIntrol.to("#intro", 1.2,{backgroundColor:"#272727", ease:Power3.easeOut},"<");
        AboutMeIntrol.from("#AboutMe-MainClip, #AboutMe-MainClip-Inside", 1.5, {borderRadius: "160% 500%",ease: Power3.easeOut},"<");
        AboutMeIntrol.from('.linear-Portfolio-Header, .AboutMeButton', 1.7,{filter:"blur(8px)", opacity: 0,ease: Power3.easeOut},"<");
        AboutMeIntrol.set("body",{overflowY: "scroll"},"<");
    },

    
    "(max-width: 767px)": function() {
      var AboutMeIntrol = gsap.timeline();
          AboutMeIntrol.to(".AboutMe-Text1-Box", 2.5,{scale: 100, left: "555%", ease: Power3.easeIn},">+0.5")
          AboutMeIntrol.to(".AboutMe_Background1", 2.5,{scale: 4, left: "30%", ease: Power3.easeIn},"<")
  
          // AboutMeIntrol.to('.AboutMe_Background1', 1,{filter:"blur(4px)"},"<+1");
          AboutMeIntrol.to('.AboutMe_Background1, .AboutMe-Text1-Box', 1,{opacity: 0},"<+1");
  
  
          AboutMeIntrol.from('.AboutMe_Background2, .AboutMe-Text2-Box', 0.5,{filter:"blur(8px)"},">-0.5");
          AboutMeIntrol.to(".AboutMe-Text2-Box", 2.3,{scale: 40, left: "-360%", ease: Power3.easeIn},"<+0.5")
          AboutMeIntrol.to(".AboutMe_Background2", 2.5,{scale: 4, left: "30%", ease: Power3.easeIn},"<")
  
          // AboutMeIntrol.to('.AboutMe_Background2', 0.6,{filter:"blur(4px)",ease: Power3.easeIn},"<+1");
          AboutMeIntrol.to('.AboutMe_Background2, .AboutMe-Text2-Box', 0.9,{opacity: 0},"<+1");
  
          AboutMeIntrol.from('.AboutMe_Background3, .AboutMe-Text3-Box', 0.3,{filter:"blur(8px)"},">-0.3");
          AboutMeIntrol.to(".AboutMe-Text3-Box", 2.5,{scale: 50, top:"-65%", ease: Power3.easeIn},"<+0.5")
          AboutMeIntrol.to(".AboutMe_Background3", 2.8,{scale: 4, left: "100%", ease: Power3.easeIn},"<")
  
          AboutMeIntrol.to('.AboutMe_Background3', 1,{filter:"blur(4px)"},"<+1");
          AboutMeIntrol.to('.AboutMe_Background3, .AboutMe-Text3-Box', 1,{opacity: 0},"<+0.5");
  
          //AboutMe Introl
          AboutMeIntrol.to(".AboutMe-MainIMG, .AboutMe-MainIMG-Inside", 1.5, {height:"200%",ease: Power3.easeOut},"<+0.2");
          AboutMeIntrol.to("#AboutMe-MainClip, #AboutMe-MainClip-Inside", 1, {width: "85%", top:"50%",ease: Power3.easeOut},"<");
          AboutMeIntrol.to("#AboutMe-MainClip, #AboutMe-MainClip-Inside", 1.2, {height: "85%",ease: Power3.easeOut},"<");
          AboutMeIntrol.to(".AboutMe-container, .AboutMe-container-Inside", 0.5, {boxShadow:"0 0 0 0 green",ease:Power3.easeOut},"<");
          // AboutMeIntrol.to(".AboutMe-container, .AboutMe-container-Inside", 2, {scale: 1.1,ease: Power3.easeOut},"<+0.2");
          AboutMeIntrol.to("#intro", 1.2,{backgroundColor:"#272727", ease:Power3.easeOut},"<");
          AboutMeIntrol.from("#AboutMe-MainClip, #AboutMe-MainClip-Inside", 1.5, {borderRadius: "160% 500%",ease: Power3.easeOut},"<");
          AboutMeIntrol.from('.linear-Portfolio-Header, .AboutMeButton', 1.7,{filter:"blur(8px)", opacity: 0,ease: Power3.easeOut},"<");
          AboutMeIntrol.set("body",{overflowY: "scroll"},"<");
          
  
      }
})






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
  'Developer ',
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