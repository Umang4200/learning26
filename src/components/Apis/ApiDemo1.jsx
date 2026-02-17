import axios from 'axios'
import React, { useState } from 'react'

export default function ApiDemo1() {

    const [message, setMessage] = useState("");
    const [usersData, setUsersData] = useState([]);

    const keys = usersData.length > 0 ? Object.keys(usersData[0]) : [];

    async function getData() {
        let response = await axios.get("https://node5.onrender.com/user/user/");
        console.log(response);
        console.log(response.data);
        console.log(response.data.message);
        console.log(response.data.data);
        console.log(response.data.data[0].name);
        setMessage(response.data.message);
        setUsersData(response.data.data);
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>ApiDemo1</h1>
            <button onClick={() => { getData() }}>GetData</button>
            <h3>{message}</h3>
            <table className='table '>
                <thead>
                    <tr>
                        {
                            keys.map((key) => (<th>{key}</th>))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        usersData.map((data) => (
                            <tr>
                                {
                                    keys.map(key => {
                                        return <td>{data[key]}</td>
                                    })
                                }
                            </tr>
                        ))
                    }
                </tbody>


            </table>


        </div>
    )
}
