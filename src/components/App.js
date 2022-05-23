import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import MainScreen from './screen1/MainScreen';
import SessionScreen from './screen2/SessionScreen';
import TicketScreen from './screen3/TicketScreen';
import '../assets/css/reset.css';
import '../assets/css/style.css';
import FinishScreen from './screen4/FinishScreen';
import { useState } from 'react';

export default function App() {
    //UI
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainScreen />} />
                <Route path="/sessoes/:idFilme" element={<SessionScreen />} />
                <Route path="/assentos/:idSessao" element={<TicketScreen />}/>
                <Route path="/sucesso" element={<FinishScreen/>} />
            </Routes>
        </BrowserRouter>
    );
}