import { useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Filme(props) {
    return(
        <Link to={`/sessoes/${props.link}`}>
            <li>
                <img src={props.image} alt=""/>  
            </li>
        </Link>
    );
}

export default function MainScreen() {
    //LOGIC
    const [images, setImages] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promise.then((response) => {setImages(response.data)});

    }, []);
    //UI
    return(
        <>
            <Top>
                <h1>CINEFLEX</h1>
            </Top>
            <SelectMovie>
                <h3>Selecione o Filme</h3>
            </SelectMovie>
            <Conteudo>
                {images.map((image, index) => <Filme key={index} image={image.posterURL} link={image.id}/>)}
            </Conteudo>    
        </>
    );
}


//STYLE
const Top = styled.header `
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
    }
`;

const SelectMovie = styled.div `
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

const Conteudo = styled.ul `
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