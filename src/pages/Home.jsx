/* eslint-disable no-unused-vars */
import React from 'react'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'
import { Link } from 'react-router-dom'
import './Home.css'


function Home() {
  return (
    <>
    <div className='container d-flex justify-content-between align-items-center mt-5'>
      <Add/>
      <Link id="link" /* to={/watchHistory} */>Watch History</Link>
    </div>
    <div className='row d-flex p-3 justify-content-between align-items-center w-100'>
        <div className="col-md-9">
          <h4>All Videos</h4>
          <View/>
        </div>
        <div className="col-md-3">
          <Category/>
        </div>
    </div>
    </>
  )
}

export default Home