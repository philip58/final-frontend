import { Link } from "react-router-dom";

const AllTasksView = (props) => {
  let { tasks, deleteTask } = props;
  if (!tasks.length) {
    return (
      <div style={{backgroundColor:"#99ff99",color:"blck",fontFamily:"garamond",margin:0,padding:40}}>
        <p>There are no tasks.</p>
        <Link to={`/newtask`}>
          <button>Add New Task</button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{backgroundColor:"#99ff99",color:"blck",fontFamily:"garamond",margin:0,padding:40}}>
      {tasks.map((task) => {
        let description = task.description;
        return (
          <div style={{backgroundColor:"#77ff99",color:"blck",fontFamily:"garamond",margin:40,padding:40}} key={task.id}>
            <Link to={`/task/${task.id}`}>
              <h1>{description}</h1>
            </Link>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        );
      })}
      <br />
      <br />
      <Link style={{backgroundColor:"#77ff99",color:"blck",fontFamily:"garamond",margin:50,padding:30}} to={`/newtask`}>
        Add New Task
      </Link>
      <Link style={{backgroundColor:"#77ff99",color:"blck",fontFamily:"garamond",margin:50,padding:30}} to={"/"}>
        Home Page
      </Link>
      <div style={{backgroundColor:"#99ff99",color:"blck",fontFamily:"garamond",margin:0,padding:150}}></div>
    </div>
  );
};

export default AllTasksView;
