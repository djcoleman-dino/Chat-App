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


  return (
    <h1>Hello</h1>
  )
}