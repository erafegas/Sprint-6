import styled from 'styled-components';

const Section = styled.div `
   margin: 25px;
   width: 95%;
   border: 1px solid #000;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 25px;
   border-radius: 20px;
   background: transparent;
   &.operativo {
    background: #ffc0cb;
   }`;


const Escena = ({Frases, estado}) =>

    Frases.map((props, i) => {
        return (
            <Section 
                key={i + "-Frases"}
                className={i === estado && "operativo"}
            >
                {props.txt}
            </Section>
            );
         });


export default Escena
