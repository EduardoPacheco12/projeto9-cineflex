import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
import {Top, SelectSeat, Content, Seat, Examples, Forms, Bottom} from './TicketStyle.js';
import { useNavigate } from "react-router-dom";

function Options(props) {
    return(
        <div>
            <div className={props.name}></div>
            <p>{props.text}</p>
        </div>
    );
}

function Seats(props) {
    //LOGIC
    const [selecionado, setSelecionado] = useState(false);
    function pushArray() {
        if (props.available === true) {
            const newChair = [...props.chair];
            const newIDRoom = [...props.idRoom];
            if(selecionado === false) {
                newChair.push(props.number)
                newIDRoom.push(props.id)
                props.setChair(newChair);
                props.setIDRoom(newIDRoom);
                setSelecionado(!selecionado)
            } else {
                props.setChair((num) => num.filter((selecionado) => selecionado !== props.number))
                props.setIDRoom((num) => num.filter((selecionado) => selecionado !== props.id))
                setSelecionado(!selecionado);
            }
        } else {
            alert("Esse assento não está disponível");
        }
        
    }
    //UI
    return(
        <Seat available={props.available} onClick={pushArray} selecionado={selecionado}>
            <p>{props.number}</p>
        </Seat>
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
    const [chair, setChair] = useState([]);
    const [idRoom, setIDRoom] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        promise.then((response) => {setSeats(response.data.seats); setMovie(response.data.movie); setHour(response.data); setWeekday(response.data.day)})
    }, []);

    function Finalizar(event) {
        event.preventDefault();
        const post = {
            ids: idRoom,
            name: name,
            cpf: cpf
        }
        const config = {
            id: chair,
            name: name,
            cpf: cpf,
            movie: movie.title,
            date: weekday.date,
            hour: hour.name
        }

        axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", post);
        navigate("/sucesso", {state:{config}}); 
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
                    {seats.map((seat, index) => <Seats  key={index} number={seat.name} id={seat.id} available={seat.isAvailable} setChair={setChair} chair={chair} setIDRoom={setIDRoom} idRoom={idRoom}/>
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
                        <input id="formName" type="text" placeholder="Digite seu nome..." onChange={(e) => setName(e.target.value)} value={name} required/>
                    </div>
                    <div>
                        <label htmlFor="formCPF">CPF do comprador:</label>
                        <input id="formCPF" type="text" pattern='[0-9]{3}[\.][0-9]{3}[\.][0-9]{3}[-][0-9]{2}' placeholder="Digite seu CPF..." onChange={(e) => setCPF(e.target.value)} value={cpf} required/>
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