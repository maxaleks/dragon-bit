import React from 'react';
import { Col } from 'react-bootstrap';

import Dragon from './dragon';
import './index.css';

export const Container = ({ children }) => (
  <div className='container'>{children}</div>
);

export const Title = ({ children }) => (
  <span className='title'>{children}</span>
);

export const UnitCard = ({ unit, children, onClick }) => (
  <Col xs={6} md={4} lg={3}>
    <div className='unit-card' onClick={onClick}>
      <Dragon dragon={unit} />
      <div>
        <div>
          <span>Health: </span>
          <span>{unit.health}</span>
        </div>
        <div>
          <span>Attack: </span>
          <span>{unit.attack}</span>
        </div>
        <div>
          <span>Defence: </span>
          <span>{unit.defence}</span>
        </div>
      </div>
      {children}
    </div>
  </Col>
);

export const Header = ({ children }) => (
  <div className='header'>{children}</div>
);

export const Layout = ({ children }) => (
  <div className='layout'>{children}</div>
);

export const Tab = ({ children }) => (
  <div className='tab'>{children}</div>
);
