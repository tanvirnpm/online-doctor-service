import React from 'react';
import ConsultOur from '../../ConsultOur/ConsultOur';
import SpecialistDoctor from './SpecialistDoctor/SpecialistDoctor';

const ServiceDetails = () => {
    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <img style={{ width: "100px" }} src="https://assets.icliniq.com/v2/assets/images/specialityImages-pro/sexologist.svg" className="card-img-top mx-auto mt-3" alt="" />
                        <div className="card-body">
                            <h5 className="card-title text-center">Sexology</h5>
                            <p className="card-text text-justify">One can consult a sexologist to deal and overcome sex-related problems such as erectile dysfunction, painful intercourse, pain after intercourse, low sex drive, intense sexual behavior etc. </p>

                            <h3 className="text-center bg-warning rounded-pill p-1">Make Your Appoinment</h3>
                            <div>
                                <input type="text" name="patientName" id="patientName" placeholder="Full Name" className="form-control mb-1" />
                                <input type="number" name="patientName" id="patientAge" placeholder="Age" className="form-control mb-1" />
                                <textarea placeholder="Symptoms" name="patientSymptoms" id="patientSymptoms" cols="30" rows="10" className="form-control mb-1"></textarea>
                                <input type="datetime-local" id="appointDateTime" className="form-control mb-3" name="appointDateTime" />
                            </div>
                            <button className="btn btn-warning float-end">Appointment</button>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">You can choose your <b>Sexology</b> Specialist Doctor</h3>
                            <SpecialistDoctor />
                            <SpecialistDoctor />
                            <SpecialistDoctor />
                            <ConsultOur />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;