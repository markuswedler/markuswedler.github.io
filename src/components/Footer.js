import { useEffect } from "react"

const Footer = () => {
  useEffect(()=>{
    document.addEventListener("click", (e)=>{
      if(!document.querySelector('footer .languages label').contains(e.target) && !document.querySelector('footer .languages input').contains(e.target))
        document.querySelector('footer .languages input').checked = false
    })
  })

  return (
    <footer className="wrapper">
      <div className="wrapper">
        <div className="languages">
          <input type="checkbox" id="languages"/>
          <label htmlFor="languages"><ion-icon name="globe-outline"/><span>English</span><ion-icon name="chevron-down-outline"/></label>
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
        <div className="links"><a href="">GitHub</a><span>|</span><a href="">Dev.to</a><span>|</span><a href="">YouTube</a></div>
      </div>
    </footer>
  )
}
 
export default Footer