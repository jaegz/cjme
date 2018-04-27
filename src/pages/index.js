import React from 'react';
import Link from 'gatsby-link';
import IconCodepen from '../components/icon-codepen';
import IconLinkedin from '../components/icon-linkedin';
import IconTwitter from '../components/icon-twitter';
import IconGithub from '../components/icon-github';
import IconStackoverflow from '../components/icon-stackoverflow';
import IconEmail from '../components/icon-email';

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
    fontSize: 72
  },
  tagline: {
    fontSize: '1.3em',
    color: '#fff'
  },
  icon: {
    margin: '0.5em',
    height: 'auto',
    width: '8vw',
  }
}

const IndexPage = () => (
  <div style={styles.container}>
    <h1 style={styles.h1}>
      <span style={styles.firstName}>Christopher</span>
      <span style={styles.lastName}>Jaeger</span>
    </h1>
    <p style={styles.tagline}>Front End Craftsman</p>
    <div>
      <a href="https://www.linkedin.com/in/christopher-jaeger-5b9b4226" target="_blank">
        <IconLinkedin style={styles.icon} />
      </a>
      <a href="https://twitter.com/seeJaeger" target="_blank">
        <IconTwitter style={styles.icon}/>
      </a>
      <a href="https://github.com/jaegz" target="_blank">
        <IconGithub style={styles.icon}/>
      </a>
      <a href="https://codepen.io/jaegs" target="_blank">
        <IconCodepen style={styles.icon} />
      </a>
      <a href="https://stackoverflow.com/users/2561435/jaegs" target="_blank">
        <IconStackoverflow style={styles.icon}/>
      </a>
      <a href="mailto:chris@seejaeger.com" target="_blank">
        <IconEmail style={styles.icon}/>
      </a>
    </div>
    {/*<h2>Portfolio: The web is my workshop</h2>*/}
    {/*<Link to="/page-2/">Go to page 2</Link>*/}
  </div>
)

export default IndexPage
