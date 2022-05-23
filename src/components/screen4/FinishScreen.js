import styled from 'styled-components';
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Top, OrderConfirmation, Content} from './FinishStyle.js';

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

const Click = styled(Link) `
    text-decoration: none;
`;