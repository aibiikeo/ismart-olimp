import React from 'react';
import { Link } from "react-router-dom";
import { FaWhatsapp, FaEnvelope} from 'react-icons/fa';
import '../styles/navbar.css';
import logo from '../images/logo1.png'


const navbar = () => {
    return (
        <div className='navigation-container'>
            <nav className='navbar'>
            <img src={logo} alt='logo' id='logo'/>
                <a href='#organization'>Организация</a>
                <a href='#competitions'>Соревнования</a>
                <a href='#sponsors'>Спонсоры</a>
                <a href='https://mycolor.space/?hex=%23FFFE03&sub=1'><button className='regst-button'>Регистрация</button></a>
                <FaWhatsapp id='icons-wh'/>
                <FaEnvelope id='icons-wh'/>
            </nav>
        </div>
    )
}

export default navbar