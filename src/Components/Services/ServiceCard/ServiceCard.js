import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = (props) => {
    // console.log('props',props)
    const {id, deptName, deptLogo, deptDetails } = props.service
    return (
        <div className="card text-center">
            <img style={{ width: "100px", height: '150px' }} src={deptLogo} className="card-img-top mx-auto mt-3" alt="" />
            <div className="card-body">
                <h5 className="card-title">{deptName}</h5>
                <p className="card-text">{deptDetails.substring(0,120)}...</p>
                <Link className="btn btn-warning" to={`/service/${id}`}>Details</Link>
            </div>
        </div>
    );
};

export default ServiceCard;