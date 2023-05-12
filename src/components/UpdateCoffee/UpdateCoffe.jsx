import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffe = () => {
    const coffee = useLoaderData();
    const { _id, name, chef, supplier, taste, category, details, photo } = coffee;


    const hangleAddCoffe = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = { name, chef, supplier, taste, category, details, photo }
        console.log(updatedCoffee);

        //send server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Successfully Updated!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                }
            })


    }
    return (
        <div>
            <Link to="/">
                <span className='text-2xl font-semibold'>Back To Home</span>
            </Link>
            <div className="bg-[#F5F4F1] shadow-xl flex justify-around items-center rounded-md p-5 w-1/3 mx-auto">
                <img src={photo} alt="" />
                <div className="">
                    <h2 className="mb-5"><span className='font-bold'>Name:</span> {name}</h2>
                    <h2 className="mb-5"><span className='font-bold'>Chef:</span> {chef}</h2>
                    <h2 className="mb-5"><span className='font-bold'>Supplier:</span> {supplier}</h2>
                    <h2 className="mb-5"><span className='font-bold'>Taste:</span> {taste}</h2>
                    <h2 className="mb-5"><span className='font-bold'>Category:</span> {category}</h2>
                    <h2 className="mb-5"><span className='font-bold'>Taste:</span> {taste}</h2>
                </div>
            </div>
            <div className='p-10 bg-[#F4F3F0]'>
                <h1 className='text-5xl font-extrabold text-center mb-6'>Update Coffee</h1>
                <form onSubmit={hangleAddCoffe}>
                    {/* form Coffe Name & Chef Name*/}
                    <div className='md:flex gap-6 mb-6'>
                        <div className='form-control w-1/2'>
                            <label className='label'>
                                <span className='label-text'>Coffe Name</span>
                            </label>
                            <label>
                                <input type="text" name='name' placeholder="Coffe Name" className="border border-black py-2 px-3 text-xl w-full input input-rounded" required />
                            </label>
                        </div>
                        <div className='form-control w-1/2'>
                            <label className='label'>
                                <span className='label-text'>Chef</span>
                            </label>
                            <label>
                                <input type="text" name='chef' placeholder="Enter Coffe Chef" className="border border-black py-2 px-3 text-xl w-full input input-rounded" required />
                            </label>
                        </div>
                    </div>
                    {/* form Coffe Name & Chef Name*/}
                    <div className='md:flex gap-6 mb-6'>
                        <div className='form-control w-1/2'>
                            <label className='label'>
                                <span className='label-text'>Supplier</span>
                            </label>
                            <label>
                                <input type="text" name='supplier' placeholder="Enter Coffe Supplier" className="border border-black py-2 px-3 text-xl w-full input input-rounded" required />
                            </label>
                        </div>
                        <div className='form-control w-1/2'>
                            <label className='label'>
                                <span className='label-text'>Taste</span>
                            </label>
                            <label>
                                <input type="text" name='taste' placeholder="Enter Coffe taste" className="border border-black py-2 px-3 text-xl w-full input input-rounded" required />
                            </label>
                        </div>
                    </div>
                    {/* form Coffe Name & Chef Name*/}
                    <div className='md:flex gap-6 mb-6'>
                        <div className='form-control w-1/2'>
                            <label className='label'>
                                <span className='label-text'>Category</span>
                            </label>
                            <label>
                                <input type="text" name='category' placeholder="Enter Coffe Category" className="border border-black py-2 px-3 text-xl w-full input input-rounded" required />
                            </label>
                        </div>
                        <div className='form-control w-1/2'>
                            <label className='label'>
                                <span className='label-text'>Details</span>
                            </label>
                            <label>
                                <input type="text" name='details' placeholder="Enter Coffe Details" className="border border-black py-2 px-3 text-xl w-full input input-rounded" required />
                            </label>
                        </div>
                    </div>
                    {/* form Coffe Name & Chef Name*/}
                    <div className='md:flex gap-6 mb-6'>
                        <div className='form-control w-full'>
                            <label className='label'>
                                <span className='label-text'>Photo</span>
                            </label>
                            <label>
                                <input type="text" name='photo' placeholder="Enter photo url" className="border border-black py-2 px-3 text-xl w-full input input-rounded" required />
                            </label>
                        </div>
                    </div>
                    <input className='btn btn-block' type="submit" value="Add Coffe" />
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffe;