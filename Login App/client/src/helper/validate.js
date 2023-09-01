import toast from "react-hot-toast";

export async function usernameValidate(values) {
  const errors = usernameverify({}, values);
  return errors;
}

export async function passwordValidate(values) {
  const errors = passwordVerify({}, values);
  return errors;
}

/**validate reset password */
export async function resetPasswordvalidation(values) {
  const errors = passwordVerify({}, values);

  if (values.password !== values.confirm_password) {
    errors.exist = toast.error("Password do not match...!");
  }
  return errors;
}



/**validate register form */
export async function registerValiation(values){
  const errors = usernameverify({}, values);
  passwordVerify(errors, values);
  emailVerify(errors, values);
  return errors;
}



/**validate profile pagee */

export async function profileValidation(values)
{
  const errors = emailVerify({}, values);
  return errors;
}





/**username validation */
function usernameverify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("Username is required...!");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid Username...!");
  }
  return error;
}

/**password validation */
function passwordVerify(errors = {}, values) {
  const specialChars = /[`!@#$%^&*()_+-=[\]{};':"\\|,.<>/?~]/;

  if (!values.password) {
    errors.password = toast.error("Password is Required ...!");
  } else if (values.password.includes(" ")) {
    errors.password = toast.error("Wrong Password...!");
  } else if (values.password.length < 4) {
    errors.password = toast.error("Password must be more than 4 characters");
  } else if (!specialChars.test(values.password)) {
    errors.password = toast.error("Password must have special characters");
  }
  return errors;
}

/**validate email */
function emailVerify(error = {}, values)
{
  if(!values.email)
  {
    error.email = toast.error("Email is required...!");
  }
  else if (values.email.includes(' ')){
    error.email = toast.error("Wrong email...!")

  }
  else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    error.email = toast.error("Invalid email address...!")
  }
  return error;
}