import React from 'react'

function Dashboard () {
  return (
    <div>
      <navbar className='nav'>
        <h1>Hi "UserName", welcome back</h1>
      </navbar>
      <h3 style={{paddingTop:"2rem"}}>Choosen Course</h3>
      <div>
        <form className='dashboardForm' style={{paddingTop:"2rem"}}>
        <div class='form-group'>
          <label for='exampleFormControlFile1'>Choose file</label>
          <div>
            <input
              type='file'
              class='form-control-file'
              id='exampleFormControlFile1'
              multiple
            />
          </div>
        </div>
        <div class='form-group'>
          <label for='exampleFormControlTextarea1'>Message</label>
          <textarea
            class='form-control'
            id='exampleFormControlTextarea1'
            rows='3'
          ></textarea>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Dashboard
