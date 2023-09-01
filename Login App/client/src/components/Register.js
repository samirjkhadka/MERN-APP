import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/images/profile.png";
import styles from "../styles/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import {registerValiation } from "../helper/validate";
import converToBase64 from "../helper/convert";


export default function Register() {
  const [file, setFile] = useState()
  const formik = useFormik({
    initialValues: {
      email:'john.doe@email.com',
      username:'',
      password: "",
    },
    validate: registerValiation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, {profile:file})
      console.log(values);
    },
  });

  /** formil=k doesn't support file upload so we need to create this handler */

  const onUpload = async e => {
    const base64 = await converToBase64(e.target.files[0]);
    setFile (base64);
  }

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass} style={{ width: "45%", paddingTop: '3em'}}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Register</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Explore More by connecting with us
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <label htmlFor="profile"> <img
                src={file||avatar}
                className={styles.profile_img}
                alt="avatar"
              ></img></label>
              <input onChange={onUpload} type="file" id="profile" name="profile"/>
             
            </div>
            <div className="textbox flex flex-col items-center gap-6">
            <input
                {...formik.getFieldProps("email")}
                type="email"
                className={styles.textbox}
                placeholder="Email*"
              ></input>
              <input
                {...formik.getFieldProps("username")}
                type="Username"
                className={styles.textbox}
                placeholder="Username"
              ></input>
              <input
                {...formik.getFieldProps("password")}
                type="Password"
                className={styles.textbox}
                placeholder="Password"
              ></input>
              <button className={styles.btn} type="submit">
                Register
              </button>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                
                Already a user
                <Link className="text-red-500" to="/ ">
                  Login
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
