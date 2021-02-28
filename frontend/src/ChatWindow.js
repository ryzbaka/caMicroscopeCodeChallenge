import {React,Component} from "react";
import axios from "axios";
import {Link, navigate} from "@reach/router";
import {io} from "socket.io-client";
import ChatLog from "./ChatLog";
import ChatInterface from "./ChatInterface";
import {uniqueNamesGenerator, Config, adjectives, colors, animals} from "unique-names-generator";

const customConfig = {
    dictionaries:[adjectives, colors],
    separator:'-',
    length:2
}

const randomName = uniqueNamesGenerator({
    dictionaries:[adjectives, colors, animals],
    separator:'-'
})

const socket = io();
socket.on('connect',()=>{
    console.log('connected to server through websocket.');
});
class ChatWindow extends Component{
    constructor(props){
        super(props);
        this.state= {
            socket :socket
        }
    }
    componentDidMount(){
    }
    render(){
        return (
            <div className = "chat-window">
                <p>Chat windows [<span style={{fontWeight:"bold"}}>{randomName}</span>]</p>
                <ChatLog socket={socket} />
                <ChatInterface socket={socket} username={randomName} />  
            </div>
        )
    }
}

export default ChatWindow;
