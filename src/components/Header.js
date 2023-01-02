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
    // close menu on outside or link click
    document.addEventListener("click", (e) => {
      const label = document.querySelector('header label')
      const input = document.querySelector('header input')
      if(!label.contains(e.target) && !input.contains(e.target)) input.checked = false
    })
  }, [])

  return (
    <header className="wrapper">
      <div className="wrapper">
        <a href="/" className="logo">Sergei Mazhuga</a>
        <input type="checkbox" id="menuBtn"/>
        <ul>
          <li><a href="#">{ header && header.home }</a></li>
          <li><a href="#about">{ header && header.about }</a></li>
          <li><a href="#works">{ header && header.works }</a></li>
          <li><a href="mailto:ghbdtnghbdtn8@gmail.com">{ header && header.contact }</a></li>
        </ul>
        <label htmlFor="menuBtn"/>
      </div>
    </header>
  )
}
 
export default Header