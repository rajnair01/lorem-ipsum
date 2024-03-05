import { Feature } from "../../components";
import "./whatgpt3.css";

function WhatGPT3() {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whtgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT3?"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, explicabo? Expedita eligendi et atque soluta iusto id facilis quod tempore!"
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, explicabo? Expedita eligendi et atque soluta iusto id"
        />
        <Feature
          title="Knowledgebase"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, explicabo? Expedita eligendi et atque soluta iusto id"
        />
        <Feature
          title="Education"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, explicabo? Expedita eligendi et atque soluta iusto id"
        />
      </div>
    </div>
  );
}
export default WhatGPT3;
