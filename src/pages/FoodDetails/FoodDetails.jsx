import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";


const FoodDetails = () => {

    const food = useLoaderData();

    const { _id, name, category, description, price, purchaseCount, availableQuantity, photo, foodOrigin } = food;


    return (
        <div className="">
            <Helmet>
                <title>Elkano64 - Food Details</title>
            </Helmet>

            <div className="flex justify-center items-center gap-7 pt-6 pb-2">

                <h1 className="text-5xl font-bold my-10">{name} Details</h1>
            </div>

            <div className="card lg:card-side bg-base-200/40 shadow-xl w-8/12 mx-auto mt-1 px-10 mb-8">
                <figure>
                    <img
                        src={photo}
                        className="w-[450px] p-10 rounded-3xl"
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold mb-4">Category: {category}</h2>
                    <p className="font-medium text-lg text-gray-700">Price: {price}</p>
                    <p className="font-medium text-lg text-gray-700">Purchase-Count Today: {purchaseCount}</p>
                    <p className="font-medium text-lg text-gray-700">Available in Stock: {availableQuantity}</p>
                    <p className="font-medium text-lg text-gray-700">Description: {description}</p>
                    <p className="font-medium text-lg text-gray-700">Origin Country: {foodOrigin}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/food-purchase/${_id}`}>
                            <button className="btn btn-primary px-4 text-lg">Purchase</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;