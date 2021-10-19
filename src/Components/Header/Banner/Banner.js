import React from 'react';

const Banner = () => {
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                <div className="col-6">
                    <h1><span className="d-block text-warning">Consult top doctors</span> effortlessly</h1>
                    <p>Get 24/7 online consultations with the best doctors without breaking a sweat and your bank.</p>
                    <button className="btn btn-warning">Start a consult now!</button>
                    
                </div>
                <div className="col-6">
                    <img className="img-fluid" src="https://assets.icliniq.com/v2/assets/images/hompage-image/Banner-min-crop.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;