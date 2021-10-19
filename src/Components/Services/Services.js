import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./deptInfo.json')
            .then(res => res.json())
            .then(data => setServices(data))
    },[])
    // console.log('service',services)
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">Touch Our Service</h1>
                    <p className="text-center">With 80+ specialties covered, get medical advice and medical second opinion to any of your health concerns under one roof.</p>
                </div>
            </div>
            <div className="row g-3">
                {
                    services.map(service =><div key={service.id} className="col-md-6 col-lg-3"><ServiceCard service={service}/></div>)
                }
                
            </div>
        </div>
    );
};

export default Services;