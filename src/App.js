// import logo from './logo.svg';
import './App.css';
import { welcomeElement } from './components/welcome';
import { Component } from 'react';

const user = {
  userName: 'John Doe',
  userAge:  33,
  userHeight: '5\'9',
  userWeight: '175lbs'
}

function MyComponent (props) {
    return (
      <div>
        <h1> {props.title} </h1> 
        <button onClick={props.onButtonClicked}>(Click Me)</button>
      </div>
    );
  }

function App() {
  
  const oBC = () => {
    console.log('Clicked Now!');
  };

    return (
      <main className="App">
        <header>
          <MyComponent title="React Playground" onButtonClicked={oBC}/>
        </header>

        {welcomeElement(user)}
        
      </main>
  );
}

export default App;
