// import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    
    <div style={{display: 'flex',justifyContent: 'space-between',alignItems: 'center'}}>
        <Link to="/">Log in With Email</Link>
        <Link to="/Google">Log in With Google</Link>
        <Link to="/Cars">Cars</Link>
        <Link to="/File">Files</Link>

    </div>
  )
}

export default Navigation