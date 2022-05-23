import styled from 'styled-components';

export const Top = styled.header `
    @media (max-width: 1023px) {
        height: 68px;
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
        right: 0;
    }
`;

export const SelectMovie = styled.div `
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

export const Content = styled.ul `
    @media (max-width: 1023px) {
        margin-left: 25px;
        margin-right: 25px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

        li {
            width: 145px;
            height: 210px;
            background: #FFFFFF;
            box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
            border-radius: 3px;
            margin-bottom: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        img {
            width: 130px;
            height: 195px;
        }
    }
`;