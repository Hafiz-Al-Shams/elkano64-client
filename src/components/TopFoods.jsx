import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const TopFoods = () => {


    const [topFoods, setTopFoods] = useState([]);

    useEffect(() => {
        fetch('https://elkano64-server.vercel.app/foods')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setTopFoods(data);
            })
    }, [])



    return (
        <div className="w-11/12 mx-auto">
            <h2 className="text-4xl font-semibold text-center mb-10 mt-24">Our 6 top-selling Food Items</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-24 mb-10">
                {
                    topFoods.map(food => (
                        <div key={food._id} className="card card-compact bg-base-200/50 p-3.5 w-96 shadow-xl">
                            <figure>
                                <img
                                    className="h-52 p-1.5"
                                    src={food.photo}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-bold">{food.name}</h2>
                                <p className="font-semibold text-lg text-gray-700">Price: {food.price}</p>
                                <p className="font-semibold text-lg text-gray-700">Purchase Count: {food.purchaseCount}</p>
                                <p className="font-semibold text-lg text-gray-700">Available Quantity: {food.availableQuantity}</p>
                                <p className="font-semibold text-lg text-gray-700">Description: {food.description}</p>
                                <div className="card-actions justify-end mt-2">
                                    <Link to={`/foods/${food._id}`}>
                                        <button className="btn btn-primary px-4 text-lg">Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="text-center mb-16">
                <Link to="/foods">
                    <button className="btn btn-secondary btn-lg font-semibold">View All</button>
                </Link>
            </div>

        </div>
    );
};

export default TopFoods;