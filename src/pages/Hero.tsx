import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import { Main, LogoInterno, BuscaInterna, BtnBusca, BlockHeroInterno, Menu, Content, BgDark, Error, Icon, BlockTxt, BlockApparition, ContentApparition } from '../styles/stylesComponents'
import { faHome, faPlusCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuComp from "../components/Menu";


const Hero = () => {
 const [ search, setSearch ] = useState <any> ();

 let url: any;
 let idHero: any;

 if (typeof window !== "undefined") {
   url = window.location?.href;
   idHero = url.split("id=")[1];
 }

    useEffect(() => {
        axios
          .get(
            `https://gateway.marvel.com:443/v1/public/characters/${idHero}?ts=1&apikey=8b8c5c363a2551d40b8f8eb975b331ed&hash=4eea114a058dbe982b480e6df3ba92dc`,
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
          {search && (        
            <Content>

              {search.map((hero: any) => {
                return (
                  <>
                    <BlockHeroInterno>
                          <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}/>  
                          <BlockTxt>
                            <h1>{hero.name}</h1>
                            <p>{hero.description}</p>                            
                          </BlockTxt>                    
                    </BlockHeroInterno>
                    <ContentApparition>
                      {hero.comics.returned !== 0 && (
                        <BlockApparition>
                        <p>Comics</p>
                        {hero.comics.items.map((comics:any) => {
                          return (
                              <li>{comics.name}</li>                        
                          );
                        })}
                        </BlockApparition>
                      )}
                      {hero.events.returned !== 0 && (
                        <BlockApparition>
                        <p>Eventos</p>
                        {hero.events.items.map((events:any) => {
                          return (
                              <li>{events.name}</li>                        
                          );
                        })}
                        </BlockApparition>
                      )}                    
                      {hero.series.returned !== 0 && (
                        <BlockApparition>
                        <p>Séries</p>
                        {hero.series.items.map((series:any) => {
                          return (
                              <li>{series.name}</li>                        
                          );
                        })}
                        </BlockApparition>
                      )} 
                      {hero.stories.returned !== 0 && (
                        <BlockApparition>
                        <p>Histórias</p>
                        {hero.stories.items.map((stories:any) => {
                          return (
                              <li>{stories.name}</li>                        
                          );
                        })}
                        </BlockApparition>
                      )}  
                    </ContentApparition>                          
                  </>
                );               
              })}
            </Content>
          )}
        </BgDark>
       </Main>
    );
};



export default Hero;