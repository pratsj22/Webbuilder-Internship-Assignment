import React from 'react'
import Rating from '@mui/material/Rating';
import { content } from '../Data/data';

const Content = () => {

    return (
        <div className='content-container'>
            {content.map((item) => (
                <div className="content" key={item.id}>
                    {(item.isBestChoice || item.isBestValue) && <div className="content-tag">
                        <img src={item.isBestChoice ? "trophy.png" : "diamond.png"} alt="" />
                        <span>Best {item.isBestChoice ? "Choice" : "Value"}</span>
                    </div>}

                    <div className="number">{item.id}</div>
                    <div className="left">
                        <img src="download1.png" alt="" />
                        <div>{item.imageTitle}</div>
                    </div>
                    <div className="middle">
                        <div className="content-heading">
                            <span className='title'>
                                {item.contentTitle}
                            </span>
                            <span className='title-details'>{item.contentDetails}</span>
                        </div>
                        {item.discount && <div className="discount">
                        {item.discount}% Off
                        </div>}
                        <div className="highlights">
                            <div className="main-highlights">Main highlights</div>
                            {!item.isSpecial &&
                                <div className="highlights--details__text">
                                    {item.highlightsDetails}
                                </div>
                            }
                            {item.isSpecial &&
                                <div className="highlights--details__special">
                                    <div className="highlights-parameters">
                                        <div>
                                            <span className="rating">9.9</span>
                                            <span className="parameter">Building responsive</span>
                                        </div>
                                        <div>
                                            <span className="rating">8.9</span>
                                            <span className="parameter">Cool</span>
                                        </div>
                                        <div>
                                            <span className="rating">8.9</span>
                                            <span className="parameter">Docs</span>
                                        </div>
                                    </div>
                                    <div className="highlights-reasons">
                                        <div className='reason-title'>Why we love it</div>
                                        <div>
                                            <img src="blueCheckmark.png" alt="" />
                                            <span>Documentation</span>
                                        </div>
                                        <div>
                                            <img src="blueCheckmark.png" alt="" />
                                            <span>Easy Use</span>
                                        </div>
                                        <div>   
                                            <img src="blueCheckmark.png" alt="" />
                                            <span>Out of box</span>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="show-more">
                            Show More <img src="downArrow2.png" alt="" />
                        </div>
                    </div>
                    <div className="right">
                        <div className="box">
                            <div className="rating-box">
                                <div className="rating-info"><img src="info.png" alt="" /></div>
                                <div className="rating">{item.rating}</div>
                                <div className="rating-tag">{item.ratingTag}</div>
                                <div className="rating-stars"><Rating name="read-only" value={item.ratingStars} precision={0.5} size="small" readOnly /></div>
                            </div>
                        </div>
                        <button className="view-btn">View</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Content