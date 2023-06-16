import React, { useEffect, useState } from "react";
import "./marvel.css";
import axios from "axios";
// import { useSelector } from "react-redux";


export default function StarWars(){
    const [hero, setHero] = useState();
    const [loading, setLoading] = useState(false);


    const  getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
      }


    const generateHero= (e) => {
        e.preventDefault();
        const random = getRandomInt(88)
        setLoading(true);
        axios
        .get(`https://swapi.py4e.com/api/people/${random}`)
        .then(response => {
            setHero(response?.data);
            console.log(response?.data)

            setLoading(false)
        })
        .catch(error => {alert('Something gone wrong, please refresh the page', error)}
        )}





    return(
        <div className="container starWars">




            <button className="starWars-button glow-on-hover" onClick={generateHero}>Generate StarWars Hero</button>


            {loading ? <div><p>Loading...</p> <img className="loading" alt="starwars" src="https://1.bp.blogspot.com/-gBxVw0sI20s/XlcV6sZQJwI/AAAAAAAM29k/i7tQJH03L88dt7Q_w7sh4c7ntZV2IvhUwCLcBGAsYHQ/s1600/AS0006427_03.gif"/></div> 
            : ( hero?

            <div>
                <h1>{hero.name}</h1>
                <p><b>Gender: </b> {hero.gender}</p>
                <p><b>Height: </b> {hero.height}</p>
                <p><b>Birth year: </b> {hero.birth_year}</p>

                <p><b>Mass: </b> {hero.mass}</p>
                <p><b>Eye color: </b> {hero.eye_color}</p>
                <p><b>Hair color: </b> {hero.hair_color}</p>
                <p><b>Skin color: </b> {hero.skin_color}</p>
                <p><b>Link: </b> <a target="_blank" href={`https://www.google.com/search?q=star+wars+${hero.name}`}>click to know more</a> </p>


            </div>
            :
            null

            )}
        </div>
    
    )
}