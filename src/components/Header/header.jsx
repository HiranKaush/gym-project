import '../../styles/header.css'
import logo from '../../assests/logo.png'
import React from 'react'

import { HiMenu } from "react-icons/hi";

const nav__Links = [
    {
        path :'#',
        display:'Home'
    },
    {
        path :'#',
        display:'Shedule'
    },
    {
        path :'#',
        display:'Classes'
    },
    {
        path :'#',
        display:'Pricing'
    },
]

const header = () => {
  return (
    <header className='header'> 
        <div className="container">
            <div className="nav__wrapper">
                <div className="logo">
                    <div className="logo__img"><img src={logo} alt="" /></div>
                    <h2>Lotus Fitness</h2>
                </div>

                {/* navigation*/}
                <div className="navigation">
                    <ul className="menu">
                        {
                            nav__Links.map(item=>(
                                <li className='nav__items'><a href={item.path}>{item.display}</a></li>
                            ))
                        }
                    </ul>
                </div>
                {/* nav right*/}
                    <div className="nav__right">
                        <button className="register__btn">Register<i class="ri-menu-fill"></i></button>
                        <span className="mobile__menu"><HiMenu /></span>
                    </div>
            </div>
        </div>
    </header>
  )
}

export default header