import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>Agentic AI Orchestration System</h4>
                  <p>AI & Automation</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, n8n, LLM APIs, Streamlit, Google APIs</p>
            </div>
            <WorkImage image="/images/agentic-ai-system.webp" alt="Agentic AI Orchestration System" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>Customer Churn Prediction</h4>
                  <p>Machine Learning</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, Scikit-Learn, XGBoost, Pandas, Streamlit</p>
            </div>
            <WorkImage image="/images/Churn-Prediction-Software.webp" alt="Customer Churn Prediction System" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>Movie Recommendation Engine</h4>
                  <p>NLP & ML</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, TF-IDF, NLTK, Cosine Similarity, Streamlit</p>
            </div>
            <WorkImage image="/images/agentic-ai-system.webp" alt="Movie Recommendation Engine" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>04</h3>
                <div>
                  <h4>Retail Customer Analytics</h4>
                  <p>Data Analytics</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, Pandas, Matplotlib, Seaborn</p>
            </div>
            <WorkImage image="/images/data-monitoring.webp" alt="Retail Customer Behavior Analytics" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>05</h3>
                <div>
                  <h4>Portfolio Website</h4>
                  <p>Frontend Development</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>React.js, GSAP, Three.js, CSS</p>
            </div>
            <WorkImage image="/images/portfolio.png" alt="Portfolio Website" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Work;
