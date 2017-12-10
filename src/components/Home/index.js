import React from 'react';
import { Button } from 'react-bootstrap';

import './index.css';

export const JackPot = ({ children }) => (
  <div className='jackpot'>
    <span className='jackpot-title'>jackpot</span>
    <span className='jackpot-number'> — {children}</span>
  </div>
);

export const TicketInfo = ({ children }) => (
  <div className='ticket-info'>{children}</div>
);

export const TicketPrice = ({ children }) => (
  <div className='ticket-price'>
    <span className='ticket-price-title'>Price: </span>
    <span className='ticket-price-number'>{children} SLT</span>
  </div>
);

export const AvailableTickets = ({ children }) => (
  <div className='available-tickets'>
    <span className='available-tickets-title'>Available: </span>
    <span className='available-tickets-number'>{children}</span>
  </div>
);

export const BuyTicket = ({ onClick }) => (
  <Button onClick={onClick} bsStyle='success' className='buy-ticket'>Buy a ticket</Button>
);
