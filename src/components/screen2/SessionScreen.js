import axios from 'axios';
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {Top, SelectDate, Content, Bottom } from './SessionStyle.js';

function Date(props) {
    return (
        <li>
            <h4>{props.weekday} - {props.date}</h4>
            <div>
                <Link to={`/assentos/${props.link1}`}>
                    <button>{props.hour1}</button>
                </Link>
                <Link to={`/assentos/${props.link2}`}>
                    <button>{props.hour2}</button>
                </Link>
            </div>
        </li>
    );
}

export default function SessionScreen() {
    //LOGIC
    const {idFilme} = useParams();
    const [sessions, setSessions] = useState([]);
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        promise.then((response) => {setSessions(response.data.days); setMovie(response.data)});
    }, []);

    //UI
    if(sessions[0]) {
        return(
            <>
                <Top>
                    <h1>CINEFLEX</h1>
                </Top>
                <SelectDate>
                    <h3>Selecione o horário</h3>
                </SelectDate>
                <Content>
                    <ul>
                        {sessions.map((session, index) => <Date key={index} weekday={session.weekday} date={session.date} hour1={session.showtimes[0].name} hour2={session.showtimes[1].name} link1={session.showtimes[0].id} link2={session.showtimes[1].id}/>)}
                    </ul>
                </Content>
                <Bottom>
                    <div>
                        <img src={movie.posterURL} alt="" />
                    </div>
                    <p>{movie.title}</p>
                </Bottom>
            </>
        );
    } else {
        return (
            <Top>
                <h1>Aguarde...</h1>
            </Top>
        );
    }
}