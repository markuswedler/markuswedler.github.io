import { useEffect } from "react"

const Header = () => {
  // change header on scroll
  const changeHeader = () => {
    if(window.scrollY > 0) document.querySelector('header .wrapper').style.borderBottomColor = "rgba(0, 0, 0, .1)"
    else document.querySelector('header .wrapper').style.borderBottomColor = "transparent"
  }
  
  useEffect(()=>{
    changeHeader()
    window.addEventListener("scroll", changeHeader)
    // close menu on link click
    document.querySelectorAll('header ul a').forEach(link => {
      link.addEventListener("click", ()=>{
        document.querySelector('header input').checked = false
      })
    })
  }, [])

  return (
    <header className="wrapper">
      <div className="wrapper">
        <input type="checkbox" id="menuBtn"/>
        <a href="/" className="logo">Sergei Mazhuga</a>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#contact" className="contact-btn">Contact</a></li>
        </ul>
        <label htmlFor="menuBtn"/>
      </div>
    </header>
  )
}
 
export default Header