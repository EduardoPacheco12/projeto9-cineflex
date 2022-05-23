import axios from 'axios';
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Top, SelectMovie, Content} from './MainStyle.js';

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
            <Content>
                {images.map((image, index) => <Filme key={index} image={image.posterURL} link={image.id}/>)}
            </Content>    
        </>
    );
}