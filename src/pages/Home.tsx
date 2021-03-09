import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Main, Logo, Busca, BtnBusca } from '../styles/stylesComponents'
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Home = () => {
    const [hero, setHero] = useState<any>()
    
    function Submit(){
        window.location.href = `/heroes?name=${hero}`
    }

    return (
        <Main>
            <Logo src='images/logo_marvel.png' />
            <Busca>
                <input 
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        event.preventDefault()
                        setHero(event.target.value)
                    }}
                    placeholder="Digite sua Busca" 
                />
               
                <BtnBusca 
                    onClick={(event: React.MouseEvent<HTMLElement>) => {
                        event.preventDefault()
                        Submit()
                    }}
                >
                    <FontAwesomeIcon icon={faSearch} />
                </BtnBusca>
            </Busca>
        </Main>
    )
};



export default Home;