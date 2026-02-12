import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function FormValidationDemo2() {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const [productData, setProductData] = useState({});
    const [isSubmitted, setIssubmitted] = useState(false);

    const validationSchema = {
        productNameValidator : {
            required:{
                value:true,
                message:"Product name must required"
            }
        },
        productPriceValidator : {
            required:{
                value:true,
                message:"Product price must required"
            },
            min:{
                value:1,
                message: "Minimum price of any product should 1 INR"
            }
        },
        descriptionValidator : {
            required:{
                value:true,
                message:"Product description must required"
            },
            minLength:{
                value:10,
                message: "Minimum 10 chars of description required"
            },
            maxLength:{
                value:100,
                message: "Description should not exceed 50 chars"
            }
        }
    };

    function submitHandler(data){
        setProductData(data);
        setIssubmitted(true);
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FormValidationDemo2</h1>
        <form onSubmit={handleSubmit(submitHandler)} action="">
            <div>
                <label htmlFor="">Product Name : </label>&nbsp;
                <input type="text" {...register("productName", validationSchema.productNameValidator)}/>
                {errors.productName?.message}
            </div>
            <div>
                <label htmlFor="">Product Price : </label>&nbsp;
                <input type="text" {...register("productPrice", validationSchema.productPriceValidator)}/>
                {errors.productPrice?.message}
            </div>
            <div>
                
            <label htmlFor="">Description : </label>&nbsp;
            <textarea rows="5" cols="30" {...register("description", validationSchema.descriptionValidator)}/>&nbsp;
            {errors.description?.message}
            </div>
            <div>
                <input type="submit" value="Submit" />
            </div>
        </form>
        {isSubmitted &&         
            <div style={{marginTop:40}}>
                <h2>-: Product Details :-</h2>
                <h4>Product name : {productData.productName}</h4>
                <h4>Price : {productData.productPrice}</h4>
                <h4>Description : {productData.description}</h4>
            </div>}
    </div>
  )
}