import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ChatPage from './components/ChatPage';

import './App.css';
import io from 'socket.io-client';
const socket = io.connect("http://localhost:3001");

function App() {
  
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Home socket={socket} />}></Route>
        <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
      </Routes>
    </div>
  </BrowserRouter>

    // <div className="App">
    //   <input placeholder='Message' />
    //   <button onClick={sendMessage}>Send Message</button>
    // </div>
  );
}


export default App;
