import React from "react";
import { useState } from "react";


export default function Forum(){
    const [name, setName] = useState('Guest');
    const [text, setText] = useState('')
    const [comments, setComments] = useState(
        [
            {
                name: 'Gavr',
                time: '12.3.2023 - 0:58',
                text: 'This is amazing'
            },
            {
                name: 'Coraline',
                time: '13.3.2023 - 10:11',
                text: 'So cool, I like that'
            }        
        ]
    );


    const getTime = () => {
        let now = new Date();
        return ` ${now.getDate()}.${now.getMonth()}.${now.getFullYear()} - ${now.getHours()}:${now.getMinutes()} `;
      }


    const saveComment = () => {
        const time = getTime();

        const saved = {name, time, text }

        setComments(
            [...comments, saved]
        )
    }



    return(
        <div>
            <h1>COMMENTS</h1>
            <label>Your name:  </label>
          <br/>
          <input className="forum-name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
          <br/>
          <label>Message </label>
          <br/>
          <textarea cols="60" rows="5" placeholder="Write your comment..." onChange={(e)=>{setText(e.target.value)}} />
          <br/>
          <button onClick={saveComment} className="button-28">Send comment</button>

        {
          comments ?
            comments.map((item) => {
                return (
                <div className="comment-box">
                    <p>{item.time}</p>
                    <p><b>{item.name}</b></p>
                    <p>{item.text}</p>
                </div>)})
            :
            null
        }

        <p className="copyright">© Copyright 2013, Imagination LLC. All rights reserved </p>
          
        
        </div>
    )
}