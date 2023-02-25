import React, {useState} from 'react'
import './navbar.css'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {Link} from "react-router-dom";



const BurgerNav = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const [active, setActive] = useState(false);
    const [style, setStyle] = useState('styleRow');
    const changeText = () => {
        setActive(!active);
        if (style === 'styleRow') {
            setStyle('styleRowReverse');
        } else {
            setStyle('styleRow')
        }
    };


    return (
        <div className='navbar'>
            <div className={style}>
                <div className='left'>
                    <Link to="/"><h2>CO<span>2</span></h2></Link>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Co2Table">Table</Link></li>
                    <li className='country' onClick={changeText}>{active? 'Europe' : 'Asia'}</li>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default BurgerNav;