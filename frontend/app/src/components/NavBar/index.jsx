import * as s from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../assets/icons/icons.js';
import { use, useEffect, useState } from 'react';
import '../../assets/icons/icons.js';

function NavBar({ isLoggedIn }) {

    const [isMobileDesign, setIsMobileDesign] = useState(false)
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const [isWideScreen, setIsWideScreen] = useState(true)

    if (isWideScreen === true && window.innerWidth <= 1024) {
        setIsWideScreen(false);
    } else if (!isMobileDesign && window.innerWidth <= 820) {
        setIsMobileDesign(true);
    }

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth >= 1024);
            setIsMobileDesign(window.innerWidth <= 820);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function mobileDesign() {
        return (
            <s.Container>

            <s.NavMobile onClick={() => {
                if (isMenuClicked) {
                    setIsMenuClicked(false);
                }
                else {
                    setIsMenuClicked(true);
                }
            }}>
                <FontAwesomeIcon icon="fa-solid fa-bars" />
            </s.NavMobile>
            {isMenuClicked && 
                <s.NavItems>
                    {!isLoggedIn && 
                     <>
                        <s.NavItemMobile href="/">Home</s.NavItemMobile>
                        <s.NavItemMobile href="/forecast">Forecast</s.NavItemMobile>
                        <s.NavItemMobile href="/login">Login</s.NavItemMobile>
                        <s.NavItemMobile href="/about">About</s.NavItemMobile>
                        <s.NavItemMobile href="/contact">Contact</s.NavItemMobile>
                     </>
                    }
                    {isLoggedIn && 
                     <>
                        <s.NavItemMobile href="/">Home</s.NavItemMobile>
                        <s.NavItemMobile href="/forecast">Forecast</s.NavItemMobile>
                        <s.NavItemMobile href="/about">About</s.NavItemMobile>
                        <s.NavItemMobile href="/logout">Logout</s.NavItemMobile>
                        <s.NavItemMobile href="/contact">Contact</s.NavItemMobile>
                        <s.NavItemMobile href="/profile">Profile</s.NavItemMobile>
                     </>
                    }
                </s.NavItems>}

            <s.Logo href='/'>WebForecast</s.Logo>

            <s.SearchBar>
                {isWideScreen && <s.InputSearchBar type="text" placeholder="Search Forecast" />}
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </s.SearchBar>


        </s.Container>
        )
    }

    function desktopDesign() {
        return (
            <s.Container>
            <s.Logo href='/'>WebForecast</s.Logo>
            <s.Nav>
                {!isLoggedIn && 
                 <>
                    <s.NavItem href="/">Home</s.NavItem>
                    <s.NavItem href="/forecast">Forecast</s.NavItem>
                    <s.NavItem href="/login">Login</s.NavItem>
                    <s.NavItem href="/about">About</s.NavItem>
                    <s.NavItem href="/contact">Contact</s.NavItem>
                 </>
                }
                {isLoggedIn && 
                 <>
                    <s.NavItem href="/">Home</s.NavItem>
                    <s.NavItem href="/forecast">Forecast</s.NavItem>
                    <s.NavItem href="/about">About</s.NavItem>
                    <s.NavItem href="/logout">Logout</s.NavItem>
                    <s.NavItem href="/contact">Contact</s.NavItem>
                    <s.NavItem href="/profile">Profile</s.NavItem>
                 </>
                }
            </s.Nav> 

            <s.SearchBar>
                {isWideScreen && <s.InputSearchBar type="text" placeholder="Search Forecast" />}
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </s.SearchBar>


        </s.Container>
        )
    }
    

    return (
        <>
            {isMobileDesign ? mobileDesign() : desktopDesign()}
        </>
    )
}

export default NavBar;