import React, { useState } from 'react'
import './Navbar.scss'
import { useMediaQuery } from '@mui/material';

const Navbar = () => {
  const isDesktop = useMediaQuery('(min-width:660px)');
  const [display, setDisplay] = useState('none');
    const [disp, setDisp] = useState('flex');
    const [angle, setAngle] = useState('0deg');
    const [moveX, setMoveX] = useState('0px');
    const [moveY, setMoveY] = useState('0px');
    const changeStyle = () => {
        setDisp(disp === 'flex' ? 'none' : 'flex');
        setAngle(angle === '0deg' ? '45deg' : '0deg');
        setMoveX(moveX === '0px' ? '5px' : '0px');
        setMoveY(moveY === '0px' ? '5px' : '0px');
        setDisplay(display === 'flex' ? 'none' : 'flex');
    }
  return (
    <div className='navbar'>
      <div className="container">
        <div className="searchBar">
          <img src="/searchImage.png" alt="" />
          <input type="search" name="" id="" />
        </div>
        <div className="menu" onClick={changeStyle}>
                <div className="lines" style={{ transform: `rotate(${angle}) translateX(${moveX}) translateY(${moveY})` }}></div>
                <div className="lines" style={{ transform: `rotate(-${angle}) translateX(${moveX}) translate(-${moveY})` }}></div>
                <div className="lines" style={{ display: disp }}></div>
        </div>
        <div className="categories" style={{display:isDesktop?'flex':display}}>
        <div className="category">Categories</div>
        <div className="category">Website Builders</div>
        <div className="category">Today's deals</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar