import React from "react";
import { Container } from "react-bootstrap";

import InfiniteCarousel from 'react-leaf-carousel';

//import Assets
import ImageBoy1 from '../../assets/boys/boy1.png';

//import CSS
import './meet.css';

import {
    BsArrowLeftShort,
    BsArrowRightShort
} from 'react-icons/bs';
class Meet extends React.Component {
    render() {

        return (
            <div className='meet-control'>
                <Container>
                    <header style={{ textAlign: "center", color: "white" }}>
                        <br /> <span style={{ fontStyle: "normal" }}></span>
                    </header>
                </Container>
                <InfiniteCarousel
                    breakpoints={[
                        {
                            breakpoint: 500,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                            },
                        },
                        {
                            breakpoint: 1280,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                            },
                        },
                    ]}
                    dots={false}
                    arrows={true}
                    showSides={true}
                    sidesOpacity={0.5}
                    sideSize={0.1}
                    slidesToScroll={1}
                    slidesToShow={4}
                    scrollOnDevice={true}
                >
                    <div>
                        <img className="caroImg" src={"https://github.com/powerplantsnft/website/blob/main/src/assets/d.jpeg?raw=true"} alt='boy2' />
                    </div>
                    <div>
                        <img className="caroImg" src={"https://github.com/powerplantsnft/website/blob/main/src/assets/g.jpeg?raw=true"} alt='boy1' />
                    </div>
                    <div>
                        <img className="caroImg" src={"https://github.com/powerplantsnft/website/blob/main/src/assets/c.jpeg?raw=true"} alt='boy1' />
                    </div>
                    <div>
                        <img className="caroImg" src={"https://github.com/powerplantsnft/website/blob/main/src/assets/f.jpeg?raw=true"} alt='boy2' />
                    </div>
                    <div>
                        <img className="caroImg" src={"https://github.com/powerplantsnft/website/blob/main/Cert.jpeg?raw=true"} alt='boy1' />
                    </div>
                    <div>
                        <img className="caroImg" src={"https://github.com/powerplantsnft/website/blob/main/src/assets/e.jpeg?raw=true"} alt='boy1' />
                    </div>
                    <div>
                        <img className="caroImg" src={"https://github.com/powerplantsnft/website/blob/main/src/assets/b.jpeg?raw=true"} alt='boy2' />
                    </div>





                </InfiniteCarousel>

                {/* <Container>
                    <div className='slide-arrows'>
                        <a>
                            <BsArrowLeftShort size={40} />
                        </a>
                        <a>
                            <BsArrowRightShort size={40} />
                        </a>
                    </div>
                </Container> */}
                {/* <Container>
                    <div className='remaining'>
                        <span>0</span>
                        <p>SPOOKIES REMAINING</p>
                    </div>
                </Container> */}
            </div>

        );
    }
}

export default Meet;