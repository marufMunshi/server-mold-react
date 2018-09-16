import React from 'react';
import NavSmoothScroll from './NavSmoothScroll';

export default class NavDesktop extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            navBorder: false 
        };
        this.toggleBorder = this.toggleBorder.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.toggleBorder);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.toggleBorder);
    }

    toggleBorder() {
        let headerHeight = document.querySelector('#header').offsetHeight;
        if( window.scrollY >= (headerHeight - 200) ) {
            this.setState(() => {
                return {
                    navBorder: true
                }
            });
        } else {
            this.setState(() => {
                return {
                    navBorder: false
                }
            });
        }
    }

    render() {
        return (
            <nav className="hidden-xs hidden-sm">
                <div
                    className={this.state.navBorder ? 'desktop-nav touch-nav--sticky' : 'desktop-nav'}
                >
                    <ul className="desktop-nav__logo" >
                        <li>
                            <img src="/images/logo.png" alt="Server Mold" />
                        </li>
                    </ul>

                    <div className="desktop-nav__menu-link">
                        <NavSmoothScroll />
                    </div>
                </div>
            </nav>
        );
    }
}