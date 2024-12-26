

const Events = () => {
    return (
        <div className="bg-gray-900 text-white pb-20 pt-12 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold text-center mb-8">Upcoming Events</h2>
                <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-800 p-6 rounded-lg">
                    <div className="flex-1">
                        <p className="text-sm text-pink-400 mb-2">15/03/2025 — 21/03/2025</p>
                        <h3 className="text-xl font-bold mb-4">A Culinary Journey Through Europe</h3>
                        <p className="text-sm text-gray-400 mb-4">
                            Join us for an unforgettable evening celebrating the rich culinary traditions of Europe. Indulge in a specially curated menu featuring French soufflés, Italian risottos, Spanish paellas, and more. Each dish is paired with exquisite wines to complement the flavors, making this a true feast for the senses ...
                        </p>
                        <button className="btn btn-outline btn-secondary">View Details</button>
                    </div>
                    <div className="w-full md:w-64 flex-shrink-0">
                        <img
                            src="https://i.ibb.co.com/Wyqhsyk/event.jpg" // Replace this URL with your actual image URL
                            alt="Napa Valley Grapes"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;