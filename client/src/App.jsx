import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Home from "../src/pages/Home";
import Register from "../src/pages/Register";
import Login from "../src/pages/Login";
import axios from "axios";
import {Toaster} from 'react-hot-toast';
import { UserContextProvider } from "../context/userContext";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true  

function App() {
  return (
    <UserContextProvider>
      <Navbar />
      <Toaster position="bottom-right" toastOptions={{duration:2000}}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
