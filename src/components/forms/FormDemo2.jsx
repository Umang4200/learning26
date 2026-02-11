import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function FormDemo2() {
  const {register, handleSubmit} = useForm();
  const [userdata, setUserData] = useState({});
  const [issubmitted, setIssubmitted] = useState(false);

  function submitHandler(data) {
    setUserData(data);
    setIssubmitted(true);
  }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Form Demo 2</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label>Student Name : </label>
            <input type='text' {...register("studentName")} />
          </div>

          <div>
            <label>Roll No : </label>
            <input type='text' {...register("rollno")} />
          </div>

          <div>
            <label>Course : </label>
            <select {...register("course")}>
              <option value="BCA">BCA</option>
              <option value="MCA">MCA</option>
              <option value="B.Tech">B.Tech</option>
            </select>
          </div>

          <div>
            <label>Shift : </label><br/>
            Morning <input type='radio' value="morning" {...register("shift")} />
            Evening <input type='radio' value="evening" {...register("shift")} />
          </div>

          <div>
            <label>Subjects :</label><br/>
            MERN <input type='checkbox' value="MERN" {...register("subjects")} />
            Java <input type='checkbox' value="Java" {...register("subjects")} />
            Python <input type='checkbox' value="Python" {...register("subjects")} />
          </div>

          <div>
            <input type="submit" value="submit" />
          </div>
        </form>

        {issubmitted && <div style={{marginTop:60}}>
          <h1>-: Output :- </h1>
          <h4>Name : {userdata.studentName}</h4>
          <h4>Roll No : {userdata.rollno}</h4>
          <h4>Course : {userdata.course}</h4>
          <h4>Shift : {userdata.shift}</h4>
          <strong>
            <span style={{fontSize:20}}>Subjects :
              {userdata.subjects.map((sub) => (<span> {sub}, </span>))}
            </span>
          </strong>
        </div>}
    </div>
  )
}
