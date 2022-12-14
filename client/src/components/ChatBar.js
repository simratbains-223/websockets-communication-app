import React, {useState} from 'react'
import {NavLink, Link} from 'react-router-dom'



const ChatBar = () => {

    const [isActive, setIsActive] = useState({
        channel1Active: false,
        channel2Active: false, 
        channel3Active: false,});

    const handleClick = (value) => {
        if (value === "Channel 1") {    
          setIsActive({channel1Active: true, channel2Active: false, channel3Active: false})
        } else if (value === "Channel 2") {
          setIsActive({channel1Active: false, channel2Active: true, channel3Active: false})
        } else {
          setIsActive({channel1Active: false, channel2Active: false, channel3Active: true})
          
        }
      };




      <div className="chat__sidebar">
      <h2>Open Chat</h2>

      <div>
       <h4 className="chat__header">Channels</h4>
         <div className="chat__users">
        
            
                
                <button className={isActive.channel1Active ? "active" : ""} onClick={()=>handleClick("Channel 1")}>
                    <Link to=''>Channel 1</Link>
                </button>
                <button className={isActive.channel2Active  ? "active" : ""} onClick={()=>handleClick("Channel 2")}>
                    <Link to=''>Channel 2</Link>
                </button>
                <button className={isActive.channel3Active ? "active" : ""} onClick={()=>handleClick("Channel 3")}>
                    <Link to="">Channel 3</Link>
                </button>

      
            </div>
          </div>
        </div>
    )
}

export default ChatBar;