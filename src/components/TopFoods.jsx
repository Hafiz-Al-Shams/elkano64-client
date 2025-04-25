import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const TopFoods = () => {


    const [topFoods, setTopFoods] = useState([]);

    useEffect(() => {
        fetch('https://elkano64-server.vercel.app/fixedFoods')
            .then(res => res.json())
            .then(data => {
                setTopFoods(data);
            })
    }, [])



    return (
        <div className="w-11/12 mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center pb-4 md:pb-6 lg:pb-10 pt-10 md:pt-14 lg:pt-24 underline">Our 6 top-selling Food Items</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-y-12 lg:gap-y-24 pb-6 md:pb-7 lg:pb-10 pl-4 md:pl-7 lg:pl-12">
                {
                    topFoods.map(food => (
                        <div key={food._id} className="card card-compact bg-base-100 border-2 p-0.5 md:p-1.5 lg:p-3.5 w-64 md:w-72 lg:w-96 shadow-xl">
                            <figure className="">
                                <img
                                    className="p-4 rounded-3xl w-60 md:w-64 lg:w-full"
                                    src={food.photo}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title md:text-xl lg:text-2xl md:font-semibold lg:font-bold">{food.name}</h2>
                                <p className="font-medium text-xs lg:text-lg text-base-content">Price: ${food.price}</p>
                                <p className="font-medium text-xs lg:text-lg text-base-content">Purchase Count: {food.purchaseCount}</p>
                                <p className="font-medium text-xs lg:text-lg text-base-content">Available Quantity: {food.availableQuantity}</p>
                                {/* <p className="font-medium text-xs lg:text-lg text-base-content">Description: {food.description}</p> */}
                                <div className="card-actions justify-end mt-2">
                                    <Link to={`/foods/${food._id}`}>
                                        <button className="btn btn-primary btn-xs md:btn-sm lg:btn-md lg:px-4 lg:text-lg">Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="text-center pb-10 md:pb-11 lg:pb-20">
                <Link to="/all-foods">
                    <button className="btn btn-outline btn-sm md:btn-md lg:btn-lg font-semibold">View All</button>
                </Link>
            </div>

        </div>
    );
};

export default TopFoods;