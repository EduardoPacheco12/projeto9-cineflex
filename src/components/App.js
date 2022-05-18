import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import MainScreen from "./screen1/MainScreen";
import "../assets/css/reset.css";
import "../assets/css/style.css";

export default function App() {
    //UI
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainScreen />} />
            </Routes>
        </BrowserRouter>
    );
}