/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { faArrowLeft ,faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function WatchHistory() {
  return (
    <>
    <div className='mt-5 d-flex justify-content-between align-items-center p-5'>
      <h3>Watch History</h3>
      <h5><Link style={{textDecoration:'none',color:'white'}} to={'/home'}><FontAwesomeIcon className='me-3' icon={faArrowLeft} beat/>Back to Home</Link></h5>
    </div>

    <div className='d-flex justify-content-between align-items-center mx-5 p-4'>
    <table className='table m-5'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Time Stamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>caption</td>
          <td><a href="">dhfjjjf</a></td>
          <td>12:00</td>
          <td>
            <button className='btn btn-danger'><FontAwesomeIcon icon={faTrashCan} /></button>
            </td>
        </tr>
      </tbody>
    </table>
    </div>
    </>
  )
}

export default WatchHistory