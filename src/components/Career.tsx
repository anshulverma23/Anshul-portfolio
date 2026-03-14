import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>Midaslogix Infortech</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              • Assisted in developing responsive web pages using HTML, CSS, and JavaScript. 
              <br />
              • Contributed to frontend UI improvements and feature implementation.
              <br />
              • Worked on enhancing user experience and cross-device compatibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
