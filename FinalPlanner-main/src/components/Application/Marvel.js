import React, { useEffect, useState } from "react";
import "./marvel.css";
import axios from "axios";
import { useSelector } from "react-redux";


export default function Facts(){
    const apiKey = '5f442e5583c6b5b08881ebd01c312af7';
    const hush = '7a87640161eb5f8965c87a0608cde137';
    const [marvel, setMarvel] = useState();
    const [loading, setLoading] = useState(false);

    const  getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
      }

    const generateMarvel= (e) => {
        e.preventDefault();
        setLoading(true);
        axios
        .get(`http://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=${apiKey}&hash=${hush}`)
        .then(response => {
            const random = getRandomInt(99)
            console.log(response.data.data.results)
            setMarvel(response.data.data.results[random])
            setLoading(false)
        })}





    return(
        <div className="container marvel">

                <div class="box-2"
                onClick={generateMarvel}>
                <div class="btn btn-two">
                    <span>Generate Marvel Hero</span>
                </div>
                </div>

            {loading ? <h1><p>Loading...</p><img className="loading" src="https://media4.giphy.com/media/2UvBsxeB6nlONSJYoh/giphy.gif" alt="loading"/></h1> 
            : (marvel?
            <div>
                <h1>{marvel?.name}</h1>
                <a href={`https://www.google.com/search?q=marvel+${marvel?.name}`} target="_blank">Click for more information</a>
                <br/>
                <img className="marvel-image" src={marvel?.thumbnail.path + '.'  + marvel?.thumbnail.extension} alt="image"/>
                
            </div> : null)}
        </div>
    )
}

