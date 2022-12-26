import { useEffect } from "react"

const Header = () => {
  // change header on scroll
  const changeHeader = () => {
    if(window.scrollY > 0) document.querySelector('header .wrapper').style.borderBottomColor = "rgba(0, 0, 0, .1)"
    else document.querySelector('header .wrapper').style.borderBottomColor = "transparent"
  }
  
  useEffect(()=>{
    window.addEventListener("scroll", changeHeader)
    changeHeader()
    // prevent body scroll when menu is opened
    document.querySelector('header input').addEventListener("change", ()=>{
      if(document.querySelector('header input').checked){
        document.body.style.overflow = "hidden"
        setTimeout(()=>{
          document.querySelector('header .wrapper').style.paddingBlock = "1rem"
          document.querySelector('header .wrapper').style.borderBottomColor = "transparent"
        }, 1)
      }
      else{
        document.body.style.overflow = "unset"
        changeHeader()
      }
    })
    // close menu on link click
    document.querySelectorAll('header nav a').forEach(link => {
      link.addEventListener("click", ()=>{
        document.querySelector('header input').checked = false
        document.body.style.overflow = "unset"
      })
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
        <a href="/" className="lang-switch">EN<span>/RU</span></a>
        <label htmlFor="menuBtn"/>
      </div>
    </header>
  )
}
 
export default Header