import { useEffect } from "react"

const Footer = ({ footer }) => {
  useEffect(()=>{
    // close language select menu on outside click
    document.addEventListener("click", (e) => {
      const label = document.querySelector('footer .languages label')
      const input = document.querySelector('footer .languages input')
      if(!label.contains(e.target) && !input.contains(e.target)) input.checked = false
    })
    // change language onclick event
    document.querySelectorAll('footer .languages .lang').forEach(lang => {
      lang.addEventListener("click", (e)=>{
        localStorage.setItem('lang', e.target.dataset.lang)
        window.location.replace('/')
      })
    })
  }, [])

  return (
    <footer className="wrapper">
      <div className="wrapper">
        <div className="languages">
          <input type="checkbox" id="languages"/>
          <label htmlFor="languages">
            <ion-icon name="globe-outline"/>
            <span>{ footer && footer.language }</span>
            <img src="/images/arrow_down_2.svg" />
          </label>
          <div className="list">
              <div className="lang" data-lang="en-US">
                <div>English</div>
                <div>English (US)</div>
              </div>
              <div className="lang" data-lang="ru">
                <div>Русский</div>
                <div>Russian</div>
              </div>
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