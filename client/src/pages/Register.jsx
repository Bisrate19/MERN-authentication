import React from 'react'

export default function Register() {
  
  const registerUser=(e)=>{
    e.preventDefault()
  }
  
  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input type='text' placeholder='enter name...'/>
        <label>Email</label>
        <input type='email' placeholder='enter email...'/>

        <label>Password</label>
        <input type='password' placeholder='enter password...'/>
<buttom type="submit">Submit</buttom>
      </form>
    </div>
  )
}
