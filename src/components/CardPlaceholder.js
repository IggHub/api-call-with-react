import React, {Component} from 'react';
import {Grid, Row, Col, Thumbnail, Image} from 'react-bootstrap';
import './Placeholder.css';

const CardPlaceholder = () => (
  <Grid>
    <Row>
      <Col xs={12} sm={6} md={4}>
        <div className="placeholder-card">
          <div className="placeholder-card-image"></div>
          <div className="placeholder-card-title"></div>
          <div className="placeholder-card-content-1"></div>
          <div className="placeholder-card-content-2"></div>
          <div className="placeholder-card-content-3"></div>
        </div>
      </Col>
      <Col xs={12} sm={6} md={4}>
        <div className="placeholder-card">
          <div className="placeholder-card-image"></div>
          <div className="placeholder-card-title"></div>
          <div className="placeholder-card-content-1"></div>
          <div className="placeholder-card-content-2"></div>
          <div className="placeholder-card-content-3"></div>
        </div>
      </Col>
    </Row>
  </Grid>
)

export default CardPlaceholder;
