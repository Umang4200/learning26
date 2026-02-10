import React, {useState} from "react";

export default function FormDemo2() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [roll, setRoll] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const [semester, setSemester] = useState("");
  const [college, setCollege] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const rollHandler = (event) => {
    setRoll(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const genderHandler = (event) => {
    setGender(event.target.value);
  };

  const courseHandler = (event) => {
    setCourse(event.target.value);
  };

  const semesterHandler = (event) => {
    setSemester(event.target.value);
  };

  const collegeHandler = (event) => {
    setCollege(event.target.value);
  };

  const mobileHandler = (event) => {
    setMobile(event.target.value);
  };

  const cityHandler = (event) => {
    setCity(event.target.value);
  };

  return (
    <div>
      <h1>Enter Student Details</h1>

      <div>
        <label>Name: </label>
        <input type="text" onChange={nameHandler} /> {name}
      </div>

      <div>
        <label>Email: </label>
        <input type="text" onChange={emailHandler} /> {email}
      </div>

      <div>
        <label>Roll No: </label>
        <input type="text" onChange={rollHandler} /> {roll}
      </div>

      <div>
        <label>Age: </label>
        <input type="number" onChange={ageHandler} /> {age}
      </div>

      <div>
        <label>Gender: </label>
        <input type="text" onChange={genderHandler} /> {gender}
      </div>

      <div>
        <label>Course: </label>
        <input type="text" onChange={courseHandler} /> {course}
      </div>

      <div>
        <label>Semester: </label>
        <input type="text" onChange={semesterHandler} /> {semester}
      </div>

      <div>
        <label>College: </label>
        <input type="text" onChange={collegeHandler} /> {college}
      </div>

      <div>
        <label>Mobile: </label>
        <input type="text" onChange={mobileHandler} /> {mobile}
      </div>

      <div>
        <label>City: </label>
        <input type="text" onChange={cityHandler} /> {city}
      </div>
    </div>
  );
}
