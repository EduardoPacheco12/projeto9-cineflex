import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import MainScreen from "./MainScreen";
import "../assets/css/reset.css";
import "../assets/css/style.css";
import SessionScreen from "./SessionScreen";

export default function App() {
    //UI
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainScreen />} />
                <Route path="/sessoes/:idSessao" element={<SessionScreen />} />
            </Routes>
        </BrowserRouter>
    );
}