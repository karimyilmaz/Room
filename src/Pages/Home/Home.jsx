import React, {useState} from 'react'
import {data_desktop} from '../../data'
import './Home.scss'

import hero2 from '../../images/image-about-dark.jpg' 
import hero3 from '../../images/image-about-light.jpg' 

import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


export const Home = () => {
    const [currentContent, setCurrentContent] = useState(0)
    const [clickedMenu, setClickedMenu] = useState(false)

    const handleLeft = () => {
        setCurrentContent((previous) => previous === 0?  data_desktop.length-1 : previous - 1)
    }
    
    const handleRight = () => {
        setCurrentContent((previous) => previous === data_desktop.length-1? 0 : previous + 1)
    }

    const handleCloseMenu = () => {
        setClickedMenu(false)
    }

    const handleBurgerClick = () => {
        setClickedMenu(true)
    }

    return (
        <React.Fragment>
            <div className ='hero'>
                {clickedMenu && <div className="hero-menu-clicked"></div>}
                
                <div className="row1">
                        
                    <div className="row1-col1">
                        {!clickedMenu && <nav className='navbar'>
                                <MenuIcon id='menuIcon' onClick={handleBurgerClick}/>
                                <a href='' id='logo'>room</a>
                                <div className='navigate-items'>   
                                    <a href=''>home</a>
                                    <a href=''>shop</a>
                                    <a href=''>about</a>
                                    <a href=''>contact</a>
                                </div>
                        </nav>}

                        {clickedMenu && <div className="menu">
                            <CloseIcon id='menuIcon' onClick={handleCloseMenu}/>
                            <ul>
                                <li><a href=''>home</a></li>
                                <li><a href=''>shop</a></li>
                                <li><a href=''>about</a></li>
                                <li><a href=''>contact</a></li>
                            </ul>
                        </div>}

                        <img src={data_desktop[currentContent].image} alt='main-hero'/>
                    </div>
                    
                    <div className="row1-col2" style={{marginTop: clickedMenu? "140px": "0px"}}>
                        <div className='content'>
                            <h2>{data_desktop[currentContent].heading}</h2>
                            <p>{data_desktop[currentContent].description}</p>
                            <button><span>SHOP NOW</span><ArrowRightAltIcon/></button>
                        </div>
                        
                        <div className='navigate'>
                            <div id='left'><KeyboardArrowLeftIcon  fontSize='large' onClick={handleLeft}/></div>
                            <div id='right'><KeyboardArrowRightIcon  fontSize='large' onClick={handleRight}/></div>
                        </div>
                    </div>
                </div>
                
                <div className="row2">
                    <div className="row2-col1"><img src={hero2} alt='hero-1' /></div>
                    <div className="row2-col2">
                        <div>
                            <h5>ABOUT OUR FURNITURE</h5>
                            <p>Our multifunctional collection blends design and function to suit your individual taste.
                            Make each room unique, or pick a cohesive theme that best express your interests and what
                            inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                            or anything in between. Product specialists are available to help you create your dream space.
                            </p>
                        </div>
                    </div>
                    <div className="row2-col3"><img src={hero3} alt='hero-2' /></div>
                </div>

            </div>
        </React.Fragment>
    )
}

