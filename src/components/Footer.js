import { useEffect } from "react"

const Footer = () => {
  useEffect(()=>{
    document.addEventListener("click", (e) => {
      const label = document.querySelector('footer .languages label')
      const input = document.querySelector('footer .languages input')
      if(!label.contains(e.target) && !input.contains(e.target)) input.checked = false
    })
  }, [])

  return (
    <footer className="wrapper">
      <div className="wrapper">
        <div className="languages">
          <input type="checkbox" id="languages"/>
          <label htmlFor="languages">
            <ion-icon name="globe-outline"/>
            <span>English</span>
            <img src="/images/arrow_down_2.svg" />
          </label>
          <div className="list">
              <a href="/">
                <div>English</div>
                <div>English (US)</div>
              </a>
              <a href="/">
                <div>Русский</div>
                <div>Russian</div>
              </a>
          </div>
        </div>
        <div className="links">
          <a href=""><img src="/images/links_logos/github.svg"/></a>
          <a href=""><img src="/images/links_logos/devto.svg"/></a>
          <a href=""><img src="/images/links_logos/youtube.svg"/></a>
        </div>
      </div>
    </footer>
  )
}
 
export default Footer