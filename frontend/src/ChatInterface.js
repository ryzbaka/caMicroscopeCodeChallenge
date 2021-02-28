import React, {Component, useEffect, useState} from "react";
import axios from "axios"

const ChatInterface = ({socket,username})=>{
    const [message, setMessage] = useState("");
    // let username = "robot";
    return (
            <div className = "chat-interface">
                <input 
                    style = {{width:"70%",height:"100%"}}
                    onChange={(event)=>setMessage(event.target.value)}
                ></input>
                <button id="send-button" onClick={()=>{
                    socket.emit('client-sent-message',`${username}: ${message}`);
                }}>Send</button>
            </div>
          )
}

export default ChatInterface; 