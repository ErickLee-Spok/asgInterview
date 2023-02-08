import './App.css';
import {people} from './api/people';
import RenderPerson, { PersonDetails } from './person/render-person';

function App() {
  const singlePersonResponse = people;  // API Response  // Note this variable is purposely misNamed. Please name it somthing appropriate

  return (
    <div className="App">
      <header className="App-header">
      <div className='app-body'>
        { 
          /////// Enter Code Here //////////
        }
      </div>
      </header>
    </div>
  );
}

export default App;
