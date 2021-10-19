import React from 'react';

const SpecialistDoctor = () => {
    return (
        <div className="border rounded p-2 d-flex justify-content-between align-items-center mb-1">
            <label htmlFor="specialist-doctor">
                <h5 className="m-0">Mr. Deago Pasta</h5>
                <p className="m-0">
                    <span className="badge bg-secondary me-1">MBBS</span>
                    <span className="badge bg-secondary me-1">FCPS</span>
                    <span className="badge bg-secondary me-1">GYNOCOLOGY</span>
                </p>
            </label>
            <div className="">
                {/* <div className="form-check form-switch">
                    <input className="form-check-input" name="doctor" type="checkbox" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" for="flexSwitchCheckDefault"></label>
                </div> */}
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="doctor" id="specialist-doctor" value="option1" />
                </div>
            </div>
        </div>
    );
};

export default SpecialistDoctor;