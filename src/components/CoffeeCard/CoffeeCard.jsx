import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEdit, faDeleteLeft, faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const CoffeeCard = ({ coffee }) => {
    const { name, chef, supplier, taste, category, details, photo } = coffee;
    return (
        <div>
            <div className="bg-[#F5F4F1] shadow-xl flex justify-between items-center rounded-md p-5 w-9/12 mx-auto">
                <img src={photo} alt="" />
                <div className="">
                    <h2 className="mb-5"><span className='font-bold'>Name:</span> {name}</h2>
                    <h2 className="mb-5"><span className='font-bold'>Chef:</span> {chef}</h2>
                    <h2 className="mb-5"><span className='font-bold'>Taste:</span> {taste}</h2>
                </div>
                <div className=" flex flex-col-reverse gap-7">
                    <button className="btn bg-[#EA4744]"><FontAwesomeIcon icon={faTrashAlt} /></button>
                    <button className="btn bg[#3C393B]"><FontAwesomeIcon icon={faEdit} /></button>
                    <button className="btn bg-[#D2B48C]"><FontAwesomeIcon icon={faEye} /></button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;