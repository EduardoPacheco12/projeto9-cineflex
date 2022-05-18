import { useState, useEffect} from 'react';
import "../screen1/mainscreen.css";
import axios from 'axios';

function Filme(props) {
    return(
        <li>
            <img src={props.image} />  
        </li>
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
            <header>
                <h1>CINEFLEX</h1>
            </header>
            <div className="selectMovie">
                <h3>Selecione o Filme</h3>
            </div>
            <ul className="conteudo">
                {images.map((image) => <Filme image={image.posterURL}/>)}
            </ul>    
        </>
    );
}