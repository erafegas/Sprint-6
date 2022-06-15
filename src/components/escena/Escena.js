import React from 'react'
import Frases from './Frases';
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
   `;


const Escena = () => {

    // Lógica
    const frases = Frases.map((props, i) => (
        <Section> {props.txt} </Section>
        ));

    // Vista
  return (
    <>
     {frases}
    </>
  );

}

export default Escena
