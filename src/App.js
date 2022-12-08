import './App.css';
import Signin from "./register/signin";
import Signup from "./register/signup";
import Question from "./pages/question";
import Users from "./pages/users";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import VerticalTabs from "./pages/tab";
import Home from "./pages/home";
import Tags from "./pages/tags";
import { Buffer } from 'buffer';
global.Buffer = Buffer;

function App() {
   return (
    <div className="App">
      <div className="body">
        <Router>           
            <Routes>
            <Route path="/"  element={<Signup/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/tab" element={<VerticalTabs/>}/>            
            <Route path="/question" element={<Question/>}/>
            <Route path="/users" element={<Users/>}/>
            <Route path="/home" element={<Home/>}/>
            
            <Route path="/tags" element={<Tags/>}/>

            </Routes>
           </Router>
        </div>
    </div>
  );
}

export default App;
