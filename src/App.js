import logo from './logo.svg';
import './App.css';
import { welcomeElement } from './components/welcome';

const user = {
  userName: 'John Doe',
  userAge:  33,
  userHeight: '5\'9',
  userWeight: '175lbs'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          create-react-app
        </a>
        { welcomeElement(user) }
      </header>
    </div>
  );
}

export default App;
