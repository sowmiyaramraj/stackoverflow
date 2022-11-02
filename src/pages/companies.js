import React from "react";
import "./pages.css";

function Companies()
{
  const navigate=useNavigate();
  const [companies,setCompanies]=useState([]);
  useEffect(()=>{
    async function getcompanies(){  
      const decodedtoken=jwt.decode(localStorage.getItem("token"));
      if(decodedtoken.exp * 1000<Date.now()){
        navigate("/");
      }   else{
       const responce= await axios.get("http://localhost:3001/companies/get",{
        headers:{
          // "user-agent": "not axios", 
          accesstoken:localStorage.getItem("token"),
        },
      });
      
    }
    getcompanies();

      }
      
  },[]);
  return(
    <div className="content">
        <h1>companies</h1>
        </div>

  );
}

export default Companies;