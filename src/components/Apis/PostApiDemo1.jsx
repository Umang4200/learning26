import axios from 'axios'
import React from 'react'

export default function PostApiDemo1() {
    async function insertData() {
        const data = {
            name: "Abc",
            email: "abc@gmail.com",
            password: "abc@123",
            age: 25,
            isActive: true
        }

        try {
            let response = await axios.post("https://node5.onrender.com/user/user/", data);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }


    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>PostApiDemo1</h1>
            <button onClick={() => { insertData() }}>insertData</button>
        </div>
    )
}
