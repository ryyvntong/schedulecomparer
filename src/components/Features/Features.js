import React from 'react';
import Classes from './Features.module.css';

//TODO: Map over multiple cards and place into components

const HeroBanner = ()=>{
    return(
        <>
        <div className={`card ${Classes.cardWidth}`}>
        <div className="card-body">
          <h5 className="card-title">Schedule Times</h5>
          <p className="card-text">This is a wider card </p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div className={`card ${Classes.cardWidth}`}>
      <div className="card-body">
        <h5 className="card-title">Plan better</h5>
        <p className="card-text">Make better plans</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    </>
    )
};

export default HeroBanner;