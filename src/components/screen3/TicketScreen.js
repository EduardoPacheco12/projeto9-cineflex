import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
import {Top, SelectSeat, Content, Seat, Examples, Forms, Bottom} from './TicketStyle.js';

function Options(props) {
    return(
        <div>
            <div className={props.name}></div>
            <p>{props.text}</p>
        </div>
    );
}

export default function TicketScreen () {
    //LOGIC
    const {idSessao} = useParams();
    const [seats, setSeats] = useState([]);
    const [movie, setMovie] = useState({});
    const [hour, setHour] = useState({});
    const [weekday, setWeekday] = useState({});
    const [name, setName] = useState("");
    const [cpf, setCPF] = useState("");

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        promise.then((response) => {setSeats(response.data.seats); setMovie(response.data.movie); setHour(response.data); setWeekday(response.data.day)})
    }, []);

    function Finalizar(event) {
        event.preventDefault();
        console.log(name);
        console.log(cpf);
    }
    //UI
    return (
        <>
            <Top>
                <h1>CINEFLEX</h1>
            </Top>
            <SelectSeat>
                <h3>Selecione o(s) assento(s)</h3>
            </SelectSeat>
            <Content>
                <ul>
                    {seats.map((seat, index) => 
                        <Seat  key={index} available={seat.isAvailable}>
                            <p>{seat.name}</p>
                        </Seat>
                    )}
                </ul>
                <Examples>
                    <Options name="selected" text="Selecionado"/>
                    <Options name="available" text="Disponível"/>
                    <Options name="unavailable" text="Indisponível"/>
                </Examples>
                <Forms onSubmit={Finalizar}>
                    <div>
                        <label htmlFor="formName">Nome do comprador:</label>
                        <input id="formName" type="text" placeholder="Digite seu nome..." onChange={(e) => setName(e.target.value)} value={name}/>
                    </div>
                    <div>
                        <label htmlFor="formCPF">CPF do comprador:</label>
                        <input id="formCPF" type="text" placeholder="Digite seu CPF..." onChange={(e) => setCPF(e.target.value)} value={cpf}/>
                    </div>
                    <button type="submit">Reservar assento(s)</button>
                </Forms>
            </Content>
            <Bottom>
                <div>
                    <img src={movie.posterURL} alt="Imagem do filme"/>
                </div>
                <span>
                    <p>{movie.title}</p>
                    <p>{weekday.weekday} - {hour.name}</p>
                </span>
            </Bottom>
        </>
    );
}