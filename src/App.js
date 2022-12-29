// react
import { useEffect, useState } from "react"
// hooks
import useFetch from "./hooks/useFetch"
// components
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
  const [text, setText] = useState()

  let lang = navigator.language
  if(!lang == 'de' && !lang == "ja" && !lang == "ru") lang = "en-US"
  useFetch('/api/' + lang + '.json').then(data => setText(data))

  useEffect(()=>{
    // set marginTop for main section
    document.querySelector('main').style.paddingTop = document.querySelector('header').offsetHeight + "px"
    // set links stops
    const sections = document.querySelectorAll('section')
    sections.forEach(section => {
      if(section.classList.contains('about')) section.style.scrollMargin = document.querySelector('header').offsetHeight + 20 + "px"
      else section.style.scrollMargin = document.querySelector('header').offsetHeight + "px"
    })
    // add arrow down event listener
    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 0){
        document.querySelector('.arrow-down').style.opacity = 0
        document.querySelector('.arrow-down').style.pointerEvents = "none"
        document.querySelector('.arrow-down').tabIndex = -1
      }
      else{
        document.querySelector('.arrow-down').style.opacity = 1
        document.querySelector('.arrow-down').style.pointerEvents = "unset"
        document.querySelector('.arrow-down').tabIndex = 0
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
            <h2>{ text && text.hero.heading }</h2>
            <p><b>{ text && text.hero.paragraphBold }</b>{ text && text.hero.paragraph }</p>
            <a href="mailto:ghbdtnghbdtn8@gmail.com" className="contact">{ text && text.header.contact }</a>
          </div>
          <a href="#about" className="arrow-down"><img src="/images/arrow_down_1.svg" alt="" /></a>
        </section>
        <section className="about" id="about">
          <div className="container">
            <div>
              <img src="/images/lego_brick.svg"/>
              <h2>{ text && text.about.heading }</h2>
              <p>{ text && text.about.paragraph }</p>
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
          <h2 className="title">{ text && text.works.title }</h2>
          <div className="works">
            {/* { text && Object.keys(text.works.cards).map(card => (
              <a href=""></a>
            )) } */}
            <a href="https://amvtheatres.vercel.app">
              <div className="img"  style={{ backgroundImage: "url('/images/logos/amv-theatres.svg')" }}/>
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
            <a href="https://markuswedler.github.io/test">
              <div className="img"/>
              <h3>Отсутствующие</h3>
              <p>То, чего не было в предыдущих работах</p>
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