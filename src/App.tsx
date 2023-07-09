

import { useState } from 'react';
import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Person } from './components/Person';
import { PersonalMessage } from './components/PersonalMessage';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { namelist } from './data/data'

function App() {
  const greetData = {
    name: 'Clint',
    messageCount: 3,
    isLoggedIn: false,
  }

  const personData = {
    name: {
      firstName: 'Clint',
      lastName: 'Taypoc'
    }
  }

  // const [status2, setStatus2] = useState<string>('success')
  const status = 'loading'

  return (
    <div className="App">
      <Greet name={greetData.name} messageCount={greetData.messageCount} isLoggedIn={greetData.isLoggedIn} />
      <Person name={personData.name} />
      <PersonList names={namelist} />
      <Status status={status} />

      <Heading>Placeholder Text</Heading>

      <PersonalMessage>
        <Heading>I love You!</Heading>
      </PersonalMessage>
    </div>
  );
}

export default App;
