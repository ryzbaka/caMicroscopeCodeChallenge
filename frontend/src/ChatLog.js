import React, {Component} from "react";
import axios from "axios"


class ChatLog extends Component{
    constructor(props){
        super(props);
        this.state = {
            messages:[],
            socket:props.socket
        }
    }
    componentDidMount(){
        axios.get("/demoMessages").then(({data})=>{
            this.setState({messages:data.messages})
        });
        this.state.socket.on('new-message',data=>{
            const oldLog = this.state.messages;
            oldLog.push(data);
            this.setState({messages:oldLog});
            const container = document.querySelector('.chat-log');
            container.scrollTop = container.scrollHeight;
        })
    }
    render(){
        return (
            <div className = "chat-log">
                {this.state.messages.map((message)=>
                <p 
                style={
                        {
                            border:'1px solid black',
                            height:'20%',
                            marginTop:"0px",
                            marginBottom:"1px"
                        }
                    }
                >
                    {message}
                </p>)}
            </div>
        )
    }   
}

export default ChatLog; 