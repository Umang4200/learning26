import axios from 'axios';
import React, { useState } from 'react'

function ApiDemo2() {

  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);

  async function getData() {
    try {
      setLoading(true);
      let res = await axios.get("https://dummyjson.com/comments");
      console.log(res.data.comments);
      setComments(res.data.comments);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>ApiDemo 2</h1>
      <button onClick={() => { getData() }}>Get Data</button>
      {loading && <h2>Loading...</h2>}
      <table className='table'>
        <thead>
          {
            comments.length > 0 &&
            <tr>
              <th>body</th>
              <th>id</th>
              <th>likes</th>
              <th>postId</th>
              <th>userName</th>
            </tr>
          }
        </thead>
        <tbody>
          {
            comments?.map((comment) => (
              <tr>
                <td>{comment.body}</td>
                <td>{comment.id}</td>
                <td>{comment.likes}</td>
                <td>{comment.postId}</td>
                <td>{comment.user.username}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default ApiDemo2;