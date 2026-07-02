import React from "react";

import "./Input.css";

const Input = (props) => {

    const[enteredValue,setEnteredValue] = useState("");
    const[isValid,setIsValid] = useState(false);

  const changeHandler = (e) => {
    e.preventDefault();
  };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
      />
    ) : (
      <textarea id={props.id} row={props.roe || 3} onChange={changeHandler} />
    );

  return (
    <div className={`form-control`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  );
};

export default Input;
