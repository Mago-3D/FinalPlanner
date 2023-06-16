import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import { useSelector } from "react-redux";


export default function Facts(){
    const apiKey = useSelector(state => state.data.apiKey);
    const [fact, setFact] = useState();
    const [loading, setLoading] = useState(false);

    const generateFact= (e) => {
        e.preventDefault();
        setLoading(true);
        axios
        .get(`https://api.api-ninjas.com/v1/facts?limit=1`, apiKey)
        .then(response => {
            setFact(response.data[0].fact)
            setLoading(false)
        })}





    return(
        <div className="container facts">
            <button className="facts-button" onClick={generateFact}>Generate Facts</button>

            {loading ? <h1>Loading...</h1> : <h1>{fact}</h1>}
        </div>
    )
}