import { Link } from 'react-router'
import React from 'react'

export default function Menu() {
  return (
    <>
        {/* <!-- Navigation Bar --> */}
        <div className="w3-bar w3-white w3-large">
        <Link to="/" className="w3-bar-item w3-button w3-red w3-mobile"><i className="fa fa-bed w3-margin-right"></i>Logo</Link>
        <Link to="/rooms" className="w3-bar-item w3-button w3-mobile">Rooms</Link>
        <Link to="/about" className="w3-bar-item w3-button w3-mobile">About</Link>
        <Link to="/contact" className="w3-bar-item w3-button w3-mobile">Contact</Link>
        <Link to="/contact" className="w3-bar-item w3-button w3-right w3-light-grey w3-mobile">Book Now</Link>
        </div>
    </>

  )
}
