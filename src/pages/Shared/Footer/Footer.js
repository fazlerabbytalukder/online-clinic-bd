import React from "react";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import "./Footer.css";
import logo from "../../../images/logo/logo.png";

const Footer = () => {
    return (
        <div>
            <div className="footer text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img height="80px" width="80px" src={logo} alt="" />
                            <p>
                                Online clinic bd is a online platform where you can take
                                appointment to the doctor and also arrange a online video chat
                                for your problem.
                            </p>
                            <p>
                                <i class="fas fa-map-marked-alt icon-color"></i> Dhanmondi 32,
                                Dhaka, Bangladesh
                            </p>
                            <p>
                                <i class="fas fa-phone-alt icon-color"></i> +8801112233334
                            </p>
                            <p>
                                <i class="far fa-envelope-open icon-color"></i>{" "}
                                onlineclinicbd@gmail.com
                            </p>
                            <div className="d-flex align-items-center icon-color ms-5">
                                <i className="fab fa-facebook-f me-3"></i>
                                <i className="fab fa-twitte me-3r"></i>
                                <i className="fab fa-linkedin-in me-3"></i>
                                <i className="fab fa-instagram me-3"></i>
                                <i className="fab fa-github-alt me-3"></i>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h3 className="mt-5">Location Covered</h3>
                            <p>United Kingdom( UK )</p>
                            <p>Bangladesh</p>
                            <p>India</p>
                            <p>Austrilia</p>
                            <p>Franch</p>
                        </div>
                        <div className="col-md-4">
                            <h3 className="mt-5">Newsletter</h3>
                            <p>
                                If you have any query about our online platform plase let us
                                know about
                            </p>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="your message"
                                    aria-label="your message"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="outline-secondary" id="basic-addon2">
                                    Text Us
                                </Button>
                            </InputGroup>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid copyright'>
                <div className="row">
                    <div className="col-md-12">
                        <p className='text-center mt-4'>Copyrights © 2022 by online clinic bd. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
