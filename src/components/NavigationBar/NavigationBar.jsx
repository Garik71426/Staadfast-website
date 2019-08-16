import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';

import './NavigationBar.scss';

const NavigationBar = ({ ...props }) => {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ scrollClass, setScrollClass ] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    const navBar = [
        {
            id: 'home',
            title: 'Home'
        }, {
            id: 'service',
            title: 'Services'
        }, {
            id: 'portfolio',
            title: 'Portfolio'
        }, {
            id: 'opensource',
            title: 'Open Source'
        },
        {
            id: 'contact',
            title: 'Contact us'
        }
    ];
    window.onscroll = () => scrollFunction();
    const scrollFunction = () => {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) 
            setScrollClass(true);
        else 
            setScrollClass(false);
    };
    return (
        <Navbar className={`sf-navbar ${scrollClass ? 'sticky' : ''}`} light expand="md">
            <Container>
                <div className = 'sf-navbar--logo'>
                    <NavbarBrand href="#home">Steadfast</NavbarBrand>
                </div>
                <NavbarToggler onClick={toggle} className = 'sf-navbar--toogler' />
                <Collapse isOpen={isOpen} navbar >
                    <Nav navbar className="ml-auto">
                        {navBar.map(item => {
                            return <NavItem key = {item.id}>
                                <NavLink href = {`#${item.id}`} onClick = {toggle} className = 'sf-navbar--menu-item'>{item.title}</NavLink>
                            </NavItem>;
                        })}
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;