import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function FormDemo4() {
  const {register, handleSubmit} = useForm();
  const [userdata, setUserData] = useState({});
  const [issubmitted, setIssubmitted] = useState(false);

  function submitHandler(data) {
    setUserData(data);
    setIssubmitted(true);
  }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Form Demo 4</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label>Participant Name : </label>
            <input type='text' {...register("pname")} />
          </div>

          <div>
            <label>Contact No : </label>
            <input type='text' {...register("contact")} />
          </div>

          <div>
            <label>Event Type :</label>
            <select {...register("eventType")}>
              <option value="coding">Coding</option>
              <option value="gaming">Gaming</option>
              <option value="quiz">Quiz</option>
            </select>
          </div>

          <div>
            <label>Time Slot :</label><br/>
            Morning <input type='radio' value="morning" {...register("timeslot")} />
            Afternoon <input type='radio' value="afternoon" {...register("timeslot")} />
          </div>

          <div>
            <label>Facilities Required :</label><br/>
            Wifi <input type='checkbox' value="wifi" {...register("facilities")} />
            Projector <input type='checkbox' value="projector" {...register("facilities")} />
            AC <input type='checkbox' value="ac" {...register("facilities")} />
          </div>

          <div>
            <input type="submit" value="submit" />
          </div>
        </form>

        {issubmitted && <div style={{marginTop:60}}>
          <h1>-: Output :- </h1>
          <h4>Name : {userdata.pname}</h4>
          <h4>Contact : {userdata.contact}</h4>
          <h4>Event : {userdata.eventType}</h4>
          <h4>Time Slot : {userdata.timeslot}</h4>
          <strong>
            <span style={{fontSize:20}}>Facilities :
              {userdata.facilities.map((fac) => (<span> {fac}, </span>))}
            </span>
          </strong>
        </div>}
    </div>
  )
}
