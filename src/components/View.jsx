/* eslint-disable no-unused-vars */
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import VideoCard from './VideoCard'

function View() {
  return (
   <Row className='w-100'>
    <Col sm={12} md={6} lg={4} xl={3}>
        <VideoCard/>
    </Col>
    <Col sm={12} md={6} lg={4} xl={3}>
        <VideoCard/>
    </Col>
    <Col sm={12} md={6} lg={4} xl={3}>
        <VideoCard/>
    </Col>
    <Col sm={12} md={6} lg={4} xl={3}>
        <VideoCard/>
    </Col>
   </Row>
  )
}

export default View