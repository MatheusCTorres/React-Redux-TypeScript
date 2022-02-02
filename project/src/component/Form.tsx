import { useContext, useState } from 'react';
import{UserContext} from '../context/UserContext'
import './style.css'

export default function Form() {

    const userContext = useContext(UserContext)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const result = () =>{
      userContext.setUser({
        name: name,
        email: email
      })
    }

    const clear = () => {
      userContext.setUser(null)
    }  

  return (
    <div className="form-style-8">
      <form>
        <label >Name</label>
        <input type="text" onChange={(event) => {setName(event.target.value)}}/>

        <label>Email</label>
        <input type="email" onChange={(event) => {setEmail(event.target.value)}}/>

        <input type="button" value="Submit" onClick={result}/>
        <input type="button" value="Clear" onClick={clear}/>

      </form>
      <hr/> 
      <div>
        <h2>User name is: {userContext.user?.name}</h2>
        <h2>User email is: {userContext.user?.email}</h2>
      </div>
    </div>
  );
}