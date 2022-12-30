// react
import { useEffect, useState } from "react"
// hooks
import useFetch from "./hooks/useFetch"
// components
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
  const [text, setText] = useState()

  // get localization
  if(localStorage.getItem('lang') != undefined) var lang = localStorage.getItem('lang')
  else if(navigator.language == "ru") var lang = "ru"
  else var lang = "en-US"
  useFetch(lang).then(data => setText(data))

  useEffect(()=>{
    // hide loader
    if(document.readyState === "complete") hideLoader()
    else{
      window.addEventListener("load", hideLoader)
      return () => window.removeEventListener("load", hideLoader)
    }
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

  const hideLoader = () => {
    const loader = document.querySelector('.loader')
    setTimeout(()=>{
      loader.style.transition = ".3s"
      loader.style.opacity = 0
      loader.style.pointerEvents = "none"
    }, 200)
  }

  return (
    <>
      <div className="loader"/>
      <Header header={text && text.header} />
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
          <div className="works">{
            text && Object.keys(text.works.cards).map(name => (
              <a href={ "https://" + text.works.cards[name].url } key={name}>
                <div className="img"  style={{ backgroundImage: "url('/images/works_logos/" + name + ".svg')" }}/>
                <h3>{ text.works.cards[name].title }</h3>
                <p>{ text.works.cards[name].paragraph }</p>
              </a>
            ))}
            <a href="https://markuswedler.github.io/test">
              <div className="img"/>
              <h3>Лабороторные</h3>
              <p></p>
            </a>
          </div>
        </section>
      </main>
      <Footer footer={ text && text.footer } />
    </>
  )
}

export default App