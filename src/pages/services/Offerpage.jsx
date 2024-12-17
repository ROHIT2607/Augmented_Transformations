import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./offer.css";

const cardData = [
  {
    image: "public/gpuorchestrtion11.png",
    title: "GPU Orchestration",
    content:
      "Delivering optimized GPU orchestration solutions to enhance performance and scalability for AI-driven workloads.",
  },
  {
    image: "public/computervision11.png",
    title: "Computer Vision",
    content:
      "Providing advanced computer vision solutions to extract actionable insights from visual data for smarter decision-making.",
  },
  {
    image: "public/datascience11.png",
    title: "Data Science",
    content:
      "Offering data science solutions that turn complex data into meaningful insights, driving informed business decisions.",
  },
  {
    image: "public/agent11.png",
    title: "Intelligent Agent",
    content:
      "Creating intelligent agent solutions that automate processes, adapt to changes, and drive business innovation.",
  },
  {
    image: "public/genai11.png",
    title: "Gen AI",
    content:
      "Empowering businesses with generative AI solutions from generating content to streamlining operations.",
  },
];

const App = () => {
  const scrollRef = useRef(null);
  let scrollInterval;

  useEffect(() => {
    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollRef.current) {
          const container = scrollRef.current;
          container.scrollLeft += 1;
          if (
            container.scrollLeft >=
            container.scrollWidth - container.clientWidth
          ) {
            container.scrollLeft = 0;
          }
        }
      }, 20);
    };

    const stopAutoScroll = () => {
      clearInterval(scrollInterval);
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("mouseenter", stopAutoScroll);
      scrollContainer.addEventListener("mouseleave", startAutoScroll);
      startAutoScroll();
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("mouseenter", stopAutoScroll);
        scrollContainer.removeEventListener("mouseleave", startAutoScroll);
      }
      clearInterval(scrollInterval);
    };
  }, []);

  return (
    <Container
      fluid
      className="py-5 text-white"
      style={{
        background: "black",
      }}
    >
      <div
        style={{
          marginLeft: "4%",
          marginRight: "7%",
        }}
      >
        <h2
          style={{
            background:
              "linear-gradient(90deg, rgba(14, 226, 246, 1), rgba(95, 45, 238, 1))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
            marginBottom: "20px",

          }}
        >
          Mobile app development team:
        </h2>

        <p style={{ fontSize: "18px", color: "#D3D3D3" }}>
          Our team includes experienced developers ranging from 3 years to 6+
          years of relevant expertise on various technologies. Their
          qualification ranges from diploma holders to BTech in IT / CS.
        </p>
      </div>
      <div className="scroll-container" ref={scrollRef}>
        <Row
          className="flex-nowrap justify-content-center"
          style={{ display: "inline-flex" }}
        >
          {cardData.map((card, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={2}
              className="d-flex justify-content-center"
              style={{ margin: "0 0px", width: "20rem" }}
            >
              <Card
                className="text-center shadow"
                style={{
                  width: "14rem",
                  borderRadius: "20px",
                  backgroundColor: "#ffffff",
                  padding: "20px 10px",
                  border: "none",
                }}
              >
                <div className="icon-container mb-3" style={{ height: "55px" }}>
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{ height: "60px", objectFit: "contain" }}
                  />
                </div>
                <Card.Body>
                  <Card.Title style={{ color: "#1C1C1C", fontWeight: "bold" }}>
                    {card.title}
                  </Card.Title>
                  <Card.Text style={{ color: "#6E6E6E", fontSize: "14px" }}>
                    {card.content}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default App;
