import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
      <p className="beats-solo">{heroBanner.smallText}</p>
        {/* small text and all hero.banner items are gotten from the sanity, 
        so it can be dynamically changed using sanity rather than code */}
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1} </h1>
        <img src={urlFor(heroBanner.image)} 
        alt="headphones" 
        className="hero-banner-image" 
        />

<div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5> Better Camera. Better Batery life. Better everything </h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroBanner

// use heroBanner. attributes to changed the attributes using sanity, rather than 
// hard code 