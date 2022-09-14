import logo from './logo.svg';
import './App.css';
import Ccomponent from './Ccomponent';
import Coincomponent from './Coincomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Coincomponent/>
        <Ccomponent 
        numbers={[2,5,3,8,2,5,6,5,6,77,34,123,321,8999]}
        cucumbers={['Rick', 'Morty', 'Billy', 'Ilish']}
        word='Im a cool word'
        html='<ul>
          <li>im1</li>
          <li>im2</li>
          <li>im3</li>
          <li>im4</li>
          <li>im5</li>
        </ul>' />
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Я - пельмешка
        </a>
      </header>
    </div>
  );
}

export default App;
