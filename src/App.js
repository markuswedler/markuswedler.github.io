// react
import { useEffect, useState } from "react"
// layout components
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
// components
import Hero from "./components/Hero"
import About from "./components/About"
import Works from "./components/Works"


const App = () => {
  const [text, setText] = useState()

  // get localization
  if(localStorage.getItem('lang')) var lang = localStorage.getItem('lang')
  else if(navigator.language == "de") var lang = "de"
  else if(navigator.language == "ja") var lang = "ja"
  else if(navigator.language == "ru") var lang = "ru"
  else var lang = "en-US"
  // get text
  useEffect(()=>{
    fetch('/api/' + lang + '.json')
      .then(res => { return res.json() })
      .then(data => setText(data))
  }, [lang])

  useEffect(()=>{
    // hide loader
    if(document.readyState === "complete") hideLoader()
    else{
      window.addEventListener("load", hideLoader)
      return () => window.removeEventListener("load", hideLoader)
    }
  }, [])

  const hideLoader = () => {
    const loader = document.querySelector('.loader')
    setTimeout(()=>{
      loader.style.transition = ".5s"
      loader.style.opacity = 0
      loader.style.pointerEvents = "none"
    }, 200)
  }

  // observer
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) entry.target.classList.remove('toAnimate')
    })
  })
  // elements to observe
  document.querySelectorAll('.toAnimate').forEach(item => observer.observe(item))

  return (
    <>
      <div className="loader"/>
      <Header header={text && text.header} />
      <main className="wrapper">
        <Hero hero={text && text.hero} />
        <About about={text && text.about} />
        <Works works={text && text.works} />
      </main>
      <Footer footer={ text && text.footer } />
    </>
  )
}

export default App