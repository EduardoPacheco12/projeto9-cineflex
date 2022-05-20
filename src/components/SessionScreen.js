import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';

function Date(props) {
    return (
        <li>
            <h4>{props.weekday} - {props.date}</h4>
            <div>
                <button>{props.hour1}</button>
                <button>{props.hour2}</button>
            </div>
        </li>
    );
}

export default function SessionScreen() {
    //LOGIC
    const {idSessao} = useParams();
    const [sessions, setSessions] = useState([]);
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idSessao}/showtimes`);
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
                <MaxContent>
                    <Content>
                        {sessions.map((session, index) => <Date key={index} weekday={session.weekday} date={session.date} hour1={session.showtimes[0].name} hour2={session.showtimes[1].name}/>)}
                    </Content>
                </MaxContent>
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

//STYLE
const Top = styled.header `
    @media (max-width: 1023px) {
        height: 68px;
        width: 100%;
        background-color:#C3CFD9;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
        color: #E8833A;
    }
`;

const SelectDate = styled.div `
    @media (max-width: 1023px) {
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #293845;
    }
`;

const MaxContent = styled.div `
    @media (max-width: 1023px) {
        display:flex;
        align-items: center;
        justify-content:center;
    }
    
`;

const Content = styled.ul `
    @media (max-width: 1023px) {
        width: 350px;
        margin-left: 25px;
        margin-right: 25px;
        li {
            margin-bottom: 25px;
        }

        h4 {
            font-family: 'Roboto';
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            margin-bottom: 25px;
            letter-spacing: 0.02em;
            color: #293845;
        }

        button {
            background-color: #E8833A;
            border-color: #E8833A;
            border-radius: 3px;
            width: 84px;
            height: 44px;
            margin-right: 8px;
            font-family: 'Roboto';
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
            letter-spacing: 0.02em;
            color: #FFFFFF;
        }
    }
`;

const Bottom = styled.footer `
    height: 118px;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;
    display: flex;
    align-items: center;

    div {
        width: 64px;
        height: 88px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        margin-left: 10px;
        display:flex;
        justify-content:center;
        align-items: center;
    }

    img {
        width: 48px;
        height: 72px;
    }

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        color: #293845;
        margin-left: 14px;
    }

`;