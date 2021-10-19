import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ConsultOur from '../../ConsultOur/ConsultOur';
import SpecialistDoctor from './SpecialistDoctor/SpecialistDoctor';

const ServiceDetails = () => {
    const { id } = useParams();
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('../deptInfo.json')
        .then(res=>res.json())
        .then(data=>{
            const service = data.filter(item=>item.id == id);
            setServices(service[0])
        })
    },[])
    // console.log(id, 'services', services)
    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <img style={{ width: "100px" }} src={services.deptLogo} className="card-img-top mx-auto mt-3" alt="" />
                        <div className="card-body">
                            <h5 className="card-title text-center">{services.deptName}</h5>
                            <p className="card-text text-center">{services.deptDetails}</p>

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
                            <h3 className="card-title">You can choose your <b className="bg-warning rounded-pill px-3">{services.deptName}</b> Specialist Doctor</h3>
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