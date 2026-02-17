import axios from 'axios'
import React, { useState } from 'react'
import Table from '../tasks/Table';

export default function ApiDemo3() {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [usersData, setUsersData] = useState([]);

    async function getData() {
        try {
            setLoading(true);
            let response = await axios.get("https://node5.onrender.com/user/user/");
            console.log(response);
            console.log(response.data);
            console.log(response.data.message);
            console.log(response.data.data);
            console.log(response.data.data[0].name);
            setMessage(response.data.message);
            setUsersData(response.data.data);
        } finally {
            setLoading(false);
        }
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>ApiDemo3</h1>
            <button onClick={() => { getData() }}>GetData</button>
            {loading  && <h2>Loading...</h2>} 
            
            <h3>{message}</h3>
            {usersData.length > 0 && <Table data={usersData} />}
        </div>
    )
}
