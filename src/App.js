// react
import { useEffect } from "react"
// components
import Header from "./components/Header"

const App = () => {
  useEffect(()=>{
    document.querySelector('main').style.paddingBlockStart = document.querySelector('header').offsetHeight + "px"
  }, [])

  return (
    <>
      <Header/>
      <main className="wrapper">
        <section className="about" id="about">
          <div className="pfp" style={{ backgroundImage: "url('/images/pfp.jpg')" }}/>
          <h1>Hi, I'm Sergei!</h1>
          <p><b>A web developer currently based in Vladivostok.</b> Though I'm still a studen, it doesn't stop me from realizing my dreams of being a professional web developer.</p>
          <p>Loving playing with lego since childhood once I found out about web developing and understood that it's not just but much more than creating something from different shapes. This is how loving teamwork and helping people achieve their goals came just from loving playing with bricks.</p>
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
              <p>Movie theatre website that was created for a univercity course project</p>
            </a>
          </div>
          <a href="/" className="btn outline">All Works&nbsp;<ion-icon name="arrow-forward-outline"/></a>
        </section>
        <section className="contact" id="contact">
          <h1 className="title">Contact</h1>
          <a href="mailto:markuswedler8@gmail.com" className="email">markuswedler8@gmail.com</a>
          <h4>Useful Links</h4>
          <div><a href="">GitHub</a><span>|</span><a href="">Dev.to</a><span>|</span><a href="">YouTube</a></div>
        </section>
      </main>
    </>
  )
}

export default App