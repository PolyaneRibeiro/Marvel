import styled from 'styled-components'
<script src="https://use.fontawesome.com/releases/v5.15.2/js/all.js"></script>

export const Error = styled.h1`
color: red;
text-transform: uppercase;
font-size: 40px;
text-align: center;
`;

export const Icon = styled.img`
width: 80px;
@media (max-width: 600px){
    margin-top: 230px;
}
`;

export const Main = styled.div`
background-image: url(images/bg-marvel2.jpg);
align-items: center;
display: flex;
flex-direction: column;
background-attachment: fixed;
min-height: 100vh;
`;

export const BgDark  = styled.div`
background-color: rgba(0,0,0,0.9);
min-height: 100vh;
width: 100%;
align-items: center;
display: flex;
justify-content: center;
flex-direction: column;
`;


export const Content  = styled.div`
display: flex;
min-height: 100%;
flex-wrap: wrap;
justify-content: center;
padding: 50px;
margin-top: 100px;
@media (max-width: 600px){
    padding: 0px;
    padding-top: 50px;
}

`;



export const Menu  = styled.div`
background-color: #111;
display: flex;
padding: 20px;
padding-left: 3%;
padding-right: 3%;
width: 94%;
justify-content: space-between;
align-items: center;
position: fixed;

@media (max-width: 600px){
    flex-direction: column;
}
`;

export const ContentApparition  = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
@media (max-width: 600px){
    flex-direction: column;
}
`;

export const BlockApparition = styled.div`
    color: white;
    margin: 10px;
    font-size: 15px;
    background: #222; 
    border-radius: 10px;
    padding: 10px;
    width: 22%;

    @media (max-width: 600px){
        width: auto;
    }

    p {
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        margin-top: 0px;
    }

    li {
        padding-bottom: 10px;
    }
`;

export const BlockHeroInterno = styled.div`
    color: white;
    margin: 10px;
    font-size: 16px;
    background: #222; 
    border-radius: 10px;
    display: flex;
    padding: 10px;
    width: 100%;
    
    img{
        width: 280px;
        height: 280px;
        margin: 10px;
        border-radius: 10px;
        margin-right: 25px;

        @media (max-width: 600px){
            margin-right: 10px;
        }
    }

    @media (max-width: 600px){
        flex-direction: column;
        margin-top: 20px;
        align-items: center;
    }

`;

export const BlockTxt = styled.div`
    h1{
        font-size: 42px;
        margin-top: 10px;
        text-align: center;
    }
    
`;

export const BlockHero = styled.div`
    color: white;
    margin: 25px;
    text-align: center;
    font-weight: 500;
    font-size: 16px;
    background: #222; 
    padding-top: 1px;
    display: flex;
    flex-direction: column;
    align-items: center;
    

    img{
        width: 280px;
        height: 280px;
        margin: 10px;
        border-radius: 10px;
    }

    a {    background: #666;
        color: white;
        padding-top: 5px;
        padding-bottom: 8px;
        border-radius: 5px;
        font-size: 12px;
        text-decoration: none;
        text-transform: uppercase;
        width: 100px;
        margin-top: -30px;
        margin-bottom: 10px;
        :hover{background:red;}
        
    }
`;


export const Logo = styled.img`
margin-top: 180px;
width:350px;

    @media (max-width: 600px){
        width: 250px;
    }
`;

export const LogoInterno = styled.img`
width:150px;
height: auto;
@media (max-width: 600px){
    margin-bottom: 10px;
}
`;

export const BuscaInterna = styled.form`
display: flex;
    input{
        height: 35px;
        border-radius: 10px 0px 0px 10px;
        width: 372px;
        padding-left: 10px;
        border: 2px solid red;
        background: black; 
        color: white;   
        
        ::-webkit-input-placeholder {
            
            color: rgba(255,255,255,0.3);
         }
        
        @media (max-width: 600px){
            width: 230px;;
        }

    }
`;

export const Busca = styled.form`
margin-top: 100px;
display: flex;
    @media (max-width: 600px){
        margin-top: 40px;
    }
    input{
        height: 35px;
        border-radius: 10px 0px 0px 10px;
        width: 372px;
        padding-left: 10px;
        border: 2px solid red;
        background: black; 
        color: white;   
        
        ::-webkit-input-placeholder {
            
            color: rgba(255,255,255,0.3);
         }

        @media (max-width: 600px){
            width: 233px;
        }

    }
`;

export const BtnBusca = styled.button`
    height: 41px;
    border-radius: 0px 5px 5px 0px;
    background: red;
    border: none;
    width: 40px;
    cursor: pointer;
    svg{
        font-size: 20px;
    }
    path{
        fill:white;        
    }
    
`;
