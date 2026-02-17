import React from 'react'
import { useForm } from 'react-hook-form'

export default function PasswordValidationDemo() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const password = watch("password", "");

  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[@$!%*?&]/.test(password);
  const hasMinLength = password.length >= 8;


  function getColor(condition) {
    return password ? (condition ? "green" : "red") : "black";
  }

  const validationSchema = {
    PasswordValidator: {
      required: {
        value: true,
        message: "Password must be required"
      },
      pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
        message: "Password format is invalid"
      }
    }
  };

  function submitHandler(data) {
    console.log(data);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>PasswordValidationDemo</h1>

      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Password : </label>&nbsp;
          <input
            type="password"
            {...register("password", validationSchema.PasswordValidator)}
          />
          {errors.password?.message}


          <p style={{ color: getColor(hasUpperCase) }}>
            At least 1 Character in Uppercase
          </p>

          <p style={{ color: getColor(hasLowerCase) }}>
            At least 1 Character in Lowercase
          </p>

          <p style={{ color: getColor(hasNumber) }}>
            At least 1 Number
          </p>

          <p style={{ color: getColor(hasSpecialChar) }}>
            At least 1 Special Character
          </p>

          <p style={{ color: getColor(hasMinLength) }}>
            Minimum 8 Characters Required
          </p>
        </div>

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}