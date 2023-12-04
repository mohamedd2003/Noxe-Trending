import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Login(props) {
  let [User, setUser] = useState({
    email: "",
    password: "",
  });
  let [errorMsg, setErrorMsg] = useState("");
  let [errorsList, setErrorsList] = useState([]);
  let [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  function goToHome() {
    navigate("/home");
  }
  async function submitForm(e) {
    e.preventDefault();
    setLoading(true);
    let validateRespone = validateForm();
    if (validateRespone.error) {
      setErrorsList(validateRespone.error.details);
    } else {
      let { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        User
      );

      if (data.message === "success") {
        setLoading(false);
        localStorage.setItem('userToken',data.token)
        props.saveUserData()
        goToHome();
        ;

      }
       else
        {
        setErrorMsg(data.message);
        setLoading(false);
      }
    }
  }
  function validateForm() {
    const scheme = Joi.object({
      email: Joi.string().email({ tlds: { allow: ["net", "com"] } }),
      password: Joi.string().required(),
    });
    return scheme.validate(User, { abortEarly: false });
  }
  function getFormValue(e) {
    let myUser = { ...User }; //deep copy
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }







  
  return (
    <>
      <div className="m-auto w-50">
        <h1>Login Form</h1>
        {errorsList.map((error, index) => (
          <div key={index} className="alert alert-danger">
            {error.message}
          </div>
        ))}
        {errorMsg ? <div className="alert alert-danger">{errorMsg}</div> : ""}
        <form onSubmit={submitForm}>
          <div className="input-gp my-2">
            <label htmlFor="email">Email</label>
            <input
              onChange={getFormValue}
              className="form-control"
              type="email"
              name="email"
            />
          </div>
          <div className="input-gp my-2">
            <label htmlFor="password">Password</label>
            <input
              onChange={getFormValue}
              className="form-control"
              type="password"
              name="password"
            />
          </div>
          <button className="btn  btn-info  float-end my-2" type="submit">
            {loading ? <i className="fa fa-spinner fa-spin"></i> : "Login"}
          </button>
        </form>
      </div>
    </>
  );
}
