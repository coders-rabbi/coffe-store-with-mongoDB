import React from 'react';

const AddCoffee = () => {
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
        const coffee = { name, chef, supplier, taste, category, details, photo }
        console.log(coffee);

        //send server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    alert('Coffe added successfully')
                    form.reset();
                }
            })
    }
    return (
        <div>
            <div className='p-10 bg-[#F4F3F0]'>
                <h1 className='text-5xl font-extrabold text-center mb-6'>Add Coffe</h1>
                <form onSubmit={hangleAddCoffe}>
                    {/* form Coffe Name & Chef Name*/}
                    <div className='md:flex gap-6 mb-6'>
                        <div className='form-control w-1/2'>
                            <label className='label'>
                                <span className='label-text'>Coffe Name</span>
                            </label>
                            <label>
                                <input type="text" name='name' placeholder="Coffe Name" className="border border-black py-2 px-3 text-xl w-full input input-rounded" />
                            </label>
                        </div>
                        <div className='form-control w-1/2'>
                            <label className='label'>
                                <span className='label-text'>Chef</span>
                            </label>
                            <label>
                                <input type="text" name='chef' placeholder="Enter Coffe Chef" className="border border-black py-2 px-3 text-xl w-full input input-rounded" />
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
                                <input type="text" name='supplier' placeholder="Enter Coffe Supplier" className="border border-black py-2 px-3 text-xl w-full input input-rounded" />
                            </label>
                        </div>
                        <div className='form-control w-1/2'>
                            <label className='label'>
                                <span className='label-text'>Taste</span>
                            </label>
                            <label>
                                <input type="text" name='taste' placeholder="Enter Coffe taste" className="border border-black py-2 px-3 text-xl w-full input input-rounded" />
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
                                <input type="text" name='category' placeholder="Enter Coffe Category" className="border border-black py-2 px-3 text-xl w-full input input-rounded" />
                            </label>
                        </div>
                        <div className='form-control w-1/2'>
                            <label className='label'>
                                <span className='label-text'>Details</span>
                            </label>
                            <label>
                                <input type="text" name='details' placeholder="Enter Coffe Details" className="border border-black py-2 px-3 text-xl w-full input input-rounded" />
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
                                <input type="text" name='photo' placeholder="Enter photo url" className="border border-black py-2 px-3 text-xl w-full input input-rounded" />
                            </label>
                        </div>
                    </div>
                    <input className='btn btn-block' type="submit" value="Add Coffe" />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;