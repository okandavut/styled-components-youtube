import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Wrapper from './components/Wrapper';


const StyledParagraph = styled.p`
  font-size: 20px;
  color : red;
`;

function App() {
  return (
    <Wrapper>
      <StyledParagraph>Hello world</StyledParagraph>
    </Wrapper>
  );
}

export default App;
