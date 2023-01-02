import { useEffect } from "react"

const About = ({ about }) => {
  useEffect(()=>{
    const header = document.querySelector('header')
    const section = document.querySelector('section#about')
    // set link stop
    section.style.scrollMargin = header.offsetHeight + 40 + "px"
  }, [])

  return (
    <section className="about" id="about">
      <div className="container">
        <div>
          <img src="/images/directions.svg"/>
          <h2>{ about && about.heading }</h2>
          <p>{ about && about.paragraph }</p>
        </div>
        <ul>
          <li>
            <h4>HTML & CSS</h4>
            <span/>
            <div/>
          </li>
          <li>
            <h4>JavaScript</h4>
            <span/>
            <div/>
          </li>
          <li>
            <h4>React & Next.js</h4>
            <span/>
            <div/>
          </li>
          <li>
            <h4>Git & GitHub</h4>
            <span/>
            <div/>
          </li>
        </ul>
      </div>
    </section>
  )
}
 
export default About