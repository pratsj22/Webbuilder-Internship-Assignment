import React from 'react'
import { suggestedContent } from '../Data/data'

const SuggestedContent = () => {
  return (
    <div className="suggestion">
          <div className="suggestion-heading">Related deals you might like for</div>
          <div className="deals">
            {suggestedContent.map((item)=>(
            <div className="deal" key={item.id}>
              <div className="top">
                <img src="download1.png" alt="" />
              </div>
              <div className="bottom">
                <div className="tags">
                  {item.discount && <div className="tag">{item.discount}% Off</div>}
                  <div className="tag">Limited time</div>
                </div>
                <div className="deal-title">{item.title}</div>
                <div className="deal-details">{item.details}</div>
                <div className="pricing">
                  <div className="discountedPrice">${(item.originalPrice * (100-item.discount)/100).toFixed(2)}</div>
                  <div className="originalPrice">${item.originalPrice}</div>
                  <div className="discount">({item.discount}% Off)</div>
                </div>
                <button className='view-deal-btn'>View Deal</button>
              </div>
            </div>
            ))}
          </div>
        </div>
  )
}

export default SuggestedContent