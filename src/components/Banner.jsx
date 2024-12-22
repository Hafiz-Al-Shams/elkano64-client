


const Banner = () => {
    return (
        < div className="carousel w-full h-[90vh]" >
            {/* slide1 */}
            <div id="slide1" className="carousel-item relative w-full bg-[url('https://i.ibb.co.com/mh8mC5L/slide11.jpg')] bg-no-repeat bg-cover bg-center bg-blend-overlay pt-52" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <div className="text-center mx-auto space-y-3">
                    <h1 className="font-bold text-6xl text-white">Fresh Homemade Dishes</h1>
                    <h4 className="font-semibold text-2xl text-gray-300/90 pb-4">Our chefs cook with the freshest and highest quality ingredients. <br />We serve foods simply full of the finest tastes.</h4>
                    <button
                        className="bg-[rgba(82,195,3,0.85)] hover:bg-[rgba(82,195,3,0.98)] text-white px-6 py-3 rounded-lg font-medium transition duration-300">
                        Shop The Hottest Foods
                    </button>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* slide2 */}
            <div id="slide2" className="carousel-item relative w-full bg-[url('https://i.ibb.co.com/0qs1h6t/slider22.jpg')] bg-no-repeat bg-cover bg-center bg-blend-overlay pt-52" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <div className="text-center mx-auto space-y-3">
                    <h1 className="font-bold text-6xl text-white">Ingredients Grown on Our Farms</h1>
                    <h4 className="font-semibold text-2xl text-gray-300/90 pb-4">Enjoy the food experience mostly from our farms, through <br />our kitchen, and to your fork.</h4>
                    <button
                        className="bg-[rgba(82,195,3,0.85)] hover:bg-[rgba(82,195,3,0.98)] text-white px-6 py-3 rounded-lg font-medium transition duration-300">
                        Shop The Hottest Foods
                    </button>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* slide3 */}
            <div id="slide3" className="carousel-item relative w-full bg-[url('https://i.ibb.co.com/KjTB1WT/slider33.jpg')] bg-no-repeat bg-cover bg-center bg-blend-overlay pt-52" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <div className="text-center mx-auto space-y-3">
                    <h1 className="font-bold text-6xl text-white">We Take Care with Love</h1>
                    <h4 className="font-semibold text-2xl text-gray-300/90 pb-4">We are passionate about making amazing recipes. We <br />serve foods simply full of the finest tastes.</h4>
                    <button
                        className="bg-[rgba(82,195,3,0.85)] hover:bg-[rgba(82,195,3,0.98)] text-white px-6 py-3 rounded-lg font-medium transition duration-300">
                        Shop The Hottest Foods
                    </button>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div >
    );
};

export default Banner;