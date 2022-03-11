import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Home () {
  return (
    <div className=''>
      <Navbar />
      <div className=''>
        <h1 className='title'>Student Mentor</h1>
      </div>
      <div className='grid'>
        <div className='gridSide1'>
          {/* <img className="img1" src="https://freesvg.org/img/Buecher-coloured.png" alt="book1"/> */}
        </div>
        <div className='gridSide2'>
          {/* <img className="img2" src="https://freesvg.org/img/1527134288.png" alt="book1"/> */}
        </div>
      </div>

      <div className='studentOffers'>
        <div className='side1'>
          <div>
            <h2>Offer's...</h2>
          </div>
          <ul>
            <li>We do Assignments 100 % pass rate.</li>
            <li>Exam preparations (Face to face on your request).</li>
            <li>We do research.</li>
            <li>Edit your work.</li>
            <li>Provide recording class.</li>
            <li>Provide online class.</li>
            <li>Improving your study skills.</li>
            <li>Unpack your modules content.</li>
            <li>Help with old/previous question papers and memo's.</li>
          </ul>
        </div>
        <div className='side2'>
          <div>
            <h2>Courses...</h2>
          </div>
          <ul>
            <li>Law (LLB)</li>
            <li>Law (BA)</li>
            <li>Criminal Justice</li>
            <li>Project Management</li>
            <li>Tourism Management</li>
            <li>Business Studies</li>
            <li>Accounting Sciences</li>
            <li>Archives and Records Management</li>
            <li>Software Development/Computer Science</li>
            <li>etc...</li>
          </ul>
        </div>
      </div>
      <div className='register'>
        <p>
      <Link to='/sigh-up'>
          <img
            className='img3'
            src='https://www.downloadclipart.net/large/20204-register-here-design.png'
            alt='book1'
          />
        </Link>
        </p>
      </div>
    </div>
  )
}

export default Home
