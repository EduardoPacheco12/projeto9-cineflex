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

export const SelectSeat = styled.div `
    @media (max-width: 1023px) {
        height: 100px;
        margin-top: 68px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
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
        display: flex;
        align-items: center;
        justify-content:center;
        flex-direction:column;
        margin-bottom: 150px;
        ul {
            padding-left: 16px;
            padding-right: 16px;
            min-width: 280px;
            max-width: 375px;
            display: flex;
            flex-wrap: wrap;
            box-sizing: border-box;
        }
    }
`;

export const Seat = styled.li `
    @media (max-width: 1023px) {
        width: 26px;
        height: 26px;
        background-color: ${props => props.available ? "#C3CFD9" : "#FBE192"};
        border: 1px solid ${props => props.available ? "#808F9D" : "#F7C52B"};
        border-radius: 12px;
        margin-left: 3px;
        margin-right: 3px;
        margin-bottom: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        p {
            font-family: 'Roboto';
            font-weight: 400;
            font-size: 11px;
            line-height: 13px;
            letter-spacing: 0.04em;
            color: #000000;
        }
    }
`;

export const Examples = styled.div `
    min-width: 280px;
    max-width: 375px;
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    text-align: center;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .selected {
        width: 26px;
        height: 26px;
        border-radius: 18px;
        background-color: #8DD7CF;
        border: 1px solid #1AAE9E;
        margin-bottom: 5px;
        
    }
    .available {
        width: 26px;
        height: 26px;
        border-radius: 18px;
        background-color: #C3CFD9;
        border: 1px solid #7B8B99;
        margin-bottom: 5px;
    }

    .unavailable {
        width: 26px;
        height: 26px;
        border-radius: 18px;
        background-color: #FBE192;
        border: 1px solid #F7C52B;
        margin-bottom: 5px;
    }

    p {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        display: flex;
        align-items: center;
        letter-spacing: -0.013em;
        color: #4E5A65;

    }
`;

export const Forms = styled.form `
    min-width: 280px;
    max-width: 375px;
    margin-top: 40px;
    margin-bottom: 30px;
    div {
        padding-top: 8px;
        display:flex;
        flex-direction:column;
    }

    label {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 20px;
        line-height: 21px;
        display: flex;
        align-items: center;
        color: #293845;
    }

    input {
        min-width: 280px;
        max-width: 326px;
        height: 50px;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        font-family: 'Roboto';
        font-size: 16px;
        line-height: 21px;
        color: #293845;
        ::-webkit-input-placeholder {
            font-family: 'Roboto';
            font-style: italic;
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
            color: #AFAFAF;
            padding-left: 10px;
        }
    }

    button{
        width: 224px;
        height: 42px;
        margin-top: 42px;
        margin-left: auto;
        margin-right: auto;
        background-color: #E8833A;
        border: 1px solid #E8833A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align:center;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.04em;
        color: #FFFFFF;

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