import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { config } from "../config";

function Register() {
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values) => {
      try {
        if (values.password === values.confirmPassword) {
          const res = await axios.post(
            `${config.api}/api/auth/register`,
            values
          );
          alert(res.data.message);
        } else {
          alert("Password and Confirm Password is incorrect!!");
        }
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
              className="img-fluid"
              alt="register"
              style={{ minHeight: "100%" }}
            />
          </div>
          <div className="col-md-6 bg-white p-5">
            <h3 className="pb-3">Register Form</h3>
            <div className="form-style">
              <form onSubmit={formik.handleSubmit}>
                <div className="form-group pb-3">
                  <input
                    type="text"
                    placeholder="Username"
                    className="form-control"
                    id="username"
                    name="userName"
                    value={formik.values.userName}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="form-group pb-3">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="form-group pb-3">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="confirmPassword"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="form-group pb-3">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="form-control"
                    id="exampleInputPassword2"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                </div>

                <div className="pb-2">
                  <button
                    type="submit"
                    className="btn btn-dark w-100 font-weight-bold mt-2"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;