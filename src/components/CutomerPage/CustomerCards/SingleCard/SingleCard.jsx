// import React from "react";
// import "./SingleCard.css";
// const SingleCard = () => {
//   return (
//     <div className="cust-container-main">
//       <div className="cust-container-text">
//         <p className="text-one"> - Voices of Our Customers</p>
//         <p className="text-two">
//           Discover how our solutions have transformed businesses, as shared by
//           those who know us best.
//         </p>
//       </div>
//       <div className="cust-container-data">
//         <div className="cust-card-container">
//           <img src="/Polygon.png" alt="" className="polygon-img" />
//           <div className="cust-head">
//             <div className="cust-head-img">
//               <img src="/cust1.png" alt="" className="cust-img" />
//             </div>
//             <p className="cust-head-name">Nilesh Sethi</p>
//             <p className="cust-head-desig">Luxe Affairs</p>
//           </div>
//           <div className="cust-para-div">
//             <p className="cust-para">
//               Augmented Transformations’ ERP solution have significantly
//               streamlined our business processes, enhancing collaboration, and
//               efficiency across departments. Highly recommend.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleCard;

import React from "react";
import "./SingleCard.css";

const SingleCard = ({ testimonials }) => {
  return (
    <div className="cust-container-main">
      {/* Static Text Section */}
      <div className="cust-container-text">
        <p className="text-one">- Voices of Our Customers</p>
        <p className="text-two">
          Discover how our solutions have transformed businesses, as shared by
          those who know us best.
        </p>
      </div>

      {/* Dynamic Cards Section */}
      
      <div className="cust-container-data">
        {testimonials.map((testimonial, index) => (
          <div className="cust-card-container" key={index}>
            <img src="/Polygon.png" alt="" className="polygon-img" />
            <div className="cust-head">
              <div className="cust-head-img">
                <img src={testimonial.image} alt="" className="cust-img" />
              </div>
              <p className="cust-head-name">{testimonial.name}</p>
              <p className="cust-head-desig">{testimonial.designation}</p>
            </div>
            <div className="cust-para-div">
              <p className="cust-para">{testimonial.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleCard;
