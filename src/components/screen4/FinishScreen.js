import axios from 'axios';
import styled from 'styled-components';
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function FinishScreen() {
    const location = useLocation();
    return (
        <>
            <Top>
                <h1>CINEFLEX</h1>
            </Top>
            <OrderConfirmation>
                <h3>Pedido feito com sucesso!</h3>
            </OrderConfirmation>
            <Content>
                <div>
                    <h4>Filme e sessão</h4>
                    <p>{location.state.config.movie}</p>
                    <p>{location.state.config.date} {location.state.config.hour}</p>
                </div>
                <div>
                    <h4>Ingressos</h4>
                    {location.state.config.id.map((id, index) => <p key={index}>Assento {id}</p>)}
                </div>
                <div>
                    <h4>Comprador</h4>
                    <p>Nome: {location.state.config.name}</p>
                    <p>CPF: {location.state.config.cpf}</p>
                </div>
                <Click to={"/"}>
                    <button>Voltar pra home</button>
                </Click>
            </Content>
        </>
    );
}

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
        position: fixed;
        top: 0;
        left: 0;
    }
`;

const OrderConfirmation = styled.div `
    @media (max-width: 1023px) {
        margin-top: 68px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;

        h3 {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 28px;
            display: flex;
            align-items: center;
            text-align: center;
            letter-spacing: 0.04em;
            color: #247A6B;
        }
    }
`;

const Click = styled(Link) `
    text-decoration: none;
`;

const Content = styled.div `
    @media (max-width: 1023px) {
        max-width: 375px;
        min-width: 280px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 5px;
        div{
            padding-top: 20px;
        }
        h4 {
            font-family: 'Roboto';
            font-weight: 700;
            font-size: 24px;
            line-height: 28px;
            display: flex;
            align-items: center;
            letter-spacing: 0.04em;
            color: #293845;
            margin-bottom: 10px;
        }
        p {
            font-family: 'Roboto';
            font-weight: 400;
            font-size: 22px;
            line-height: 26px;
            display: flex;
            align-items: center;
            letter-spacing: 0.04em;
            color: #293845;
        }

        button {
            background-color: #E8833A;
            border: 1px solid #E8833A;
            border-radius: 3px;
            width: 224px;
            height: 42px;
            margin-top: 60px;
            margin-left: auto; 
            margin-right: auto;
            font-family: 'Roboto';
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            letter-spacing: 0.04em;
            color: #FFFFFF;
            text-decoration: none;
        }
    }
`;