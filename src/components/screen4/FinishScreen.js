import axios from 'axios';
import styled from 'styled-components';
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function FinishScreen() {
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
                    <p>Enola Holmes</p>
                    <p>24/06/2021 15:00</p>
                </div>
                    <h4>Ingressos</h4>
                    <p>Assento 15</p>
                    <p>Assento 16</p>
                <div>
                    <h4>Comprador</h4>
                    <p>Nome: João da Silva Sauro</p>
                    <p>CPF: 123.456.789-10</p>
                </div>
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

const Content = styled.div `
    @media (max-width: 1023px) {
        background-color: red;
        max-width: 375px;
        min-width: 280px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 5px;
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
            margin-bottom: 14px;
        }
    }
`;