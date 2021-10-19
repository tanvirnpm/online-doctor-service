import React from 'react';

const Footer = () => {
    return (
        <div className="bg-light py-4">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h4>Payments Accepted</h4>
                        <img src="https://i1.wp.com/zitengine.com/zitcms/uploads/2021/01/ssl-commerz-payment-gateway-bangladesh-cover-photo.png" alt="" className="img-fluid rounded shadow-sm" />
                    </div>
                    <div className="col-6">
                        <h4>Follow <b>Virtual eClinic</b></h4>
                        <div className="d-flex">
                            <i style={{fontSize: '35px', margin: '10px'}} className="fab fa-facebook-f"></i>
                            <i style={{fontSize: '35px', margin: '10px'}} className="fab fa-twitter"></i>
                            <i style={{fontSize: '35px', margin: '10px'}} className="fab fa-instagram"></i>
                            <i style={{fontSize: '35px', margin: '10px'}} className="fab fa-youtube"></i>
                        </div>
                    </div>
                </div>
                {/* copyright section */}
                <div className="pt-4 text-center">
                    <p className="m-0">Copyright &copy; 2021, <b>Virtual eClinic</b> - All Rights Reserved</p>
                    <p className="m-0">People get our service from US, UK, India, Australia and more</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;