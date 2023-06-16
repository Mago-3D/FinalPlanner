import "./index.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";





export default function Bucket(){
    const [bucketList, setBucketList] = useState('');
    const apiKey = useSelector(state => state.data.apiKey);
    const [loading, setLoading] = useState(false);



    const generateBucketList = (e) => {
        e.preventDefault();
        setLoading(true);
        axios
        .get(`https://api.api-ninjas.com/v1/bucketlist`, apiKey)
        .then(response => {
            setBucketList(response.data.item)
            setLoading(false)})
        .catch(error => {alert('Something gone wrong, please refresh the page', error)})     
    }

    return(
        <div className="bucket container">  
            <button className="bucket-button" onClick={generateBucketList}>Generate Bucket List</button>
            {loading?<h2>Loading...</h2>:<h1 className="bucket-h1">{bucketList}</h1>}
        </div>
    )

}