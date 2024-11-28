import React, { useRef, useState } from "react";
import Card from "./Single_Card/Single_Card";
import "./Card.css";
import { motion, useInView } from "motion/react";

const cardData = [
  {
    imageSrc: "/gpu.png",
    title: "GPU Orchestration",
    description:
      "Delivering optimized GPU orchestration solutions to enhance performance and scalability for AI-driven workloads.",
  },
  {
    imageSrc: "/computerVision.png",
    title: "Computer Vision",
    description:
      " Providing advanced computer vision solutions to extract actionable insights from visual data for smarter decision-making.",
  },
  {
    imageSrc: "/dataScience.png",
    title: "Data Science",
    description:
      "Offering data science solutions that turn complex data into meaningful insights, driving informed business decisions.",
  },
  {
    imageSrc: "/agent.png",
    title: "Intelligent Agent",
    description:
      "Creating intelligent agent solutions that automate processes, adapt to changes, and drive business innovation.",
  },
  {
    imageSrc: "/genAi.png",
    title: "Gen AI",
    description:
      "Empowering businesses with generative AI solutions that create innovative content and streamline operations.",
  },
  {
    imageSrc: "/iot.png",
    title: "IoT",
    description:
      "Delivering IoT solutions that seamlessly connect devices, providing real-time data and driving operational efficiency.",
  },
];

const CardList = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 }); // Trigger when 10% of the section is visible
  const [hasAnimated, setHasAnimated] = useState(false);

  // Trigger animation only once when it comes into view
  if (isInView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <motion.div className="card-list" ref={ref}>
      {cardData.map((card, index) => (
        <motion.div
          key={index}
          initial={{ x: "-100vw", opacity: 0 }}
          animate={
            hasAnimated ? { x: 0, opacity: 1 } : { x: "-100vw", opacity: 0 } // Keep at initial state if not animated
          }
          transition={{
            duration: 1,
            delay: index * 0.7, // Stagger animation
          }}
        >
          <Card
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CardList;
