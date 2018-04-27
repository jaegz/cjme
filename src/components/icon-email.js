import React from 'react'
// export const IconCodepen = ({size, color}) => (

// note-to-self: if viewBox was the same across all svgs,
// we could create a svg component witht the meta,
// saving each path as a const instead of separate components.
// technically could pass them in as props but why complicate?
// this will extracted in a future update

const IconEmail = (props) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
    viewBox="0 0 60 60"
    style={props.style}
    >
    <path d="M30,60 C46.5685433,60 60,46.5685433 60,30 C60,13.4314567 46.5685433,0 30,0 C13.4314567,0 0,13.4314567 0,30 C0,46.5685433 13.4314567,60 30,60 Z" fill="#000000" /><path d="M30,33.4615385 L47.3076923,18.4615385 L12.6923077,18.4615385 L30,33.4615385 Z M25.3251765,31.8010536 L30,35.6382399 L34.6015813,31.8010536 L47.3076923,42.6923077 L12.6923077,42.6923077 L25.3251765,31.8010536 Z M11.5384615,41.5384615 L11.5384615,19.6153846 L24.2307692,30.5769231 L11.5384615,41.5384615 Z M48.4615385,41.5384615 L48.4615385,19.6153846 L35.7692308,30.5769231 L48.4615385,41.5384615 Z" fill="#FFFFFF" /></svg>
)

export default IconEmail
