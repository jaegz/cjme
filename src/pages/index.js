import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div className="business-card">
    <h1><span className="first">Christopher</span> <span className="last">Jaeger</span></h1>
    <p className="tagline">Front End Craftsman</p>
    {/*<h2>Portfolio: The web is my workshop</h2>*/}
    <div class="contact-me">
      <a href="https://www.linkedin.com/in/christopher-jaeger-5b9b4226" className="linkedin">linkedin</a>
      <a href="https://twitter.com/seeJaeger" className="twitter">twitter</a>
      <a href="https://github.com/jaegz" className="github">github</a>
      <a href="https://codepen.io/jaegs" className="codepen">codepen</a>
      <a href="https://stackoverflow.com/users/2561435/jaegs" className="stackoverflow">stackoverflow</a>
      <a href="mailto:chris@seejaeger.com" className="email">email</a>
    </div>
    {/*<Link to="/page-2/">Go to page 2</Link>*/}
  </div>
)

export default IndexPage
