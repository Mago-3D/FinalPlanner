import React, { useEffect, useState } from "react";

import "./index.css";
import axios from "axios";
import { useSelector } from "react-redux";


export default function Celebrity(){

    const apiKey = useSelector(state => state.data.apiKey)
    const [link, setLink] = useState('');
    const [height, setHeight] = useState(0);
    const [loading, setLoading] = useState(false);
    const [generatedCelebrity, setGeneratedCelebrity] = useState(false);

    const generateCelebrity = (e) => {
        e.preventDefault();
        setLoading(true);
        axios
        .get(`https://api.api-ninjas.com/v1/celebrity?min_height=${+height-0.05}&max_height=${+height+0.05}`, apiKey)
        .then(response => {
            const data = response.data
            const random = getRandomInt(+(data.length)-1)
            setGeneratedCelebrity(data[random])
            
            setLink(() => {
                if(data[random]?.name){
                let x = data[random].name.split( ' ');
                x = x.join('_');
                x = 'https://www.google.com/search?q='+ x;
                return x}
            })
            
            
            setLoading(false)})
        .catch(error => {alert('Something gone wrong, please refresh the page', error)})     
    }

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
      }


    return(
        <div className="container celebrity">
           {generatedCelebrity?null: <form onSubmit={generateCelebrity}>
                <h1 className="celebrity-h1">Which celebrity are you in parallel universe?</h1>
                <label className="celebrity-label" htmlFor="celebrity">Write your height</label>
                <br/>
                <input onChange={(e)=>{setHeight(e.target.value)}}  id="celebrity" className="celebrity-input" placeholder="For example: 1.65"/>
                <br/>
                <button  className='celebrity-button'>
                    Find me
                </button>
            </form>
        }



        {loading?<h1 className="celebrity-loading-h1"><img className="loading" src="https://freight.cargo.site/t/original/i/0263e32ee6c4f0fc2f4183b7e9318f8890208f8502f5a6c7e1d2b882e3e06f26/travolta.gif" alt="loading"/></h1>:(generatedCelebrity
        ?
        (<div>
           <h1 className="celebrity-ready-h1 ">{generatedCelebrity.name}</h1>
           <p><b>Age:</b> {generatedCelebrity.age}</p>
           <p><b>Birthday:</b> {generatedCelebrity.birthday}</p>
           <p><b>Gender:</b> {generatedCelebrity.gender}</p>
           <p><b>Height:</b> {generatedCelebrity.height}</p>
           <p><b>Net worth:</b> {generatedCelebrity.net_worth}$</p>
           <p><b>Occupation:</b> </p>{ generatedCelebrity.occupation.map((item)=>{
                return <p className="celebrity-occupation">{item}</p>
           })}
           {generatedCelebrity.death?<p><b>Death:</b> {generatedCelebrity.death}</p>:null}
           <p><b>Link:</b> <a href={link} target="_blank">{link}</a></p>

           <button className="celebrity-button" onClick={() => {setGeneratedCelebrity(false)}}>Again</button>
        </div>):null)}




        </div>
    )
}