import { Link } from "gatsby"
import React from "react"
import Icon from '../common/icon'
import Data from '../../../content/header.yaml';

class Header extends React.Component {

    constructor(props){
        super(props);

        this.container = null;
        this._toggle = this._toggle.bind(this);
    }

    _toggle(){
        if (
            document.body.scrollTop > 80 ||
            document.documentElement.scrollTop > 80
        ) {
            this.container.classList.add('is-active');
        } else {
            this.container.classList.remove('is-active');
        }
    }

    componentDidMount(){

        if (!this.container.classList.contains('is-active')) {
            window.addEventListener('scroll', this._toggle, false)
            this._toggle();
        }
    }

    componentWillUnmount() {
       window.removeEventListener('scroll', this._toggle, false)
    }

    render() {
        return (
        <header className="c-header js-header" ref={c => (this.container = c)}>
            <div className="c-header__logos">
                <svg viewBox="0 0 474 163" xmlns="http://www.w3.org/2000/svg" className="c-header__thd">
                    <use xlinkHref="#icons_thd-symbol" x="0" y="0" width="163" height="163"
                         fill="#d13245"/>
                    <use xlinkHref="#icons_thd-text" x="182" y="24" width="292" height="115"/>
                </svg>
                <Link to="/" rel="home" className="c-header__logo">
                    <Icon name="soldat" className="c-header__logo-inner" raw/>
                </Link>
            </div>
            <nav className="c-header__navigation">
                <input type="checkbox" className="c-header__toggle" id="c-header__toggle"/>
                <label htmlFor="c-header__toggle" className="c-header__hamburger">
                    <span className="c-header__hamburger-line c-header__hamburger-line--1"/>
                    <span className="c-header__hamburger-line c-header__hamburger-line--2"/>
                    <span className="c-header__hamburger-line c-header__hamburger-line--3"/>
                </label>
                <ul className="c-header__list">
                    {Data.links.map(({title, path, internal}) => (
                        <li className="c-header__list-el">
                            {internal ?
                                <Link to={path} className="c-header__link">{title}</Link>
                                :
                                <a href={path} className="c-header__link">{title}</a>
                            }
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
        );
    }
}

export default Header
