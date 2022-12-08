import './App.css';
import Signin from "./register/signin";
import Signup from "./register/signup";
import Question from "./pages/question";
import Company from "./pages/company";
import User from "./pages/user";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import VerticalTabs from "./pages/tab";
import EnhancedTable from "./pages/table";
import { Buffer } from 'buffer';
global.Buffer = Buffer;

function App() {
   return (
    <div className="App">
      <div className="body">
        <Router>           
            <Routes>
            <Route path="/table"  element={<EnhancedTable/>}/>
            <Route path="/"  element={<Signup/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/tab" element={<VerticalTabs/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/question" element={<Question/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path="/company" element={<Company/>}/>
            </Routes>
           </Router>
        </div>
    </div>
  );
}

export default App;
