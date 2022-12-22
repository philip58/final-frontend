import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchEmployeeThunk,
  fetchAllTasksThunk,
  editTaskThunk,
} from "../../store/thunks";

import { EmployeeView } from "../views";

import { useParams } from "react-router";

import { Link } from "react-router-dom";

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  // etc... other react-router-dom v6 hooks

  return (
    <WrappedComponent
      {...props}
      params={params}
      // etc...
    />
  );
};

class EmployeeContainer extends Component {
  componentDidMount() {
    this.props.fetchEmployee(this.props.params.id);
    this.props.fetchTasks();
  }

  render() {
    return (
      <div style={{backgroundColor:"#77ff99",color:"blck",fontFamily:"garamond",margin:0,padding:170}}>
        <EmployeeView
          employee={this.props.employee}
          editTask={this.props.editTask}
          allTasks={this.props.allTasks}
        />
        <br />
        <br />
          <Link style={{display:"block",border:50,backgroundColor:"#55ff99",borderRadius:30,padding:30}} to={"/"}>Home Page </Link>
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    employee: state.employee,
    allTasks: state.allTasks,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchEmployee: (id) => dispatch(fetchEmployeeThunk(id)),
    editTask: (task) => dispatch(editTaskThunk(task)),
    fetchTasks: () => dispatch(fetchAllTasksThunk()),
  };
};

export default withRouter(connect(mapState, mapDispatch)(EmployeeContainer));
