/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function VideoCard() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card style={{ width: '100%' }} className='mt-4'>
      <Card.Img variant="top" src="https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/c/b/d/small-pathan-shah-rukh-khan-bollywood-hindi-movie-poster-small-original-imagmt3dgxh7avyg.jpeg?q=20&crop=false" width={'100%'} height={'300px'}/>
      <Card.Body className='d-flex'>
        <Card.Text>
          movie
        </Card.Text>
        <Button variant="danger" className='ms-auto' onClick={handleShow}><FontAwesomeIcon icon={faTrashCan} /></Button>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="392" src="https://www.youtube.com/embed/il7oBI7lpNU?autoplay=1" title="Sana - Aaro Nee (Music Video) | Sandeep Pradeep, Gopika Ramesh | Sharan Rajamohanan | Think Specials" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default VideoCard