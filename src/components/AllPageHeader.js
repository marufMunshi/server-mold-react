import React from 'react';
import { Link } from 'react-router-dom';

export default class AllPageHeader extends React.Component {
    render() {
        return (
            <header>
                <nav className="touch-nav touch-nav--sticky hidden-md hidden-lg">
                    <div className="touch-nav__show">
                        <ul className="touch-nav__logo">
                            <li>
                                <img src="/images/logo.png" alt="Server Mold" />
                            </li>
                        </ul>

                        <ul className="home-menu">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <nav className="hidden-xs hidden-sm">
                    <div className="desktop-nav touch-nav--sticky">
                        <ul className="desktop-nav__logo" >
                            <li>
                                <img src="/images/logo.png" alt="Server Mold" />
                            </li>
                        </ul>

                        <div className="desktop-nav__menu-link">
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}