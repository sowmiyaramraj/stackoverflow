import './App.css';
import Signin from "./register/signin";
import Signup from "./register/signup";
import Question from "./pages/question";
import Companies from "./pages/companies";
import Users from "./pages/users";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import VerticalTabs from "./pages/tab";
import Home from "./pages/home";
import Tags from "./pages/tags";
import Askqus from "./pages/askqus";
import { Buffer } from 'buffer';
global.Buffer = Buffer;

function App() {
   return (
    <div className="App">
      <div className="body">
        <Router>           
            <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/tab" element={<VerticalTabs/>}/>            
            <Route path="/question" element={<Question/>}/>
            <Route path="/users" element={<Users/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/companies" element={<Companies/>}/>
            <Route path="/tags" element={<Tags/>}/>
            <Route path="/askqus" element={<Askqus/>}/>

            </Routes>
           </Router>
        </div>
    </div>
  );
}

export default App;
