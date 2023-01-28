import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './GlobalStyel';
import { Routers } from './Routers';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
