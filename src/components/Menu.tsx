import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import { LogoInterno, BuscaInterna, BtnBusca, Menu, Icon } from '../styles/stylesComponents'
import { faHome, faPlusCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const MenuComp = () => {
  const [hero, setHero] = useState<any>()
    
  function Submit(){
      window.location.href = `/heroes?name=${hero}`
  }

 
    return (
     
        <Menu>
          <a href="/"><LogoInterno src='images/logo_marvel.png' /></a>
          <BuscaInterna>
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
          </BuscaInterna>
        </Menu>

    );
};



export default MenuComp;