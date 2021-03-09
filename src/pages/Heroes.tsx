import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import { Main, LogoInterno, BuscaInterna, BtnBusca, BlockHero, Menu, Content, BgDark, Error, Icon } from '../styles/stylesComponents'
import { faHome, faPlusCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuComp from "../components/Menu";


const Heroes = () => {

 const [ search, setSearch ] = useState <any> ();

 let url: any;
 let nameHero: any;

 if (typeof window !== "undefined") {
   url = window.location?.href;
   nameHero = url.split("name=")[1];
 }

    useEffect(() => {
        axios
          .get(
            `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${nameHero}&ts=1&apikey=8b8c5c363a2551d40b8f8eb975b331ed&hash=4eea114a058dbe982b480e6df3ba92dc`,
          )
          .then((preview) => {
            setSearch(preview.data.data.results);
            
            
          });
    }, []);
    console.log(search, "teste");
    return (
      <Main>
        <MenuComp/>
        <BgDark>
          {search?.length === 0 && (
            <>
              <Icon src="images/super-heroi.png"/>
              <Error>Herói não Encontrado</Error>
            </>
          )}

          {search && (        
            <Content>
              {search.map((hero: any) => {
                return (
                   <BlockHero>
                        <p>{hero.name}</p>
                        <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}/>  
                        <a href={`/hero?id=${hero.id}`}>Saiba Mais <FontAwesomeIcon icon={faPlusCircle} /></a>
                    </BlockHero>        
                );
              })}
            </Content>
          )}
        </BgDark>
       </Main>
    );
};



export default Heroes;