import React from "react";
import Card from "./Single_Card/Single_Card";
import "./Card.css";

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
    title: "IOT",
    description:
      "Delivering IoT solutions that seamlessly connect devices, providing real-time data and driving operational efficiency.",
  },

  // Add more cards as needed
];

const CardList = () => {
  return (
    <div className="card-list">
      {cardData.map((card, index) => (
        <Card
          key={index}
          imageSrc={card.imageSrc}
          title={card.title}
          description={card.description}
          style={{
            animationDelay: `${index * 0.2}s`, // Adjust delay between cards
          }}
        />
      ))}
    </div>
  );
};

export default CardList;
