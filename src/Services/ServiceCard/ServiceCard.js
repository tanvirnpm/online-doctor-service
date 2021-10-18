import React from 'react';

const ServiceCard = () => {
    return (
        <div className="card text-center">
            <img style={{ width: "100px" }} src="https://assets.icliniq.com/v2/assets/images/specialityImages-pro/sexologist.svg" className="card-img-top mx-auto mt-3" alt="" />
            <div className="card-body">
                <h5 className="card-title">Sexology</h5>
                <p className="card-text">One can consult a sexologist to deal and overcome sex-related problems such as erectile dysfunction, painful intercourse, pain after intercourse, low sex drive, intense sexual behavior etc. </p>
                <button className="btn btn-warning">Consult</button>
            </div>
        </div>
    );
};

export default ServiceCard;