import React from 'react'
import './Leftsidebar.css'
import { NavLink } from 'react-router-dom'
import Globe from "../../assets/Globe.svg"
import { IoPricetags } from "react-icons/io5";
import { HiUsers } from "react-icons/hi2";

const Leftsidebar = ({ slidein }) => {
  const slideinstyle = {
    transform: "translateX(0%)",
  };
  const slideoutstyle = {
    transform: "translateX(-100%)",
  }
  return (
    <div className="left-sidebar" style={slidein ? slideinstyle : slideoutstyle}>
      <nav className='side-nav'>
        <button className="nav-btnn">
          <NavLink to='/' className="side-nav-links" activeclassname='active'  style={{paddingLeft:"7px"}}>
            <p>Home</p>
          </NavLink>
        </button>
        <div className="side-nav-div">
          <div>
            <p>PUBLIC</p>
          </div>
          <button className='nav-btnn'>
            <NavLink to='/Question' className='side-nav-links' activeclassname='active' style={{paddingLeft:"7px"}}>
            <img style={{ color: "black" }} src={Globe} alt="globe" />

            <p style={{paddingLeft:'10px'}}>Questions</p>
            </NavLink>
          </button>
          <button className='nav-btnn'>
            <NavLink to='/Tags' className='side-nav-links' activeclassname='active' style={{paddingLeft:"7px"}}>
            <IoPricetags className='lefticon'/>
            <p >Tags</p>
            </NavLink>
          </button>
          <button className='nav-btnn'>
            <NavLink to='/Users' className='side-nav-links' activeclassname='active' style={{paddingLeft:"7px"}}>
            <HiUsers className='lefticon'/>
            <p >Users</p>
            </NavLink>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Leftsidebar