import React from "react";
import "./pages.css";

function Users()
{
  const navigate=useNavigate();
  const [user,setUser]=useState([]);
  useEffect(()=>{
    async function getuser(){  
      const decodedtoken=jwt.decode(localStorage.getItem("token"));
      if(decodedtoken.exp * 1000<Date.now()){
        navigate("/");
      }   else{
       const responce= await axios.get("http://localhost:3001/user/get",{
        headers:{
          // "user-agent": "not axios", 
          accesstoken:localStorage.getItem("token"),
        },
      });
      
    }
    getuser();

      }
      
  },[]);
  return(
    <div className="content"><h1>Users</h1></div>

  );
}

export default Users;