import { useState } from 'react';
import './app.css';
import FormInput from './components/formInput/FormInput';

const App = () => {
  const [username, setUsername] = useState("")
  
  console.log(username)

  return(
    <div className="app">
      <form>
        <FormInput placeholder="Username" setUsername={setUsername}/>
        <FormInput placeholder="Email" setUsername={setUsername}/>
        <FormInput placeholder="Full name" setUsername={setUsername}/>
        <FormInput placeholder="Sth else" setUsername={setUsername}/>
      </form>
    </div>
  )
}

export default App;
