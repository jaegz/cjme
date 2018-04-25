import React from 'react'
import Link from 'gatsby-link'

var styles = {
  container: {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    border: '14px solid  rgb(44, 62, 84)'
  },
  h1: {
    color: '#fff',
    position: 'relative',
    fontFamily: 'Alegreya SC, serif',
    margin: 20,
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
  },
  firstName: {
    fontWeight: 700,
    fontSize: '30',
    position: 'relative',
    top: 26,
    left: 6
  },
  lastName: {
    fontWeight: 900,
    letterSpacing: '0.01em',
    fontSize: 72,
    // 2em
  },
  tagline: {
    fontSize: '1.3em',
    color: '#fff'
  },
  icon: {
    border: '1px solid white',
    borderRadius: '1.5em',
    padding: '0.5em',
    margin: '0.5em',
    width: 20,
    height: 20
  }
}

// propTypes: {
//   isDepressed: React.PropTypes.bool,
// }

const IndexPage = () => (
  <div style={styles.container}>
    <h1 style={styles.h1}>
      <span style={styles.firstName}>Christopher</span>
      <span style={styles.lastName}>Jaeger</span>
    </h1>
    <p style={styles.tagline}>Front End Craftsman</p>
    <div class="contact-me">
      <a style={styles.icon} href="https://www.linkedin.com/in/christopher-jaeger-5b9b4226">ln</a>
      <a style={styles.icon} href="https://twitter.com/seeJaeger">tw</a>
      <a style={styles.icon} href="https://github.com/jaegz">gh</a>
      <a style={styles.icon} href="https://codepen.io/jaegs">cp</a>
      <a style={styles.icon} href="https://stackoverflow.com/users/2561435/jaegs">so</a>
      <a style={styles.icon} href="mailto:chris@seejaeger.com">em</a>
    </div>
    {/*<h2>Portfolio: The web is my workshop</h2>*/}
    {/*<Link to="/page-2/">Go to page 2</Link>*/}
  </div>
)

export default IndexPage
