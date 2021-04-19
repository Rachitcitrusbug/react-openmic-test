import React from "react";
import { useHistory } from "react-router-dom";

function User(props) {
  const styleObj = {
    fontSize: 40,
    color: "#4a54f1",
    textAlign: "center",
    paddingTop: "100px",
  };

  const history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    history.push("/");
    console.log("Successfully logged out.");
  };

  return (
    <>
      <div style={styleObj}>
        <p>
          Hello {props.location.state.user.first_name}{" "}
          {props.location.state.user.last_name}
        </p>
        <br />
        <button className="btn btn-primary" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </>
  );
}

export default User;
