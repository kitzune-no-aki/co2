import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import './navbar.css'
import Dino from "../../images/Favorites/icons8-dinosaurier-50.png"
import {Link} from "react-router-dom";

const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className='container'>
                <div className='left'>
                    <a href='https://de.wikipedia.org/wiki/Tyrannosaurus' target="_blank" >
                        <img src={Dino}/>
                    </a>
                    <Link to="/"><h2>Miriam<span>Pech</span></h2></Link>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/me">Me</Link></li>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar