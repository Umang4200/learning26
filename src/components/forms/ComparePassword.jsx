import React from 'react'
import { useForm } from 'react-hook-form'

export default function ComparePassword() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  let pass = watch("password");

  const validationSchema = {
    passwordValidatior: {
      required: {
        value: true,
        message: "Password must be required"
      }
    },
    confirmPasswordValidatior: {
      required: {
        value: true,
        message: "Confirm Password must be required"
      },
      validate: (params) => {
        return (params === pass) || "Confirm Password does not matched"
      }
    }
  };

  const submitHandler = (data) => {
    alert("From Submitted...");
  }


  return (
    <div style={{ textAlign: "center" }}>
      <h1>FormValidation</h1>
      <form action="" onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label htmlFor="password">Password : </label>&nbsp;
          <input type="password" name="password" {...register("password", validationSchema.passwordValidatior)} />
          {errors.password?.message}
        </div>
        <div>
          <label htmlFor="password">Confirm Password : </label>&nbsp;
          <input type="password" name="confirmPassword" {...register("confirmPassword", validationSchema.confirmPasswordValidatior)} />
          {errors.confirmPassword?.message}
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}
