import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'

export default function PostApiDemo2() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    async function submitHandler(data) {
        console.log(data.name, "type :", typeof(data.name));
        console.log(data.email, "type :", typeof(data.email));
        console.log(data.password, "type :", typeof(data.password));
        console.log(data.age, "type :", typeof(data.age));
        console.log(data.isActive, "type :", typeof(data.isActive));
        await axios.post("https://node5.onrender.com/user/user/", data);
        alert("Form Submitted...");

    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>PostApiDemo2</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label htmlFor="">Name</label>&nbsp;&nbsp;
                    <input type="text" {...register("name")} />
                </div>
                <div>
                    <label htmlFor="">Email</label>&nbsp;&nbsp;
                    <input type="text" {...register("email")} />
                </div>
                <div>
                    <label htmlFor="">Password</label>&nbsp;&nbsp;
                    <input type="password" {...register("password")} />
                </div>
                <div>
                    <label htmlFor="">Age</label>&nbsp;&nbsp;
                    <input type="number" {...register("age")} />
                </div>
                <div>
                    <label htmlFor="">isActive</label>&nbsp;&nbsp;
                    <input type="radio" id="isActive" value={true}  {...register("isActive")}/>true &nbsp;&nbsp;&nbsp;
                    <input type="radio" id="isActive" value={false}  {...register("isActive")}/>false
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>

        </div>
    )
}
