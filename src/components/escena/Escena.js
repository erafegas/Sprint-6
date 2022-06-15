import React from 'react'
import Frases from './Frases';

const Escena = () => {

    // Lógica
    const frases = Frases.map((props, i) => (
        <p> {props.txt} </p>
        ));

    // Vista
  return (
    <div>
     {frases}
    </div>
  );

}

export default Escena
