import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const NavSmoothScroll = () => {
    return (
        <ul>
            <li>
                <AnchorLink href="#header">Home</AnchorLink>
            </li>
            <li>
                <AnchorLink offset='50' href="#plans">Hosting Services</AnchorLink>
            </li>
            <li>
                <AnchorLink offset='50' href="#domain-search">Domain Search</AnchorLink>
            </li>
            <li>
                <AnchorLink offset='50' href="#footer">Contact Us</AnchorLink>
            </li>
        </ul>
    );
};

export default NavSmoothScroll;