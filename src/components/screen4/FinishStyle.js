import styled from 'styled-components';

export const Top = styled.header `
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

export const OrderConfirmation = styled.div `
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

export const Content = styled.div `
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