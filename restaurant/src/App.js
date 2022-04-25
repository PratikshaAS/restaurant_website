import logo from './logo.svg';
import './App.css';
import Maincomponent from './components/Maincomponent';
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Maincomponent/>
    </div>
    </BrowserRouter>
  );
}

export default App;
