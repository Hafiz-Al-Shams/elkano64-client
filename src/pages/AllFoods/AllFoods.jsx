import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";


const AllFoods = () => {

    const foods = useLoaderData();

    const [resultFoods, setResultFoods] = useState(foods);

    const [searchValue, setSearchValue] = useState("");
    // const [results, setResults] = useState([]);

    // State to manage the debounce timer
    const [debounceTimer, setDebounceTimer] = useState(null);

    const handleSearch = async (query) => {
        console.log("Search text:", query);
        try {
            const response = await fetch(`http://localhost:5000/searchFoods?search=${encodeURIComponent(query)}`);
            const data = await response.json();
            setResultFoods(data);
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };


    // Debounced search triggered by input change
    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchValue(value);

        // Clearing any existing debounce timer
        if (debounceTimer) clearTimeout(debounceTimer);

        // Setting a new debounce timer
        const timer = setTimeout(() => {
            handleSearch(value);
        }, 300); // debounce delay
        setDebounceTimer(timer);
    };


    // const handleKeyDown = (event) => {
    //     if (event.key === "Enter") {
    //         handleSearch();
    //     }
    // };


    return (
        <div className="w-11/12 mx-auto">
            <Helmet>
                <title>Elkano64 - All Foods</title>
            </Helmet>
            <h2 className="text-5xl font-semibold text-center mb-10 mt-14">{`All Foods (${resultFoods.length})`}</h2>

            {/* searching food */}
            <div className="flex justify-end">

                <label className="input input-bordered input-primary flex items-center gap-2 mb-8">

                    {/*  onClick={(e) => {
                    // Ensuring that clicking the SVG triggers the search, not the input field
                    if (e.target.tagName === "svg" || e.target.tagName === "path") {
                        handleSearch();
                    }
                }} */}

                    <input type="text" name="search" className="grow" placeholder="Search" value={searchValue}
                        onChange={handleInputChange} // Real-time input handling
                    />

                    {/* onChange={(e) => setSearchValue(e.target.value)}
                        onKeyDown={handleKeyDown} */}

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-6 w-6 opacity-95 text-neutral-content">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-24 mb-28">
                {
                    resultFoods.map(food => (
                        <div key={food._id} className="card card-compact bg-base-200/50 p-3.5 w-96 shadow-xl">
                            <figure>
                                <img
                                    className="h-52 p-1.5"
                                    src={food.photo}
                                    alt="food" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-bold">{food.name}</h2>
                                <p className="font-semibold text-lg text-gray-700">Price: {food.price}</p>
                                <p className="font-semibold text-lg text-gray-700">Category: {food.category}</p>

                                <p className="font-semibold text-lg text-gray-700">Purchase-Count Today: {food.purchaseCount}</p>

                                <p className="font-semibold text-lg text-gray-700">Rating: {food.rating}</p>

                                <p className="font-semibold text-lg text-gray-700">Delivery Time needed: {food.deliveryTime}</p>
                                <p className="font-semibold text-lg text-gray-700">Custom info: {food.customization}</p>

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
        </div>
    );
};

export default AllFoods;