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
        <div className="middle">
          made with&nbsp;<ion-icon name="heart"/>
        </div>
        <div className="links">
          <a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="github link" /></a>
          <a href=""><img src="https://cdn.worldvectorlogo.com/logos/devto.svg" alt="dev.to link" /></a>
          <a href=""><img src="https://www.svgrepo.com/show/140440/youtube.svg" alt="youtube link" /></a>
        </div>
      </div>
    </footer>
  )
}
 
export default Footer