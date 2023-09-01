import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/images/profile.png";
import styles from "../styles/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { profileValidation } from "../helper/validate";
import converToBase64 from "../helper/convert";
import extend from '../styles/Profile.module.css'

export default function Profile() {
  const [file, setFile] = useState();
  const formik = useFormik({
    initialValues: {
      firstname :'',
      lastname :'',
      email :'',
      mobile :'',
      address :'',
    },
    validate: profileValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file });
      console.log(values);
    },
  });

  /** formil=k doesn't support file upload so we need to create this handler */

  const onUpload = async (e) => {
    const base64 = await converToBase64(e.target.files[0]);
    setFile(base64);
  };

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div
          className={`${styles.glass} ${extend.glass}`}
          style={{ width: "45%", paddingTop: "3em" }}
        >
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">My Profile</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Update Details
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <label htmlFor="profile">
                {" "}
                <img
                  src={file || avatar}
                  className={`${styles.profile_img} ${extend.profile_img}`}
                  alt="avatar"
                ></img>
              </label>
              <input
                onChange={onUpload}
                type="file"
                id="profile"
                name="profile"
              />
            </div>
            <div className="textbox flex flex-col items-center gap-6">
              <div className="name flex w-3/4 gap-10">
                <input
                  {...formik.getFieldProps("firstname")}
                  type="text"
                  className={`${styles.textbox} ${extend.textbox}`}
                  placeholder="First Name"
                ></input>
                <input
                  {...formik.getFieldProps("lastname")}
                  type="text"
                  className={`${styles.textbox} ${extend.textbox}`}
                  placeholder="Last name"
                ></input>
              </div>
              <div className="name flex w-3/4 gap-10">
                <input
                  {...formik.getFieldProps("mobile")}
                  type="number"
                  className={`${styles.textbox} ${extend.textbox}`}
                  placeholder="Mobile Number"
                ></input>

                <input
                  {...formik.getFieldProps("email")}
                  type="email"
                  className={`${styles.textbox} ${extend.textbox}`}
                  placeholder="Email*"
                ></input>
              </div>

              <div className="name flex w-3/4 gap-10">
                <input
                  {...formik.getFieldProps("address")}
                  type="number"
                  className={`${styles.textbox} ${extend.textbox}`}
                  placeholder="Address"
                ></input>
              </div>

              <button className={styles.btn} type="submit">
                Update
              </button>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                
                <button className="text-red-500" to="/ ">
                  Logout
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
