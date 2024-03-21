import { ThemeProvider, createGlobalStyle } from 'styled-components';
import './App.css';
import logo from './logo.svg'
import StyledButton, {FancyButton, SubmitButton, AnimatedLogo,DarkButton} from './components/Button/Button';

const theme={
  dark:{
    primary:'#000',
    text:'#fff',
  },
  light:{
    primary:'#fff',
    text:'#000',
  },
  fontfamily:`cursive`,
}
const GlobalStyle=createGlobalStyle`
  button{
    font-family:${(props)=> props.theme.fontfamily}
  }
`
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <div className="App">
      {/* <button>Button</button> */}
      <StyledButton type='submit'>Styled Button</StyledButton>
      <div>
        <br />
      </div>
      <StyledButton variant='outline'>Styled Button</StyledButton>
      <div>
        <br />
      </div>
      <FancyButton as='a'>Fancy Button</FancyButton>
      <div>
        <br />
      </div>
      <SubmitButton>Submit Button</SubmitButton>
      <div>
        <br />
      </div>
      <AnimatedLogo src={logo}></AnimatedLogo>
      <div>
        <br />
      </div>
      <DarkButton>Dark</DarkButton>
    </div>
    </ThemeProvider>
  );
}

export default App;
