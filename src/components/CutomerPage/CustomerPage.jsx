import React from "react";
import "./CustomerPage.css";
import CustomerCards from "./CustomerCards/CustomerCards";

const CustomerPage = () => {
  return (
    <div className="customer-page">
      <img src="/cutomer-page.jpg" alt="Background" className="customer-img" />
      <div className="customer-cards-container">
        <CustomerCards />
      </div>
    </div>
  );
};

export default CustomerPage;
