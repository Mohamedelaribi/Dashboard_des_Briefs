import React from 'react'
import Nav from '../Header/Nav'
function EditeBrief() {
  return (

    <div>
        <Nav/>
        <h1>edit Brief</h1>
        <form  >
            <input  type="text"  id='name' />
            <input  type="text"  id='detail' />
            <input  type="date"  id='startDate' />
            <input  type="date"  id='endDate' />
            <button type='submit'>send</button>
        </form>
    </div>
  )
}

export default EditeBrief