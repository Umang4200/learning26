import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function FormDemo1() {
  const {register, handleSubmit} = useForm();
  const [userdata, setUserData] = useState({});
  const [issubmitted, setIssubmitted] = useState(false);

  function submitHandler(data) {
    setUserData(data);
    setIssubmitted(true);
  }
    
  return (
    <div style={{textAlign:"center"}}>
        <h1>Form Demo 1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label>Name : </label>
            <input type='text'{...register("name")}></input>
          </div>
          <div>
            <label>Age</label>
            <input type='text' {...register("age")}></input>
          </div>
          <div>
            <label>Gender</label>  <br></br>
            Male <input type='radio' value="male" {...register("gender")}></input>
            Female<input type='radio' value="female" {...register("gender")}></input>
          </div>
          <div>
            <label>HOBBIES</label> <br></br>
            Writing :<input type='checkbox' value="writing" {...register("hobbies")}></input>
            Reading :<input type='checkbox' value="reading" {...register("hobbies")}></input>
            Travelling :<input type='checkbox' value="travelling" {...register("hobbies")}></input>
          </div>
          <div>
            <input type="submit" value="submit" />
          </div>
        </form>

        {issubmitted && <div style={{marginTop:60}}>
          <h1>-: Output :- </h1>
          <h4>Name : {userdata.name}</h4>
          <h4>Age : {userdata.age}</h4>
          <h4>Gender : {userdata.gender}</h4>
          <strong>
            <span style={{fontSize:20}}>Hobbies : 
              {
                userdata.hobbies.map((hobbie) => (<span> {hobbie}, </span>))
              }
            </span>
          </strong>
        </div>}
    </div>
  )
}
