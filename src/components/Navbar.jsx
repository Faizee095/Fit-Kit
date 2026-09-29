import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/NewLogo.png';

const Navbar = () => (
  <Stack className="site-header" direction="row" justifyContent="space-between" alignItems="center" px="20px">
    <Link to="/">
      <img src={Logo} alt="Fit-Kit home" style={{ width: '48px', height: '48px' }} />
    </Link>
    <Stack
      direction="row"
      gap="clamp(14px, 3vw, 36px)"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
      className='nav'
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
      <Link to="/bmi" style={{ textDecoration: 'none', color: '#3A1212' }}>BMI</Link>
      <Link to="/calory" style={{ textDecoration: 'none', color: '#3A1212' }}>Calory</Link>
      <Link to="/premium" style={{ textDecoration: 'none', color: '#3A1212' }}>Premium</Link>
    </Stack>
  </Stack>
);

export default Navbar;
