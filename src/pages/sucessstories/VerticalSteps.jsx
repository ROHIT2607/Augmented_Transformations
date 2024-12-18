import React from "react";

const VerticalSteps = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "40px 20px",
        fontFamily: "Poppins, sans-serif",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Main Container */}
      <div style={{ position: "relative", width: "900px" }}>
        {/* Vertical Dotted Line */}
        <div style={verticalLineStyle}></div>

        {/* First Box - Left */}
        <div style={{ ...boxWrapperStyle, justifyContent: "flex-start" }}>
          <div style={boxStyle}>
            <div style={headingStyle}>
              Empowering Resource Management with Outsource Operator
            </div>
            <div style={contentStyle}>
              <p>
              <strong style={contentStyleStrong}>Customer Requirement:</strong> A powerful server
                solution with 8 A100 GPUs to support 56 simultaneous users, each
                accessing a specific GPU portion. The system needed to host
                custom environments like YOLO and ESRT efficiently
              </p>
              <p>
              <strong style={contentStyleStrong}>Our Solution:</strong>We delivered the Workspace
                Operator, a specialized application with pre-configured
                environments (YOLO, ESRT, BCSCN Super Resolution). This
                innovative solution leverages Multi-Instance GPU (MIG) for
                optimized resource allocation and seamless multi-user support.
                The user-friendly interface allows effortless switching between
                environments, enhancing productivity. To ensure data security, a
                robust Tunnel application was integrated, providing VPN access
                and safeguarding server integrity. This design meets the
                customer's needs with efficiency, flexibility, and security.
              </p>
            </div>
          </div>
        </div>

        {/* Second Box - Right */}
        <div style={{ ...boxWrapperStyle, justifyContent: "flex-end" }}>
          <div style={boxStyle}>
            <div style={headingStyle}>Quality Assurance through CCTV</div>
            <div style={contentStyle}>
              <p>
              <strong style={contentStyleStrong}>Business Challenge:</strong> In high-volume
                manufacturing, minor errors in product assembly or labeling can
                lead to major quality issues. The customer struggled with
                ensuring switch boxes met precise standards, as manual
                inspections often failed to catch sequence or marking errors.
              </p>
              <p>
              <strong style={contentStyleStrong}>Solution Delivered:</strong> We implemented a Video
                Analytics Solution (VAS) integrated with high-resolution CCTV
                cameras across the production line. VAS monitors switch box
                sequences in real-time, verifying symbols against predefined
                standards like High, Medium, and Low. Instant alerts flag any
                errors, enabling immediate corrections and significantly
                reducing error rates. This automated solution has minimized
                reliance on manual inspections, enhanced operational efficiency,
                and ensured consistent product quality and compliance with
                rigorous standards.
              </p>
            </div>
          </div>
        </div>

        {/* Third Box - Left */}
        <div style={{ ...boxWrapperStyle, justifyContent: "flex-start" }}>
          <div style={boxStyle}>
            <div style={headingStyle}>Machinery Performance Monitoring</div>
            <div style={contentStyle}>
              <p>
              <strong style={contentStyleStrong}>Challenge:</strong>A leading concreting equipment
                manufacturer sought a solution to monitor machinery performance,
                optimize productivity, streamline fleet operations, analyze
                critical data, and enhance after-sales service management.
              </p>
              <p>
              <strong style={contentStyleStrong}>Solution Delivered:</strong>We implemented Sixth Chakra,
                our proprietary solution, seamlessly integrating it with their
                concrete machinery. This system delivers real-time insights into
                equipment health, performance, and productivity. It also
                features smart fleet management, advanced data analytics, and
                efficient after-sales service workflows.
              </p>
            </div>
          </div>
        </div>

        {/* Fourth Box - Right */}
        <div style={{ ...boxWrapperStyle, justifyContent: "flex-end" }}>
          <div style={boxStyle}>
            <div style={headingStyle}>Perimeter Intrusion Detection</div>
            <div style={contentStyle}>
              <p>
                <strong style={contentStyleStrong}>Challenge:</strong> A large industrial facility faced
                significant security challenges in effectively monitoring its
                extensive perimeter. Traditional measures like security guards
                and fixed cameras provided limited coverage, often resulting in
                delayed intrusion detection and increased vulnerability to
                breaches.
              </p>
              <p>
                <strong style={contentStyleStrong}>Solution Delivered:</strong> We introduced a robust VAS
                Perimeter Detection System powered by advanced video analytics.
                This solution continuously monitors the perimeter, instantly
                identifying potential intrusions and alerting security teams in
                real time. By enabling rapid response, the system enhances
                security coverage and mitigates risks effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles
const verticalLineStyle = {
  position: "absolute",
  top: "-2%",
  bottom: 0,
  left: "50%",
  borderLeft: "2px dotted white",
  zIndex: 0,
};

const boxWrapperStyle = {
  display: "flex",
  margin: "20px 0",
  position: "relative",
};

const boxStyle = {
  backgroundColor: "#2A2A2A",
  borderRadius: "8px",
  width: "70%",
  zIndex: 1,
};

const headingStyle = {
  backgroundColor: "rgba(64, 123, 255, 0.99)",
  color: "white",
  padding: "10px",
  fontSize: "1.2rem",
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
};

const contentStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.49)",
  color: "rgba(255, 255, 255, 0.49)",
  padding: "10px 20px",
  fontSize: "1rem",
  borderBottomLeftRadius: "8px",
  borderBottomRightRadius: "8px",
};

const contentStyleStrong = {
  color: "black",
};

export default VerticalSteps;
