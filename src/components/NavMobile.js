import React from 'react';
import NavSmoothScroll from './NavSmoothScroll';

class NavMobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navShow: false,
            navBorder: false 
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleBorder = this.toggleBorder.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.toggleBorder);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.toggleBorder);
    }

    toggleNav() {
        this.setState((prevState) => {
            return {
                navShow : !prevState.navShow
            }
        });
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
            <nav 
            className={this.state.navBorder ? 'touch-nav hidden-md hidden-lg touch-nav--sticky' : 'touch-nav hidden-md hidden-lg'}
            
            >
                <div className="touch-nav__show">
                    <ul className="touch-nav__logo">
                        <li>
                            <img src="/images/logo.png" alt="Server Mold"/>
                        </li>
                    </ul>
    
                        <ul className="touch-nav__hamburger-menu" onClick={this.toggleNav}>
                            <li>
                                <i className="ion-android-menu"></i>
                            </li>
                        </ul>
                </div>
    
                <div 
                    className={
                        this.state.navShow ? 'touch-nav__menu-link hidden-toggle' : 'touch-nav__menu-link'
                    }
                    onClick={this.toggleNav}
                >
                    <NavSmoothScroll />
                </div>
            </nav>
        );
    }
}

export default NavMobile;