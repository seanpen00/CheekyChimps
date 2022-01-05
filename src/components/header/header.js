import React from "react";


import il from '../../assets/CenterPic.png'
import il2 from '../../assets/Pink Caladium.png'
// import { Container, Row, Col } from "react-bootstrap";

//import css
import './header.css';

import {
    Container,
    Navbar,
    Nav,
    Row,
    Col
} from 'react-bootstrap';


import './footer.css';

//import social icons
import {
    BsTwitter,
    BsDiscord,
    BsInstagram
} from 'react-icons/bs';
//import components
import YButton from "../basic/YButton";

function onMintClick(){
    document.getElementById("mint").scrollIntoView();
}
function onHomeClick() {
    console.log("---")
    document.getElementById("home").scrollIntoView();
}
function onTeamClick() {
    document.getElementById("team").scrollIntoView();
}
function onWhiteClick() {
    window.location.href="https://whitepaper.powerplantsnft.com/"
}
function onGalleryClick(){
    window.location.href="https://powerplantsnft.com/"
}
function onShopClick(){
    window.location.href="https://powerplantsnft.com/";
}
function onWhitelistClick() {
    document.getElementById("whitelist").scrollIntoView();
}

function onSocialsClick() {
    document.getElementById("socials").scrollIntoView();
}

function onOpenSeaClick() {
    window.open("https://opensea.io/");
}
class Header extends React.Component {
    render() {
        return (
            <>
                <div className='header-control' id="home">
                    <Navbar collapseOnSelect expand="lg">
                        <Container>
                            <Navbar.Brand href="#home" style={{ paddingTop: 10 }}>
                                <img src={il} width={150} height={150} alt='logo' />
                            </Navbar.Brand>
                            <Navbar.Toggle style={{backgroundColor: "#32CD32"}}aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                </Nav>
                                <Nav style={{ borderRadius: 0, padding: "0 20px 0 20px" }}>
                                    <Nav.Link className="bruh nav-link-btn" onClick={onHomeClick} >Home</Nav.Link>
                                    <Nav.Link className="bruh nav-link-btn" onClick={onShopClick} >Roadmap</Nav.Link>
                                    <Nav.Link className="bruh nav-link-btn" onClick={onShopClick} >Team</Nav.Link>
                                    <Nav.Link className="bruh nav-link-btn" onClick={onOpenSeaClick} >OpenSea</Nav.Link>

                                    <div style={{display: "flex", textAlign: "center", justifyContent: "center", padding:"0em" }}>
                                        <text className="mint-button" onClick={onMintClick}>MINT</text>
                                    </div>
                                    {/* <text style={{ width: 20 }}></text>
                                    <div>
                                        <a style={{ textDecoration: "none", color: "white", paddingRight: 10 }} target="_blank" rel="noopener noreferrer" href="https://instagram.com/"> <BsInstagram size={32} /></a>
                                        <a style={{ textDecoration: "none", color: "white", paddingLeft: 10, paddingRight: 10 }} target="_blank" rel="noopener noreferrer" href="https://twitter.com/"> <BsTwitter size={32} /></a>
                                        <a style={{ textDecoration: "none", color: "white", paddingLeft: 10 }} target="_blank" rel="noopener noreferrer" href="https://discord.gg"> <BsDiscord size={32} />   </a>
                                    </div> */}

                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <div className='header-content'>
                        {/* <h1><img className="thePicture" src={il} /></h1> */}
                        <Container>
                            <Row>
                                <Col md={6} xs={12} className='about-description' style={{ textAlign: "left" }}>
                                    <header>
                                        <span className="home-title" >CHEEKY CHIMPS<br /> CLUB</span>
                                        {/* <span style={{ color: "white", fontStyle: "normal" }}>No watering required.<br /></span> */}
                                    </header>
                                    <p className="home-title-content">
                                        Coming soon.
                                    </p>
                                    <div style={{paddingTop:"2em", display: "flex", textAlign: "center"}}>
                                        <text className="mint-button" onClick={onMintClick}>MINT</text><p style={{ color: "white", paddingTop: 25, paddingLeft: 10 }}> 0.03 ETH</p>
                                    </div>
                                    <div className="social-button-container">
                                        <a className="social-button" href="https://discord.gg/f2jdaTUesH">
                                            <img src="https://static.wixstatic.com/media/9529be_9bd7b35f04334b70aaafeee921e3c67f~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/9529be_9bd7b35f04334b70aaafeee921e3c67f~mv2.webp" alt=""/>
                                        </a>
                                        <a className="social-button" href="https://twitter.com/PowerPlants_">
                                            <img src="https://static.wixstatic.com/media/9529be_540ad1f79c0e4da587e2095f0226c14c~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/9529be_540ad1f79c0e4da587e2095f0226c14c~mv2.webp" alt=""/>
                                        </a>
                                        <a className="social-button" href="http://instagram.com/powerplantsnft">
                                            <img src="https://static.wixstatic.com/media/9529be_2bfd2ec19e0045c69c757f9e6d0bc4fe~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/9529be_2bfd2ec19e0045c69c757f9e6d0bc4fe~mv2.webp" alt=""/>
                                        </a>
                                    </div>


                                    {/* <div><YButton text='COMING SOON' /></div> */}
                                </Col>
                                <Col md={6} xs={12} className='image-control'>
                                    <img style={{ borderRadius: 0 }} src={il2} alt='about gif' />
                                </Col>
                            </Row>
                        </Container>

                    </div>
                    <div></div>
                </div>
            </>
        );
    }
}

export default Header;