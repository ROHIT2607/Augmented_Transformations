import React from "react";
import './carousel.css'
import Ellipse3 from "public\Ellipse 3.png";
import Ellipse4 from "public\Ellipse 4.png";
import Ellipse5 from "public\Ellipse 5.png";
import Ellipse6 from "public\Ellipse 6.png";
import Ellipse7 from "public\Ellipse 7.png";
import Ellipse8 from "public\Ellipse 8.png";
import Ellipse9 from "public\Ellipse 9.png";

const App = () => {
  const moonImages = [
    Ellipse3,
    Ellipse4,
    Ellipse5,
    Ellipse6,
    Ellipse7,
    Ellipse8,
    Ellipse9,
  ];

  return (
    <div className="container">
      {/* Render the moon images */}
      {moonImages.map((moon, index) => (
        <img
          key={index}
          src={moon}
          className={`moon moon${index + 1}`}
          alt={`Moon ${index + 3}`}
        />
      ))}

      {/* Text Content */}
      <div className="text">
        <h1>
          THE FUTURE IS <span className="highlight">NOW</span>
        </h1>
        <p>
          Partner with Augmented Transformation & unlock the true potential of
          your organization through data-driven solutions.
        </p>
        <button>Get started</button>
      </div>
    </div>
  );
};

export default App;
