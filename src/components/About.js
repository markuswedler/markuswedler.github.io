import { useEffect } from "react"

const About = ({ about }) => {
  const skillsNames = ["HTML & CSS", "JavaScript", "React & Next.js", "Git & GitHub"]
  const skillsPercentages = [97, 98, 56, 76]

  useEffect(()=>{
    const header = document.querySelector('header')
    const section = document.querySelector('section#about')
    const animated = document.querySelectorAll('section#about .animate')
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
          {
            skillsNames.map((skill, i) => (
              <li className="toAnimate" key={i}>
                <h4>{ skill }</h4>
                <span className="percentage" style={{ left: skillsPercentages[i] + "%" }}>{ skillsPercentages[i] + "%" }</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: skillsPercentages[i] + "%" }} />
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}
 
export default About