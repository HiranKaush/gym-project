import '../styles/header.css'
import logo from '../assests/logo.png'
import React from 'react'

const header = () => {
  return (
    <header> 
        <div className="container">
            <div className="nav__wrapper">
                <div className="logo">
                    <div className="logo__img"><img src={logo} alt="" /></div>
                    <h2>FitBody</h2>
                </div>
            </div>
        </div>
    </header>
  )
}

export default header