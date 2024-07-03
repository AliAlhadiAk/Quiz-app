import { Link } from "react-router-dom"
const About = () => {
  return (
      <main className='About'>
          <h2>About</h2>
          <blockquote>
          
          <p style={{ marginTop: "1rem" }}>This blog app is a project made by 
          the bet programmer AliAlhadi abokhalil To improve his React Skills.
          He's A FullStack Developer using React js At the Frontend with Asp.Net Core at the Back end 🤩🤩🤩🤩</p>
          <Link to={`https://www.instagram.com/ali_abokhalil123/`} className="Insta">Visit Our instagram</Link>
          </blockquote>
      </main>

  )
}

export default About