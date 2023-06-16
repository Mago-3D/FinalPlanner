import React from "react";
import './pages.css'

export default function About() {
    return (
        <div className="about">
            <h1 className="about-h1">About Us</h1>
            <p>OpenAI conducts AI research with the declared intention of promoting and developing a friendly AI. OpenAI systems run on an Azure-based supercomputing platform from Microsoft.</p>
            <p>In our project we are using the OpenAI product "DALL·E 2" to generate images</p>
            <p>DALL·E 2 is an AI system that can create realistic images and art from a description in natural language.</p>
            <p>DALL·E 2 can create original, realistic images and art from a text description. It can combine concepts, attributes, and styles.</p>

            <p>We are a team of friends based on the idea set to work.

The idea was to create a web application that would help people get random answers to their questions.
This one is like tossing a coin "Heads and Tails", but here the probability is not 50/50.</p>
        </div>
    )
}