// react
import { useEffect } from "react"
// components
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
  useEffect(()=>{
    // set marginTop for main section
    document.querySelector('main').style.paddingTop = document.querySelector('header').offsetHeight + "px"
    // set links stops
    document.querySelectorAll('section').forEach(section => {
      section.style.scrollMargin = document.querySelector('header').offsetHeight + "px"
    })
    // add arrow down event listener
    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 50){
        document.querySelector('.arrow-down').style.opacity = 0
        document.querySelector('.arrow-down').style.pointerEvents = "none"
      }
      else{
        document.querySelector('.arrow-down').style.opacity = 1
        document.querySelector('.arrow-down').style.pointerEvents = "unset"
      }
    })
  }, [])

  return (
    <>
      <Header/>
      <main className="wrapper">
        <section className="hero" id="home">
          <div className="pfp" style={{ backgroundImage: "url('/images/pfp.jpg')" }}/>
          <div className="container">
            <h1>Hi, I'm Sergei!</h1>
            <p><b>A web developer currently based in Vladivostok.</b> Though I'm still a studen, it doesn't stop me from realizing my dreams of being a professional web&nbsp;developer.</p>
            <a href="#contact">Contact</a>
          </div>
          <a href="#about" className="arrow-down"><ion-icon name="arrow-down-outline"/></a>
        </section>
        <section className="about" id="about">
          <h1 className="title">About</h1>
          <p>Loving playing with lego since childhood once I found out about web developing and understood that it's not just but much more than creating something from different shapes. That's how love for teamwork and helping people achieve their goals came just from childhood&nbsp;hobby.</p>
          <ul>
            <li>
              <h4>HTML & CSS</h4>
              <span/>
              <div/>
            </li>
            <li>
              <h4>JavaScript</h4>
              <span/>
              <div/>
            </li>
            <li>
              <h4>React & Next.js</h4>
              <span/>
              <div/>
            </li>
            <li>
              <h4>Git & GitHub</h4>
              <span/>
              <div/>
            </li>
          </ul>
        </section>
        <section className="works" id="works">
          <h1 className="title">My Works</h1>
          <div className="works">
            <a href="https://amvtheatres.vercel.app">
              <div className="img"  style={{ backgroundImage: "url('/images/logos/amvtheatres.svg')" }}/>
              <h3>AMV Theatres</h3>
              <p>Movie theatre website that was created for a univercity course&nbsp;project</p>
            </a>
            <a href="https://markuswedler.github.io/optic-shop">
              <div className="img"  style={{ backgroundImage: "url('/images/logos/optic-shop.svg')" }}/>
              <h3>Optic Shop</h3>
              <p>Optic Shop's main page. Was inspired while scrolling through&nbsp;Instagram</p>
            </a>
            <a href="https://markuswedler.github.io/designer_portfolio">
              <div className="img"  style={{ backgroundImage: "url('/images/logos/jeffross.svg')" }}/>
              <h3>Jefferson</h3>
              <p>Simple graphic designer and web developer&nbsp;portfolio</p>
            </a>
          </div>
          {/* <a href="/" className="btn outline">All Works&nbsp;<ion-icon name="arrow-forward-outline"/></a> */}
        </section>
        <section className="contact" id="contact">
          <h1 className="title">Contact</h1>
          <h4>Email</h4>
          <a href="mailto:ghbdtnghbdtn8@gmail.com" className="email">ghbdtnghbdtn8@gmail.com</a>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default App