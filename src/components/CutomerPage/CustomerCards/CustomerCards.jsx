import React from "react";
import SingleCard from "./SingleCard/SingleCard";

const testimonialsData = [
  {
    name: "Nilesh Sethi",
    designation: "Luxe Affairs",
    image: "/cust1.png",
    feedback:
      "Augmented Transformations’ ERP solution has significantly streamlined our business processes, enhancing collaboration, and efficiency across departments. Highly recommend.",
  },
  {
    name: "Sameer Gandhi",
    designation: "Greenergy Sustainable LLP",
    image: "/cust2.png",
    feedback:
      "VAS has revolutionized our security measure. With its advanced analytics and real-time alerts, we know have peace of mind knowing our premises are under vigilant surveillance.",
  },
  {
    name: "Nikhil Mishra",
    designation: "NM JALMAITREYA LLP",
    image: "/cust3.png",
    feedback:
      "Augmented Transformations revolutionized our business with their Data Science expertise. Their solutions uncovered invaluable insights, propelling us forward in our industry.",
  },
];

const CustomerCards = () => {
  return <SingleCard testimonials={testimonialsData} />;
};

export default CustomerCards;
