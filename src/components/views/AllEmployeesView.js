import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllEmployeesView = (props) => {
  if (!props.allEmployees.length) {
    return (
      <div style={{backgroundColor:"#99ff99",color:"blck",fontFamily:"garamond",margin:0,padding:40}}>
        <p>There are no employees.</p>
        <Link to={"/"}> Home Page </Link>
      </div>
    );
  }

  return (

    <div style={{backgroundColor:"#99ff99",color:"black",fontFamily:"garamond",margin:0,padding:40}}>
        <Link to={'/'}> 
        <h2 style={{backgroundColor:"#55ff99",fontFamily:"garamond",marginInline:50,padding:50}}> Home Page </h2>
        </Link>
        <div>
      {props.allEmployees.map((employee) => {
        let name = employee.firstname + " " + employee.lastname;
        return (
          <div style={{backgroundColor:"#77ff99",color:"black",fontFamily:"garamond",margin:50,padding:30}} key={employee.id}>
            <Link to={`/employee/${employee.id}`}>
              <h2>{name}</h2>
            </Link>

            <p>{employee.department}</p>
          </div>
        );
      })}
      </div>
    </div>
  );
};

AllEmployeesView.propTypes = {
  allEmployees: PropTypes.array.isRequired,
};

export default AllEmployeesView;
