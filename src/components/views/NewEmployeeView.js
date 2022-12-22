import { Link } from "react-router-dom";
const NewEmployeeView = (props) => {
  const { handleChange, handleSubmit, error } = props;

  return (
    <div style={{backgroundColor:"#99ff99",color:"blck",fontFamily:"garamond",margin:0,padding:40}} className="root">
      <div className="formContainer">
        <div className="formTitle">
          <h2
            style={{
              fontWeight: "bold",
              fontFamily: "Courier, sans-serif",
              fontSize: "20px",
              color: "#11153e",
            }}
          >
            New Employee
          </h2>
        </div>
        <form style={{ textAlign: "center" }} onSubmit={(e) => handleSubmit(e)}>
          <label style={{ color: "#11153e", fontWeight: "bold" }}>
            First Name:{" "}
          </label>
          <input
            type="text"
            name="firstname"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />

          <label style={{ color: "#11153e", fontWeight: "bold" }}>
            Last Name:{" "}
          </label>
          <input
            type="text"
            name="lastname"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />

          <label style={{ color: "#11153e", fontWeight: "bold" }}>
            Department:{" "}
          </label>
          <input
            type="text"
            name="department"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />

          <label style={{ color: "#11153e", fontWeight: "bold" }}>
            Id:{" "}
          </label>
          <input
            type="number"
            name="id"
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
      <div style={{display:"block",border:50,backgroundColor:"#55ff99",borderRadius:30,padding:30}}>
        <Link to={"/"}>Home Page</Link>
      </div>
      <div style={{backgroundColor:"#99ff99",color:"blck",fontFamily:"garamond",margin:0,padding:220}}
      ></div>
    </div>
  );
};

export default NewEmployeeView;
