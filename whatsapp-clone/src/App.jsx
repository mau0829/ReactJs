import Chat from './WhatsupChat';
import './App.css';
import Sidebar from './Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { useState } from 'react';
import Login from './Login/Login';
import { useStateValue } from './StateProvider';


function App() {
  const [{user},dispatch] = useStateValue()

  return (
    <div className="app">
      {!user ? <Login/> : <div className='app__body'>
        <Router>
          <Routes>
            {/* <Route path="*" element={<Sidebar/>}></Route>             */}
            {/* <Route path="/app" element={<><Sidebar/><Chat/></>}>          
            </Route> */}
            <Route path="/rooms/:roomId" element={<><Sidebar /><Chat /></>}>
            </Route>
            <Route path="/" element={<><Sidebar /><Chat /></>}>
            </Route>
          </Routes>
        </Router>

      </div>}

    </div>
  );
}

export default App;
