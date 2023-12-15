import React from 'react';
import { Link } from 'react-router-dom';

export default function Headers() {
  return (
    <header style={headerStyle}>
        <h1>TodoList</h1>
        <div style={links}>
            <Link style={linkStyle} to='/'>Home</Link>
            <Link style={linkStyle} to='/about'>About</Link>
        </div>
        
    </header>
  )
}

const headerStyle = {
    background: 'black',
    color: 'white',
    textAlign: 'center',
    padding: '10px'
}

const links = {
    display: 'flex',
    justifyContent: 'space-around'
}

const linkStyle = {
    textDecoration: 'none',
    color: '#fff'
}