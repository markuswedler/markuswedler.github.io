import { useEffect } from "react"

const Header = ({ header }) => {
  // change header on scroll
  const changeHeader = () => {
    const wrapper = document.querySelector('header .wrapper')
    if(window.scrollY > 0) wrapper.style.borderBottomColor = "rgba(0, 0, 0, .1)"
    else wrapper.style.borderBottomColor = "transparent"
  }
  
  useEffect(()=>{
    // change header on render if needed
    changeHeader()
    // add scroll event listener
    window.addEventListener("scroll", changeHeader)
    // close menu on link click
    const links = document.querySelectorAll('header ul a')
    const input = document.querySelector('header input')
    links.forEach(link =>
      link.addEventListener("click", () => input.checked = false)
    )
  }, [])

  return (
    <header className="wrapper">
      <div className="wrapper">
        <input type="checkbox" id="menuBtn"/>
        <a href="/" className="logo">Sergei Mazhuga</a>
        <ul>
          <li><a href="#">{ header && header.home }</a></li>
          <li><a href="#about">{ header && header.about }</a></li>
          <li><a href="#works">{ header && header.works }</a></li>
          <li><a href="mailto:ghbdtnghbdtn8@gmail.com" className="contact">{ header && header.contact }</a></li>
        </ul>
        <label htmlFor="menuBtn"/>
      </div>
    </header>
  )
}
 
export default Header