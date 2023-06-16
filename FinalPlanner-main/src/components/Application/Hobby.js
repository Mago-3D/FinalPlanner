import React, {  useState } from "react";
import "./index.css";
import axios from "axios";
import { useSelector } from "react-redux";


export default function Hobby(){
    const apiKey = useSelector(state => state.data.apiKey);
    const [hobby, setHobby] = useState();
    const [category, setCategory] = useState('general')
    const [loading, setLoading] = useState(false);

    const generateHobby = (e) => {
        e.preventDefault();
        setLoading(true);
        axios
        .get(`https://api.api-ninjas.com/v1/hobbies?category=${category}`, apiKey)
        .then(response => {
            console.log(response.data.hobby)
            setHobby(response.data)
            setLoading(false)
        })}





    return(
        <div className="container hobby">
            <label>Choose category</label>
            <br/>
            <input type="radio" value='general' name="category" onChange={(e)=>{setCategory(e.target.value)}}/>General
            <br/>
            <input type="radio" value='sports_and_outdoors' name="category" onChange={(e)=>{setCategory(e.target.value)}}/>Sports and Outdoors
            <br/>
            <input type="radio" value='education' name="category" onChange={(e)=>{setCategory(e.target.value)}}/>Education
            <br/>
            <input type="radio" value='collection' name="category" onChange={(e)=>{setCategory(e.target.value)}}/>Collection
            <br/>
            <input type="radio" value='competition' name="category" onChange={(e)=>{setCategory(e.target.value)}}/>Competition
            <br/>
            <input type="radio" value='observation' name="category" onChange={(e)=>{setCategory(e.target.value)}}/>Observation
            <br/>

            <br/>
            <button className="hobby-button button-89" onClick={generateHobby}>Generate Hobby</button>

            {loading ? <h1>Loading...</h1> : <div><h1>{hobby?.hobby}</h1><a target="_blank" href={hobby?.link}>{hobby?.link}</a></div>}
        </div>
    )
}