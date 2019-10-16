import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './axiosWithAuth';

export default function Request() {
  const [request, setRequest] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/message")
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      });
  }, [])

  const handleChange = e => {
    e.preventDefault();
  }


  return (
    <div>
      <ul id="messages"></ul>
      <form action="/" method="POST" id="chatForm" onSubmit={handleChange}>
        <input id="txt" autoComplete="off" autoFocus="on" placeholder="type your message here..." /><button>Send</button>
      </form>
    </div>
  )
}