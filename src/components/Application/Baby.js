import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import { useSelector } from "react-redux";




export default function Baby(){

    const apiKey = useSelector(state => state.data.apiKey)
    const [name, setName] = useState('');
    const [soulmateName, setSoulmateName] = useState('');
    const [favoriteNumber, setFavoriteNumber] = useState(0);
    const [gender, setGender] = useState('neutral');
    const [loading, setLoading] = useState(false);
    const [generatedName, setGeneratedName] = useState('');



    const generateBabyName = (e) => {
        e.preventDefault();
        setLoading(true);
        axios
        .get(`https://api.api-ninjas.com/v1/babynames?gender=${gender}`, apiKey)
        .then(response => {
            setGeneratedName(response.data[favoriteNumber])
            setLoading(false)})
        .catch(error => {alert('Something gone wrong, please refresh the page', error)})     
    }


    return(
        <div className="baby container">
            <h1>Choose name for your baby</h1>
            <form className="baby-form" onSubmit={generateBabyName}>
                <input  className="baby-input" 
                        placeholder="Write your name"
                        onChange={(e) => {
                            setGeneratedName('')
                            setName(e.target.value)
                            }}/>
                        
                <br/>
                <input  className="baby-input" 
                        placeholder="Write your soulmate's name"
                        onChange={(e) => {
                            setGeneratedName('')
                            setSoulmateName(e.target.value)
                            }}/>
                <br/>

                <div className="baby-radio">
                    <h3>Choose your favorite number from 1 to 10</h3>
                    {[1,2,3,4,5,6,7,8,9,10].map((number) => {
                        return (
                            <div className="baby-favorite-number" key={number}>
                                <input  type="radio" 
                                        onChange = {(e) => setFavoriteNumber(+e.target.value-1)} 
                                        value={number} 
                                        name="number"/>
                                <span className="baby-radio-span">{number}</span>
                            </div>
                            )
                    })}    
                </div>
                <div className="baby-radio">
                    <h3>Choose gender of you baby name</h3>
                    <input type="radio" onChange = {(e) => setGender(e.target.value)} value='boy' name="gender"/><span className="baby-radio-span">Boy</span>
                    <input type="radio" onChange = {(e) => setGender(e.target.value)} value='girl' name="gender"/><span className="baby-radio-span">Girl</span>
                    <input type="radio" onChange = {(e) => setGender(e.target.value)} value='neutral' name="gender"/><span className="baby-radio-span">Neutral</span>
                </div>
                <button className="baby-button">Generate</button>

                {loading ? 
                
                <div>
                    <h2>Loading...</h2>
                    <img className="loading" src="https://media.tenor.com/kLXX8JkWlUIAAAAj/naenaebaby-baby.gif" alt="loading"/>
                </div>
                :
                (!generatedName ? <h2>Choose all parametr and click Generate button</h2>
                :
                <h2>{(name&&soulmateName) ? <h2>{name} and {soulmateName} your baby name is {generatedName}</h2>
                :
                <h2>Your baby name is {generatedName}</h2>
                }</h2>
                )}
                {/* <img src={urlData} alt='Baby-image'/> */}
            </form>
        </div>
    )
}