import React from 'react';

const Banner = () => {
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                <div className="col-6">
                    <h1><span className="d-block text-warning">Consult top doctors</span> effortlessly</h1>
                    <p>Get 24/7 online consultations with the best doctors without breaking a sweat and your bank.</p>
                    <button className="btn btn-warning">Start a consult now!</button>
                    <div className="d-flex">
                        <div className="text-center">
                            <h3><span className="d-block">Trusted by</span>20,0000+ Users</h3>
                        </div>
                        <div className="text-center">
                            <h3><span className="d-block">Top rated by</span>DGFI, BUFT</h3>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <img className="img-fluid" src="https://assets.icliniq.com/v2/assets/images/hompage-image/Banner-min-crop.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;