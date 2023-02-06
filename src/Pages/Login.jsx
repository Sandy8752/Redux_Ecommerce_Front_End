import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { config } from "../config";

function Login() {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const res = await axios.post(`${config.api}/api/auth/`, values);
        alert(res.data.message);
        if (res.data.message === "Successfully Logged In !!") {
          navigate("/products");
        }
        localStorage.setItem("react_app_token",res.data.token)
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      <h2 className="text-center mt-5">Redux Store</h2>
      <div className="container">
        <div className="row m-5 no-gutters shadow-lg">
          <div className="col-md-6 d-none d-md-block">
            <img
              src="https://thumbs.dreamstime.com/b/fashion-clothes-clothing-rack-colorful-closet-bright-closeup-rainbow-color-choice-trendy-female-wear-hangers-store-69750723.jpg"
              className="img-fluid" alt="image"
              style={{ minHeight: "100%" }}
            />
          </div>
          <div className="col-md-6 bg-white p-5">
            <h3 className="pb-3">Login Form</h3>
            <div className="form-style">
              <form onSubmit={formik.handleSubmit}>
                <div className="form-group pb-3">
                  <input
                    type="text"
                    placeholder="Username"
                    className="form-control"
                    id="username"
                    aria-describedby="emailHelp"
                    name="userName"
                    value={formik.values.userName}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="form-group pb-3">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <input name="" type="checkbox" value="" />{" "}
                    <span className="pl-2 font-weight-bold">Remember Me</span>
                  </div>
                 
                </div>
                <div className="pb-2">
                  <button
                    type="submit"
                    className="btn btn-dark w-100 font-weight-bold mt-2"
                  >
                    Submit
                  </button>
                  
                </div>
              </form>

              <div className="pt-4 text-center">
                Get Members Benefit. <Link to={"/register"}>Sign Up</Link>
              </div>
              <div>
                  For Testing:<br/>
                  username: user1 <br/>
                  password: 123
                 </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;