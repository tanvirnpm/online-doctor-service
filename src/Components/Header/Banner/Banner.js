import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="container my-5">
            <div className="row align-items-center g-3">
                <div className="col-md-6 text-md-start text-center text-md-start">
                    <h1><span className="d-block text-warning">Consult top doctors</span> effortlessly</h1>
                    <p>Get 24/7 online consultations with the best doctors without breaking a sweat and your bank.</p>
                    <Link to="/services" className="btn btn-warning">Start a consult now!</Link>
                    
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src="https://assets.icliniq.com/v2/assets/images/hompage-image/Banner-min-crop.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;