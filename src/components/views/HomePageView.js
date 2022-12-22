import { Link } from "react-router-dom";

const HomePageView = () => {
  return (
    <div>
      <h1 style={{backgroundColor:"#99ff99",color:"blck",fontFamily:"garamond",margin:0,padding:40}}> Employee Home Page </h1>
      <Link style={{backgroundColor:"#77ff99",color:"black",fontFamily:"garamond",display:"block",padding:20}} to={"/employees"}> All Employees </Link>
      <Link style={{backgroundColor:"#55ff99",color:"black",fontFamily:"garamond",display:"block",padding:20}} to={"/tasks"}> All Tasks </Link>
      <div style={{backgroundColor:"#33ff99",color:"black",fontFamily:"garamond",display:"block",padding:300}} to={"/tasks"}></div>
    </div>
  );
};

export default HomePageView;
