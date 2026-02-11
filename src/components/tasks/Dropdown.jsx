import React, { useState } from 'react'

export default function Dropdown() {
    const [id, setId] = useState("");
    let data = [
        {id:1, country:"India", state:["Gujarat", "Maharashtra", "Rajasthan"]},
        {id:2, country:"USA", state:["California", "Florida", "Texas"]},
        {id:3, country:"UK", state:["England", "Scotland", "Wales"]},
    ];
    const selectedCountry = data.find((obj) => obj.id == id);
    return (
        <div>
            <h1>Dropdown</h1>
            <select onChange={(e) => setId(e.target.value)}>
                <option value="">----Select Country----</option>
                {
                    data.map((obj) => (
                        <option key={obj.id} value={obj.id}>
                            {obj.country}
                        </option>
                    ))
                }
            </select>
            <br /><br />
            <select>
                <option>----Select State----</option>
                {
                    selectedCountry?.state.map((st) => (
                        <option>{st}</option>
                    ))
                }
            </select>
        </div>
    )
}