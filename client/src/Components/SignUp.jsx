import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
      <nav className='nav1'>
        <div>
          <p>Login </p>
          <Link to='/login'>here</Link>
        </div>

        <div class='box'>
          <div class='inner'>
            <span>And become a member</span>
          </div>
          <div class='inner'>
            <span>Sign up here...</span>
          </div>
        </div>
      </nav>
      <h1 style={{ textAlign: 'center', color: 'white', paddingTop: '1rem' }}>
        Sign Up Page
      </h1>
      <form className='signUpForm'>
        <div class='col-auto'>
          <label>Last Name</label>

          <input type='text' className='form-control' placeholder='Last Name' />
        </div>
        <div>
          <label>First Name</label>

          <input
            type='text'
            className='form-control'
            placeholder='First Name'
          />
        </div>

        <label>Email</label>
        <div class='input-group mb-2'>
          <div class='input-group-prepend'>
            <div class='input-group-text'>@</div>
          </div>
          <input type='email' class='form-control' placeholder='Email' />
        </div>
        <div>
          <label>Password</label>

          <input
            type='password'
            className='form-control'
            placeholder='Password'
          />
        </div>
        <div>
          <label>Contact Number</label>

          <input
            type='number'
            className='form-control'
            placeholder='Contact Number'
          />
        </div>
        <label>Gender</label>
        <div class='form-check'>
          <input
            class='form-check-input'
            type='radio'
            name='gender'
            value='Male'
            checked
          />
          <label class='form-check-label' for='Male'>
            Male
          </label>
        </div>
        <div class='form-check'>
          <input
            class='form-check-input'
            type='radio'
            name='gender'
            value='Female'
          />
          <label class='form-check-label' for='Female'>
            Female
          </label>
        </div>
        <div>
          <label for=''>Choose course</label>
          <select className='form-control'>
            <option selected disabled>
              Select Course
            </option>
            <option>Law (LLB)</option>
            <option>Law (BA)</option>
            <option>Criminal Justice</option>
            <option>Project Management</option>
            <option>Tourism Management</option>
            <option>Business Studies</option>
            <option>Accounting Sciences</option>
            <option>Archives and Records Management</option>
            <option>Software Development/Computer Science</option>
          </select>
        </div>
        
       
        <div>
          <img
            className='img4'
            src='https://www.downloadclipart.net/large/20204-register-here-design.png'
            alt='book1'
          />
        </div>
      </form>
    </div>
  )
}

export default Signup
