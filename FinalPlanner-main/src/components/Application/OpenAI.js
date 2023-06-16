import { Configuration, OpenAIApi } from "openai";
import React, { useState } from "react";


import "./index.css";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
});

const openai = new OpenAIApi(configuration);

function OpenAI() {
  const [input, setInput] = useState("");
  const [urlData, setUrlData] = useState();
  const [loading, setLoading] = useState();

  const generateImage = async (e) => {
    e.preventDefault(e);
    setLoading(true);
    const imageParameters = {
      prompt: input,
      n: 1,
      size: "512x512",
    };

    const response = await openai.createImage(imageParameters);
    const urlData = response.data.data[0].url;
    setUrlData(urlData);
    setLoading(false);
  };

  return (
    <div className="openai container">
      <h1 className="openai-h1">Generate Image with OpenAI</h1>
      <form className="openai-form" onSubmit={generateImage}>
        <input
          className="openai-input"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
        <br />
        <button className="openai-button">Generate</button>
        <br />
        {loading ? (
          <p className="openai-p"><img className="loading" src="https://thumbs.gfycat.com/HarmlessGlisteningCarp-max-1mb.gif" alt="robot"/></p>
        ) : (
          urlData && <img loading="lazy" className="openai-image" src={urlData} alt="image" />
        )}
      </form>
    </div>
  );
}

export default OpenAI;
