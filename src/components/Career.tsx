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
                <h4>B.Tech - AI & Data Science</h4>
                <h5>Poornima College of Engineering, Jaipur</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology in Artificial Intelligence & Data Science. Focused on machine learning, deep learning, and AI system design. Expected graduation: May 2027.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI & Machine Learning Intern</h4>
                <h5>AssignInc Solutions Pvt. Ltd.</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built end-to-end ML pipelines, engineered preprocessing workflows, benchmarked models using Accuracy, Precision, Recall, F1-Score & ROC-AUC. Recognized by the CEO for independent problem-solving and engineering excellence.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Engineer & Agent Builder</h4>
                <h5>Freelance & Personal Projects</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building autonomous AI systems, agentic workflows with LLM APIs, RAG pipelines, and full-stack AI applications. Actively developing intelligent products that solve real-world business problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
