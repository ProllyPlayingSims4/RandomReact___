import React from 'react';

const Card = ({image, heading, content}) => {
  return (
    <div>
        <div>
            <img src={image} alt={heading} />
        </div>
        <div>
            <span>
                {heading}
            </span>
            <p>
                {content}
            </p>
        </div>
        <div>
            <button>Buy Now</button>
            <button>Add to Cart</button>
        </div>
    </div>
  )
}

export default Card;