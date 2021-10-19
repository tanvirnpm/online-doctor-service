import React from 'react';
import SpecialistDoctor from './SpecialistDoctor/SpecialistDoctor';

const ServiceDetails = () => {
    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-6">
                    <div className="card text-center">
                        <img style={{ width: "100px" }} src="https://assets.icliniq.com/v2/assets/images/specialityImages-pro/sexologist.svg" className="card-img-top mx-auto mt-3" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Sexology</h5>
                            <p className="card-text">One can consult a sexologist to deal and overcome sex-related problems such as erectile dysfunction, painful intercourse, pain after intercourse, low sex drive, intense sexual behavior etc. </p>
                            <button className="btn btn-warning">Consult</button>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">You can choose your <b>Sexology</b> Specialist Doctor</h3>
                            <SpecialistDoctor/>
                            <SpecialistDoctor/>
                            <SpecialistDoctor/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;