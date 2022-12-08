import React from "react";
import "./sidenavmenubar.css";
import PublicIcon from '@mui/icons-material/Public';
import {NavLink} from "react-router-dom";
function Sidenavmenubar(){
    return(
       
         <div className="side_nav">      
              <nav>
                <ul>
                        <NavLink to="/" >
                            <li>
                                <div className="menu_text">
                                    Home
                                </div>
                            </li>
                        </NavLink>
                        <NavLink to="/companies" >
                                <li>
                                    <div className="menu_text">
                                        Companies
                                    </div>
                                </li>
                        </NavLink>
                        <NavLink to="/question" >
                                <li>
                                    <div className="menu_text">
                                        Question
                                    </div>
                                </li>
                        </NavLink>
                        <NavLink to="/tags" >
                                <li>
                                    <div className="menu_text">
                                        Tags
                                    </div>
                                </li>
                        </NavLink>
                        <NavLink to="/users" >
                                <li>
                                    <div className="menu_text">
                                        Users
                                    </div>
                                </li>
                        </NavLink>
                </ul>
            </nav>
          
        </div>
      
    );
}

export default Sidenavmenubar;