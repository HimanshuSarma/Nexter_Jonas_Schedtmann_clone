import React from 'react';
import './Footer.css';
import FooterBtn from './FooterBtn';

const btnsArr = ["find your dream home", 
"request proposal", "download home planner", "contact us", "submit your property",
"come work with us!"];

function Footer () {
    const btns = btnsArr.map((btn, index) => {
        return (
            <React.StrictMode key={index}>
                <FooterBtn text={btn}/>
            </React.StrictMode>
        )
    })
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-content-btns">
                        {btns}
                    </div>
                    <div className="footer-content-copyright">
                        <p className="footer-content-copyright-para">
                            © Copyright 2017 by Jonas Schmedtmann. Feel free to use this project for your own purposes. This does NOT apply if you plan to produce your own course or tutorials based on this project.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;