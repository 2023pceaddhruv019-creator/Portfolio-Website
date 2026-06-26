import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>AI, ML & Data</h3>
              <h4>Intelligent Systems</h4>
              <p>
                Building autonomous AI agents, ML pipelines, and LLM-powered applications with retrieval-augmented generation and advanced NLP.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Python</div>
                <div className="what-tags">SQL</div>
                <div className="what-tags">Scikit-Learn</div>
                <div className="what-tags">XGBoost</div>
                <div className="what-tags">OpenAI API</div>
                <div className="what-tags">Gemini API</div>
                <div className="what-tags">Anthropic API</div>
                <div className="what-tags">Prompt Engineering</div>
                <div className="what-tags">Agentic AI</div>
                <div className="what-tags">RAG</div>
                <div className="what-tags">TF-IDF</div>
                <div className="what-tags">NLTK</div>
                <div className="what-tags">Pandas</div>
                <div className="what-tags">NumPy</div>
                <div className="what-tags">Feature Engineering</div>
                <div className="what-tags">Matplotlib</div>
                <div className="what-tags">Seaborn</div>
                <div className="what-tags">Plotly</div>
                <div className="what-tags">Power BI</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>AUTOMATION & TOOLS</h3>
              <h4>Development & Deployment</h4>
              <p>
                AI workflow automation, REST API integrations, and full-stack deployment with modern development tools and databases.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">n8n</div>
                <div className="what-tags">REST APIs</div>
                <div className="what-tags">Google APIs</div>
                <div className="what-tags">Webhooks</div>
                <div className="what-tags">Streamlit</div>
                <div className="what-tags">JavaScript</div>
                <div className="what-tags">React.js</div>
                <div className="what-tags">Git</div>
                <div className="what-tags">GitHub</div>
                <div className="what-tags">MySQL</div>
                <div className="what-tags">MongoDB</div>
                <div className="what-tags">PostgreSQL</div>
                <div className="what-tags">Jupyter Notebook</div>
                <div className="what-tags">Google Colab</div>
                <div className="what-tags">VS Code</div>
                <div className="what-tags">Heroku</div>
                <div className="what-tags">Microsoft Excel</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
