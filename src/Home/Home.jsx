import React from 'react'
import './Home.scss'
import Filter from './Components/Filter';
import Content from './Components/Content';
import SuggestedContent from './Components/SuggestedContent';
import VisitHistory from './Components/VisitHistory';

const Home = () => {

  return (
    <div className='home'>
      <div className="container">
        <div className="heading">Best Website builders in the US</div>
        <hr />
        <div className="details">
          <div className="left">
            <div>
              <img src="checkMark.png" alt="" />
              <span>Last Updated - </span>
              <span>February 22, 2020 </span>
            </div>
            <div>
              <img src="info.png" alt="" />
              <span>Advertising Disclosure</span>
            </div>
          </div>
          <div className="right">
            <span>Top Relevant</span>
            <img src="downArrow1.png" alt="" />
          </div>
        </div>
        <hr />
        <Filter/>
        <VisitHistory/>
        <Content/>
        <SuggestedContent/>
        <div className="newsletter">
          <div className="left">Sign up and get exclusive special deals</div>
          <div className="right">
            <input type="email" name="" id="" />
            <button className='signUp'>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home