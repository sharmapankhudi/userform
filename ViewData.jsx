import React, { useState } from 'react'

const ViweData = ({ name, setName })  => {
  const [userInput, setUserInput] = useState(" ")
  function onInputChange(e) {
    setUserInput(e.target.value)
  }
  function onButtonClick() {
    setName([...name, userInput])
    setUserInput('')
  }
  return (
    <>
    <label>Name</label> <br />
      <input value={userInput.fname} name="fname" onChange={onInputChange} /> <br />
      <label>Email</label> <br />
      <input value={userInput.email} name="email" onChange={onInputChange} /> <br />
      <button onClick={onButtonClick}>Add</button>
    </>
  )
}
export default  ViweData