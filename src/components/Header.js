import { useEffect } from "react"

const Header = () => {
  useEffect(()=>{
    // change header on scroll
    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 10){
        document.querySelector('header .wrapper').style.paddingBlock = ".5rem"
        document.querySelector('header .wrapper').style.borderBottomColor = "rgba(0, 0, 0, .1)"
      }
      else{
        document.querySelector('header .wrapper').style.paddingBlock = "1rem"
        document.querySelector('header .wrapper').style.borderBottomColor = "transparent"
      }
    })
    // prevent body scroll when menu is opened (mobile)
    document.querySelector('header input').addEventListener("change", ()=>{
      if(document.querySelector('header input').checked){
        document.body.style.overflow = "hidden"
        document.querySelector('header .wrapper').style.paddingBlock = "1rem"
        document.querySelector('header .wrapper').style.borderBottomColor = "transparent"
      }
      else{
        document.body.style.overflow = "unset"
        document.querySelector('header .wrapper').style.paddingBlock = ".5rem"
        document.querySelector('header .wrapper').style.borderBottomColor = "rgba(0, 0, 0, .1)"
      }
    })
  }, [])

  return (
    <header className="wrapper">
      <div className="wrapper">
        <input type="checkbox" id="menuBtn"/>
        <a href="/" className="logo">Sergei Mazhuga</a>
        <nav>
          <ul className="wrapper">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#works">Works</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <a href="#" className="lang-switch">EN<span>/RU</span></a>
        <label htmlFor="menuBtn"/>
      </div>
    </header>
  )
}
 
export default Header