import { Link } from "react-router-dom";
const NewTaskView = (props) => {
  const { handleChange, handleSubmit, error } = props;

  return (
    <div className="root">
      <div className="formContainer">
        <div className="formTitle">
          <h2
            style={{backgroundColor:"#99ff99",color:"blck",fontFamily:"garamond",margin:0,padding:40}}
          >
            New Task
          </h2>
        </div>
        <form style={{backgroundColor:"#77ff99",color:"blck",fontFamily:"garamond",margin:0,padding:40}} onSubmit={(e) => handleSubmit(e)}>
          <label style={{ color: "#11153e", fontWeight: "bold" }}>
            Description:{" "}
          </label>
          <input
            type="text"
            name="description"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />

          <label style={{ color: "#11153e", fontWeight: "bold" }}>
            Priority Level:{" "}
          </label>
          <input
            type="text"
            name="prioritylevel"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />

          <label style={{ color: "#11153e", fontWeight: "bold" }}>
            employeeId:{" "}
          </label>
          <input
            type="text"
            name="employeeId"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />

          <button type="submit">Submit</button>
          <br />
          <br />
        </form>
        {error !== "" && <p>{error}</p>}
      </div>
      <div style={{backgroundColor:"#55ff99",color:"blck",fontFamily:"garamond",margin:0,padding:40}}>
            <Link to={"/"}>Home Page</Link>
      </div>
      <div style={{backgroundColor:"#33ff99",color:"blck",fontFamily:"garamond",margin:0,padding:200}}></div>
    </div>
  );
};

export default NewTaskView;
