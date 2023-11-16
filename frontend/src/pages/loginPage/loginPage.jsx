import React from 'react'
import { useState } from 'react'
import './loginPage.css'        

const loginPage = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState(''); 

const handleSubmit =  (e) => {
  e.preventDefault();
}

  return (
    <div></div>
  )
}

export default loginPage