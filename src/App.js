// react
import { useEffect, useState } from "react"
// hooks
import useFetch from "./hooks/useFetch"
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
  }, [])

  const hideLoader = () => {
    const loader = document.querySelector('.loader')
    setTimeout(()=>{
      loader.style.transition = ".5s"
      loader.style.opacity = 0
      loader.style.pointerEvents = "none"
    }, 200)
  }

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