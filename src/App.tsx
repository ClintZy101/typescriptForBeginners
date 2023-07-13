

import React from 'react';
import './App.css';
import APIComponent from './components/API/APIComponent';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { Button } from './components/Button';
import ClassCounter from './components/class/ClassCounter';
import { Container } from './components/Container';
import { Box } from './components/context/Box';
import Family from './components/context/Family';
import { FamilyContextProvider } from './components/context/FamilyNamesContext';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { User } from './components/context/User';
import { UserContextProvider } from './components/context/UserContext';
import { Counter } from './components/Counter';
import { List } from './components/generics/List';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import Person1 from './components/HOC/Person1';
import Person2 from './components/HOC/Person2';
import { Input } from './components/Input';
import { Person } from './components/Person';
import { PersonalMessage } from './components/PersonalMessage';
import { PersonList } from './components/PersonList';
import { DomRef } from './components/ref/DomRef';
import { MutableRef } from './components/ref/MutableRef';
import { Status } from './components/Status';
import { greetData, namelist, personData, userData } from './data/data'


function App() {
 

  // const [status2, setStatus2] = useState<string>('success')
  const status = 'loading'

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Click', event)
  }

  return (
    <div className="App">

      <APIComponent />
      <Person1 />
      <Person2 />
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

      {/* <FamilyContextProvider>
        <Family />
      </FamilyContextProvider> */}

    <DomRef />
    {/* <MutableRef /> */}
    <ClassCounter message='The Count value is:' />
    <Private isLoggedIn={true} component={Profile} />
    <List items={['table','cup','spoon']} onClick={(item)=> console.log(item)} />
    
    </div>
  );
}

export default App;
