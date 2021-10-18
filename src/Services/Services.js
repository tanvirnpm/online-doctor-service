import React from 'react';
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">Touch Your Service</h1>
                    <p className="text-center">With 80+ specialties covered, get medical advice and medical second opinion to any of your health concerns under one roof.</p>
                </div>
            </div>
            <div className="row g-3">
                <div className="col-3">
                    <ServiceCard/>
                </div>
                <div className="col-3">
                    <ServiceCard/>
                </div>
                <div className="col-3">
                    <ServiceCard/>
                </div>
                <div className="col-3">
                    <ServiceCard/>
                </div>
                <div className="col-3">
                    <ServiceCard/>
                </div>
                <div className="col-3">
                    <ServiceCard/>
                </div>
                <div className="col-3">
                    <ServiceCard/>
                </div>
                <div className="col-3">
                    <ServiceCard/>
                </div>
                <div className="col-3">
                    <ServiceCard/>
                </div>
            </div>
        </div>
    );
};

export default Services;