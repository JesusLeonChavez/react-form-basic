import { useRef, useState } from 'react';
import './app.css';
import FormInput from './components/formInput/FormInput';

const App = () => {
  // const [username, setUsername] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))
  }

  return(
    <div className="app">
      <form onSubmit={handleSubmit}>
        <FormInput name="usename" placeholder="Username"/>
        <FormInput name="email" placeholder="Email"/>
        <FormInput name="fullname" placeholder="Full name"/>
        <FormInput name="sth" placeholder="Sth else"/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App;
