import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEdit, faDeleteLeft, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
    const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
    // console.log(coffee);

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire(
                            'Deleted!',
                            'Your Coffee has been deleted.',
                            'success'
                        )
                        const remainging = coffees.filter(cof => cof._id !== id)
                        setCoffees(remainging)
                    })
            }

        })
    }
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
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn bg-[#EA4744]"><FontAwesomeIcon icon={faTrashAlt} /></button>
                    <Link to={`updateCoffee/${_id}`}>
                        <button className="btn bg[#3C393B]"><FontAwesomeIcon icon={faEdit} /></button>
                    </Link>
                    <button className="btn bg-[#D2B48C]"><FontAwesomeIcon icon={faEye} /></button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;