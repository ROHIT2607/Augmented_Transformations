import React from "react";
import "./Carousel_two.css";
import { motion } from "framer-motion";

const Carousel_two = () => {
  return (
    <div className="carousel-main-container">
      <motion.img
        src="/a1.png"
        alt=""
        className="a1"
        animate={{ left: [180, 300, 250, 100], top: [220, 300, 150, 150] }} // Array of coordinates for movement
        transition={{
          duration: 15,
          delay: 0.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.img
        src="/a2.png"
        alt=""
        className="a2"
        animate={{ left: [410, 200, 160, 290], top: [400, 220, 350, 400] }}
        transition={{
          duration: 15,
          delay: 0.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="b">
        <motion.img
          src="/b1.png"
          alt=""
          className="b1"
          animate={{ right: [280, 210, 150, 100], top: [270, 150, 170, 250] }}
          transition={{
            duration: 15,
            delay: 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.img
          src="/b2.png"
          alt=""
          className="b2"
          animate={{ right: [150, 300, 400, 400], top: [350, 400, 400, 150] }}
          transition={{
            duration: 15,
            delay: 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="c">
        <motion.img
          src="/c2.png"
          alt=""
          className="c2"
          animate={{
            left: [500, 600, 550, 650, 700],
            top: [120, 400, 400, 300, 120],
          }}
          transition={{
            duration: 15,
            delay: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.img
          src="/c1.png"
          alt=""
          className="c1"
          animate={{
            left: [600, 500, 700, 400, 500],
            top: [300, 120, 120, 50, 350],
          }}
          transition={{
            duration: 15,
            delay: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* <div className="d">
        <motion.img
          src="/d1.png"
          alt=""
          className="d1"
          animate={{ right: [300, 500], top: [60, 60] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div> */}
      <div className="carousel-inner-container">
        <div className="carousel-header">
          <h1>
            THE FUTURE IS <span className="blue-text">NOW</span>
          </h1>
        </div>
        <div className="carousel-para">
          <p>
            Partner with{" "}
            <span className="p-underline">Augmented Transformation </span> &
          </p>
          <p>
            {" "}
            unlock the true potential of your organization through data-driven
            solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Carousel_two;
