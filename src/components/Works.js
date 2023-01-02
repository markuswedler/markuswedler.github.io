// react
import { useEffect } from "react"

const Works = ({ works }) => {
  useEffect(()=>{
    const header = document.querySelector('header')
    const section = document.querySelector('section#works')
    // set link stop
    section.style.scrollMargin = header.offsetHeight + "px"
  }, [])

  return (
    <section className="works" id="works">
      <h2 className="title">{ works && works.title }</h2>
      <div className="works">{
        works && Object.keys(works.cards).map(name => (
          <a href={ "https://" + works.cards[name].url } key={name}>
            <div className="img"  style={{ backgroundImage: "url('/images/works_logos/" + name + ".svg')" }}/>
            <h3>{ works.cards[name].title }</h3>
            <p>{ works.cards[name].paragraph }</p>
          </a>
        ))}
        <a href="https://markuswedler.github.io/test">
          <div className="img"/>
          <h3>Лабороторные</h3>
          <p></p>
        </a>
      </div>
    </section>
  )
}
 
export default Works