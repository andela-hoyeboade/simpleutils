import React from "react";
import {Col} from "react-bootstrap";
import { Link } from 'react-router-dom'
import '../../styles/components/main/UtilApp.css';
import defaultAppImage from '../../assets/images/util-default-image.png'

const UtilApp = ({title, description, slug, image}) => (
    <Col xs={4} sm={3} className='UtilAppCard'>
      <div className="card" style={{width: '22rem'}}>
        <img className="card-img-top" src={image || defaultAppImage} alt="App" style={{minHeight: '50px', maxHeight: '50px'}}/>
          <div className="card-body">
            <p className="card-title overflow"><strong>{title}</strong></p>
            <p className="card-text overflow">{description}</p>
            <Link to={'/apps/' + slug} className="btn btn-primary">Use App</Link>
          </div>
      </div></Col>
  );

export default UtilApp;