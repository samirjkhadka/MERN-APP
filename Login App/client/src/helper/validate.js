import toast from "react-hot-toast";


export async function usernameValidate(values){
    const errors = usernameverify({}, values);
    return errors
}

export async function passwordValidate(values)
{
  const errors = passwordVerify({}, values);
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
function passwordVerify(errors ={}, values)
{
const specialChars = /[`!@#$%^&*()_+-=[\]{};':"\\|,.<>/?~]/;

  if(!values.password)
  {
    errors.password = toast.error("Password is Required ...!")}
    else if(values.password.includes(' ')){
      errors.password = toast.error("Wrong Password...!");

    }
    else if(values.password.length <4)
    {
      errors.password =toast.error('Password must be more than 4 characters')
    }
    else if(!specialChars.test(values.password))
    {
      errors.password = toast.error('Password must have special characters')
    }
    return errors
  }
