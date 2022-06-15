import { useState} from 'react';

import Escena from './components/escena/Escena';
import styled from 'styled-components';
import Frases from './components/escena/Frases';

const Header = styled.div `
display: flex;
width: 100%;
height: 150px;
`;

const Buttons = styled.div `
display: flex;
justify-content: center;
align-items: center;
width: 50%;
margin: 2px,
height: 100px;
cursor: pointer;
border-radius: 20px;
background-color: #F8F8F8;
border: 1px solid;
&:hover {background-color: white;}`
;


const Pagina = styled.div `
display: flex;
width: 100%;
height: 100vh;
flex-direction: column;
align-items: center;
`;


function App() {

  // LOGIC
  const [activo, setActive] = useState(0);

  const Button = ({ text, onclick }) => {
    return (
      <Buttons onClick={onclick}>
        {text}
      </Buttons>
    );
  };



  return (
        <div> 
          <Header>
       
          <Button
            text="ANTERIOR"
            onclick={() =>
              activo === 0
                ? setActive(Frases.length - 1)
                : setActive(activo - 1)
            }
          />

<Button
            text="SEGUENT"
            onclick={() =>
              Frases.length - 1 === activo
                ? setActive(0)
                : setActive(activo + 1)
            }
          />

          </Header>
          <Pagina>
            <Escena Frases={Frases} estado={activo} />
         </Pagina>
        </div>
  );
}

export default App;
