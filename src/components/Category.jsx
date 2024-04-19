/* eslint-disable no-unused-vars */
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import VideoCard from '../components/VideoCard'


function Category() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <div className='d-flex justify-content-center align-items-center'></div>
    <button className='btn btn-warning w-100' onClick={handleShow}>Add New Category</button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><FontAwesomeIcon icon={faPen} className='me-3 text-warning'/>Add new Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='border rounded p-3 border-secondary'>
            <p>Category Name</p>
          <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Enter the Category Name" />
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-dark' onClick={handleClose}>
            Cancel
          </button>
          <button className='btn btn-warning' onClick={handleClose}>
            Add
          </button>
        </Modal.Footer>
      </Modal>

      <div className='border border-secondary w-100 p-3 rounded mt-5'>
        <div className='d-flex justify-content-center align-items-center'>
          <p>category name</p>
          <button className='btn btn-danger ms-auto'><FontAwesomeIcon icon={faTrashCan} /></button>
        </div>
      <VideoCard/>
      </div>
</>
  )
}

export default Category