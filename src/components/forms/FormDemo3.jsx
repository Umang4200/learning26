import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function FormDemo3() {
  const {register, handleSubmit} = useForm();
  const [userdata, setUserData] = useState({});
  const [issubmitted, setIssubmitted] = useState(false);

  function submitHandler(data) {
    setUserData(data);
    setIssubmitted(true);
  }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Form Demo 3</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label>Full Name : </label>
            <input type='text' {...register("fullname")} />
          </div>

          <div>
            <label>Email : </label>
            <input type='email' {...register("email")} />
          </div>

          <div>
            <label>Experience (Years) : </label>
            <input type='number' {...register("experience")} />
          </div>

          <div>
            <label>Preferred Location :</label><br/>
            Mumbai <input type='radio' value="mumbai" {...register("location")} />
            Delhi <input type='radio' value="delhi" {...register("location")} />
          </div>

          <div>
            <label>Skills :</label><br/>
            React <input type='checkbox' value="react" {...register("skills")} />
            Node <input type='checkbox' value="node" {...register("skills")} />
            MongoDB <input type='checkbox' value="mongodb" {...register("skills")} />
          </div>

          <div>
            <input type="submit" value="submit" />
          </div>
        </form>

        {issubmitted && <div style={{marginTop:60}}>
          <h1>-: Output :- </h1>
          <h4>Name : {userdata.fullname}</h4>
          <h4>Email : {userdata.email}</h4>
          <h4>Experience : {userdata.experience} years</h4>
          <h4>Location : {userdata.location}</h4>
          <strong>
            <span style={{fontSize:20}}>Skills :
              {userdata.skills.map((skill) => (<span> {skill}, </span>))}
            </span>
          </strong>
        </div>}
    </div>
  )
}
