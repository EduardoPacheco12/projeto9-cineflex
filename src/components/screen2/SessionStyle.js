import styled from "styled-components";

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

export const SelectDate = styled.div `
    @media (max-width: 1023px) {
        margin-top: 68px;
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

export const Content = styled.div `
    @media (max-width: 1023px) {
        display:flex;
        align-items: center;
        justify-content:center;
        margin-bottom: 140px;
        ul {
            width: 350px;
            margin-left: 25px;
            margin-right: 25px;
        }
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

export const Bottom = styled.footer `
    height: 118px;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
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