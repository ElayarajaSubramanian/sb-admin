import axios from "axios";
import { useFormik } from "formik";
import React, { useContext } from "react";
import UserContext from "../UserContext";

const UserForm = () => {
  const userContext = useContext(UserContext);
  const formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      office: "",
      age: 0,
      startDate: 0,
      salary: 0
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Please enter your name";
      }
      return errors;
    },
    onSubmit: async (values) => {
      /* userContext.setUsers([...userContext.users, values]); */
      try {
        axios.post("https://6243424f3da3ac772b00a37a.mockapi.io/users", values);
        userContext.setUsers([...userContext.users, values]);
      } catch (error) {
        console.log(error);
      }
    }
  });
  return (
    <form className="container" onSubmit={formik.handleSubmit}>
      <div className="row">
        <div className="col-lg-6">
          <label>Name</label>
          <input
            type={"text"}
            className="form-control"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <span style={{ color: "red" }}>{formik.errors.name}</span>
        </div>
        <div className="col-lg-6">
          <label>Position</label>
          <input
            type={"text"}
            className="form-control"
            name="position"
            onChange={formik.handleChange}
            value={formik.values.position}
          />
        </div>
        <div className="col-lg-6">
          <label>Office</label>
          <input
            type={"text"}
            className="form-control"
            name="office"
            onChange={formik.handleChange}
            value={formik.values.office}
          />
        </div>
        <div className="col-lg-6">
          <label>Age</label>
          <input
            type={"number"}
            className="form-control"
            name="age"
            onChange={formik.handleChange}
            value={formik.values.age}
          />
        </div>
        <div className="col-lg-6">
          <label>Start Date</label>
          <input
            type={"date"}
            className="form-control"
            name="startDate"
            onChange={formik.handleChange}
            value={formik.values.startDate}
          />
        </div>
        <div className="col-lg-6">
          <label>Salary</label>
          <input
            type={"number"}
            className="form-control"
            name="salary"
            onChange={formik.handleChange}
            value={formik.values.salary}
          />
        </div>
        <div className="col-lg-6">
          <input type={"submit"} className="btn btn-primary mt-3" />
        </div>
      </div>
    </form>
  );
};

export default UserForm;
