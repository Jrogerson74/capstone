import React from "react";

import fear from "../image/fear.jpg";

export default function() {
  return(
    <div className="home-details">
        <div className="home-details-logo">
          <img src={fear} alt="Fear" />
        </div>
        <div className="home-details-text">
          <p>Welcome to Horrified, A website dedicated to the film genre of horror. I have taken the last four decades and listed by year which horror movies did the best at the box office. I have also put the highest rotten tomatoes fresh score and audience score. Lastly I have compiled my favorites from each year from the last four decades</p>
        </div>
    </div>
  )
}