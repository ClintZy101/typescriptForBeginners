

import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { User } from './components/context/User';
import { UserContextProvider } from './components/context/UserContext';
import { Counter } from './components/Counter';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Person } from './components/Person';
import { PersonalMessage } from './components/PersonalMessage';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { namelist, userData } from './data/data'

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

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Click', event)
  }

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

      <Button handleClick={handleClick} />
      <Input value="" handleChange={(event) => console.log('event', event)} />
      <Container styles={{ border: '1px solid', padding: '1rem', margin: '20px', fontSize: '20px' }} />
      <Counter />

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      
      <UserContextProvider>
        <User name={userData.name} email={userData.email} />
      </UserContextProvider>


    </div>
  );
}

export default App;
