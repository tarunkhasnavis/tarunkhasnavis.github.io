import React, {useState, useEffect} from 'react'
import './css/Header.scss'
import { Link } from "react-scroll";
import { motion } from "framer-motion"

function Header({ toggle }) {
    const [clicked, setClicked] = useState(false);
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY;
            if (scrollCheck != scroll) {
                setScroll(scrollCheck);
            }
        })
    })

    return (
        <motion.div className={((scroll > 0 || clicked) ? 'header__container' : 'header__container__invisible')} initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ delay: 3, duration: 1}}>
            <div className="header__mobile__container">
                <div className="header__mobile__content">
                    <span
                        className={clicked ? "fa fa-times" : "fa fa-bars"}
                        onClick={() => setClicked(!clicked)}
                    ></span>
                    <motion.h1 className="header__mobile__title">Tarun Khasnavis.</motion.h1>
                    <input id="toggle" className="toggle__mobile" type="checkbox" onClick={toggle}></input>
                </div>
            </div>
            
            <div className={clicked ? "header__mobile" : "header"}>  
                <div className="header__nav">
                    <ul className="header__navList">
                        <li className="header__navItem">
                            <Link
                                className="nav__link"
                                activeClass="active"
                                to="project"
                                spy={true}
                            >
                                <div className={((scroll > 350 && scroll < 1280) ? 'nav__current' : 'nav__topic')}>Projects</div>
                            </Link>
                        </li>
                        <li className="header__navItem">
                            <Link
                                className="nav__link"
                                activeClass="active"
                                to="about"
                                spy={true}
                            >
                                <div className={((scroll > 1280 && scroll < 2250) ? 'nav__current' : 'nav__topic')}>About</div>
                            </Link>                        
                        </li>
                        <li>
                            <input id="toggle" className={clicked ? "toggle hidden" : "toggle"}type="checkbox" onClick={toggle}></input>
                        </li>
                        <li className={clicked ? "navbar__socials" : "navbar__socials hidden"}>
                            <div className="nav__topic">
                                <a
                                href="https://github.com/tarunkhasnavis"
                                target="_blank"
                                aria-label="GitHub"
                                >
                                <motion.i
                                    whileHover={{ scale: 1.15 }}
                                    className="fa fa-github"
                                ></motion.i>
                                </a>
                                <a
                                href="https://www.linkedin.com/in/tarunkhasnavis/"
                                target="_blank"
                                aria-label="LinkedIn"
                                >
                                <motion.i
                                    whileHover={{ scale: 1.15 }}
                                    className="fa fa-linkedin"
                                ></motion.i>
                                </a>
                                <a
                                href="mailto:khasnavistarun@gmail.com"
                                target="_blank"
                                aria-label="Email"
                                >
                                <motion.i
                                    whileHover={{ scale: 1.15}}
                                    className="fa fa-envelope"
                                ></motion.i>
                                </a>
                                <a
                                href="https://www.instagram.com/tarunkhasnavis/"
                                target="_blank"
                                aria-label="Instagram"
                                >
                                <motion.i
                                    whileHover={{ scale: 1.15 }}
                                    className="fa fa-instagram"
                                ></motion.i>
                                </a>
                            </div>
                        </li>
                    </ul>
                    <div className={clicked ? "logo hidden" : "logo"}>
                        <a href="#"><div className="logo_text">Tarun Khasnavis.</div></a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Header