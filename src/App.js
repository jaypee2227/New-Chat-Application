import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./components/Register"
import Signin from "./components/Signin"
import ChatPage from "./components/ChatPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/chats" element={<ChatPage/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
