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
    document.querySelectorAll('section').forEach(section => section.style.scrollMargin = document.querySelector('header').offsetHeight + "px")
    // add arrow down event listener
    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 0){
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
            <h2>Hi, I'm Sergei!</h2>
            <p><b>A web developer currently based in Vladivostok.</b> Though I'm still a studen, it doesn't stop me from realizing my dreams of being a professional web&nbsp;developer.</p>
            <a href="mailto:ghbdtnghbdtn8@gmail.com" className="contact">Contact</a>
          </div>
          <a href="#about" className="arrow-down"><img src="/images/arrow_down_1.svg" alt="" /></a>
        </section>
        <section className="about" id="about">
          <div className="container">
            <div>
              <img src="/images/lego_brick.svg"/>
              <h2>Where it all starts</h2>
              <p>Loving playing with lego since childhood once I found out about web developing and understood that it's not just but much more than creating something from different shapes. That's how love for teamwork and helping people achieve their goals came just from childhood&nbsp;hobby.</p>
            </div>
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
          </div>
        </section>
        <section className="works" id="works">
          <h2 className="title">My Works</h2>
          <div className="works">
            <a href="https://amvtheatres.vercel.app">
              <div className="img"  style={{ backgroundImage: "url('/images/logos/amvtheatres.svg')" }}/>
              <h3>AMV Theatres</h3>
              <p>Movie theatre website that was created for a univercity's course&nbsp;project</p>
            </a>
            <a href="https://markuswedler.github.io/optic-shop">
              <div className="img"  style={{ backgroundImage: "url('/images/logos/optic-shop.svg')" }}/>
              <h3>Optic Shop</h3>
              <p>Optic Shop main page. Was inspired while scrolling through&nbsp;Instagram</p>
            </a>
            <a href="https://markuswedler.github.io/designer_portfolio">
              <div className="img"  style={{ backgroundImage: "url('/images/logos/jeffross.svg')" }}/>
              <h3>Jefferson</h3>
              <p>Simple graphic designer and web developer&nbsp;portfolio</p>
            </a>
          </div>
          {/* <a href="/" className="btn outline">All Works&nbsp;<ion-icon name="arrow-forward-outline"/></a> */}
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default App