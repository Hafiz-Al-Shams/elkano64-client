import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import AuthContext from "../../context/AuthContext/AuthContext";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const FoodDetails = () => {

    const { user } = useContext(AuthContext);

    const food = useLoaderData();

    const { _id, name, category, description, price, purchaseCount, rating, customization, deliveryTime, availableQuantity, photo, userEmail } = food;


    const handlePurchase = () => {
        Swal.fire({
            title: 'Invalid Authority',
            text: 'You can only Edit Equipment from your Own List',
            icon: 'error',
            confirmButtonText: 'understood'
        });
    }


    return (
        <div className="">
            <Helmet>
                <title>Elkano64 - Food Details</title>
            </Helmet>

            <div className="flex justify-center items-center gap-7 pt-6 pb-2">

                {/* <div className="w-40"><Lottie animationData={Details}></Lottie></div> */}

                <h1 className="text-5xl font-bold">{name}</h1>
            </div>

            <div className="card lg:card-side bg-base-200/20 shadow-xl w-8/12 mx-auto mt-1 p-2 mb-8">
                <figure>
                    <img
                        src={photo}
                        className="w-[450px] p-12"
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold mb-4">Category: {category}</h2>
                    <p className="font-semibold text-lg text-gray-700">Price: {price}</p>
                    <p className="font-semibold text-lg text-gray-700">Purchase-Count Today: {purchaseCount}</p>
                    <p className="font-semibold text-lg text-gray-700">Available in Stock: {availableQuantity}</p>
                    <p className="font-semibold text-lg text-gray-700">Rating: {rating}</p>
                    <p className="font-semibold text-lg text-gray-700">Description: {description}</p>
                    <p className="font-semibold text-lg text-gray-700">Delivery Time needed: {deliveryTime}</p>
                    <p className="font-semibold text-lg text-gray-700">Custom info: {customization}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/purchaseFood/${_id}`}>
                            <button onClick={handlePurchase} className="btn btn-primary px-4 text-lg">Purchase</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;