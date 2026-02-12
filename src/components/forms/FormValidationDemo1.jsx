import React from 'react'
import { useForm } from 'react-hook-form'

export default function FormValidationDemo1() {
  const {register, handleSubmit, formState:{errors}} = useForm();

  let validationSchema = {
    nameValidator: {
      required:
      {
        value:true, 
        message:"Name must be required"
      }
    },
    ageValidator: {
      required:
      {
        value:true, 
        message:"Age must be required"
      },
      max: {
        value: 65,
        message: "maximum age is 65"
      },
      min: {
        value: 18,
        message: "minimum age is 18"
      }
    },
    addressValidator: {
      required:{
        value:true,
        message: "Address must be required"
      },
      minLength:{
        value:10,
        message: "Address must contain minimum 10 characters"
      },
      maxLength:{
        value:50,
        message: "Address should not exceed 50 characters"
      }
    }
  };

  function submitHandler(data){
    alert("Form Submitted");
  }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FormValidationDemo1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label htmlFor="">Name : </label>&nbsp;
            <input type="text" {...register("name", validationSchema.nameValidator)}/>&nbsp;
            {errors.name?.message}
          </div>
          <div>
            <label htmlFor="">Age : </label>&nbsp;
            <input type="text" {...register("age", validationSchema.ageValidator)}/>&nbsp;
            {errors.age?.message}
          </div>
          <div>
            <label htmlFor="">Address : </label>&nbsp;
            <textarea rows="5" cols="30" {...register("address", validationSchema.addressValidator)}/>&nbsp;
            {errors.address?.message}
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
    </div>
  )
}
