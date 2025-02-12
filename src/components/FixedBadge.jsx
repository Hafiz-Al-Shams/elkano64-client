

const FixedBadge = () => {
    return (
        <div className="fixed z-20 bottom-5 md:bottom-2.5 right-7 md:right-16 lg:right-24 transform -translate-y-1/2 bg-amber-400/70 text-black/95 text-center w-20 md:w-28 lg:w-44 rounded-full shadow-lg flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 p-1.5 md:p-2.5 lg:p-5 cursor-pointer">
            <div className="border-2 border-white rounded-full p-1 md:p-2.5 lg:p-4">
                <div className="badge badge-primary badge-xs sm:badge-sm md:badge-md text-[9px] sm:text-[10px] md:text-xs p-1">HURRY</div>
                <h6 className="text-[8px] md:text-[10px] lg:text-[15px] font-medium">Book a Table <br />Right Now!!</h6>
            </div>
        </div>

    );
};

export default FixedBadge;