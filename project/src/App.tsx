import {UserContextProvider} from './context/UserContext'
import Form from './component/Form';

function App() {

  return(
    <div>
      <UserContextProvider>
        <Form/>
      </UserContextProvider>
    </div>
  )
}

export default App;
