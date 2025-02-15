import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";


const AllFoods = () => {

    const foods = useLoaderData();
    const [resultFoods, setResultFoods] = useState(foods);
    const [searchValue, setSearchValue] = useState("");

    // Debounce state
    const [debounceTimer, setDebounceTimer] = useState(null);

    // Sorting state
    const [sortOrder, setSortOrder] = useState(""); // Tracks the selected sorting order

    const handleSearch = async (query) => {
        try {
            const response = await fetch(`https://elkano64-server.vercel.app/searchFoods?search=${encodeURIComponent(query)}`);
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

        if (debounceTimer) clearTimeout(debounceTimer);

        const timer = setTimeout(() => {
            handleSearch(value);
        }, 300);
        setDebounceTimer(timer);
    };

    // sorting foods by price
    const handleSortByPrice = (order) => {
        const sortedFoods = [...resultFoods].sort((a, b) =>
            order === "asc" ? a.price - b.price : b.price - a.price
        );
        setResultFoods(sortedFoods);
        setSortOrder(order);
    };



    return (
        <div className="px-24 pb-24 bg-base-200/80">
            <Helmet>
                <title>Elkano64 - All Foods</title>
            </Helmet>
            <h2 className="text-5xl font-semibold text-center mb-10 pt-14">{`All Foods (${resultFoods.length})`}</h2>

            {/* SEARCHing + SORTING CONTAINER */}
            <div className="flex justify-between mb-8">

                {/* Search Input */}
                <label className="input input-bordered input-primary flex items-center gap-2">
                    <input
                        type="text"
                        name="search"
                        className="grow"
                        placeholder="Search by Food-Name"
                        value={searchValue}
                        onChange={handleInputChange}
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6 opacity-95 text-neutral-content">
                        <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                    </svg>
                </label>


                {/* Sorting Dropdown */}
                <select
                    className="select select-bordered w-48 text-lg"
                    value={sortOrder}
                    onChange={(e) => handleSortByPrice(e.target.value)}
                >
                    <option value="">Sort by Price</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>

            {/* FOOD CARDS */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-24 pb-24 pl-10">
                {resultFoods.map((food) => (
                    <div key={food._id} className="card card-compact bg-white p-3.5 w-96 shadow-xl">
                        <figure>
                            <img className="p-4 rounded-3xl" src={food.photo} alt="food" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold">{food.name}</h2>
                            <p className="font-medium text-lg text-gray-700">Category: {food.category}</p>
                            <p className="font-medium text-lg text-gray-700">Price: {food.price}</p>
                            <p className="font-medium text-lg text-gray-700">Purchase-Count Today: {food.purchaseCount}</p>
                            <p className="font-medium text-lg text-gray-700">Available Quantity: {food.availableQuantity}</p>
                            <p className="font-medium text-lg text-gray-700">Description: {food.description}</p>
                            <p className="font-medium text-lg text-gray-700">Origin: {food.foodOrigin}</p>
                            <div className="card-actions justify-end mt-2">
                                <Link to={`/foods/${food._id}`}>
                                    <button className="btn btn-primary px-4 text-lg">Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllFoods;