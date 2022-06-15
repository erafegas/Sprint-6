import Escena from './components/escena/Escena';
import styled from 'styled-components';


const Pagina = styled.div `
display: flex;
width: 100%;
height: 100vh;
flex-direction: column;
align-items: center;
`;


function App() {
  return (
        <div> 
          <Pagina>
            <Escena />
         </Pagina>
        </div>
  );
}

export default App;
