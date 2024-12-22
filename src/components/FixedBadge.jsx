

const FixedBadge = () => {
    return (
        <div className="fixed bottom-6 right-6 transform -translate-y-1/2 bg-amber-400/70 text-black/90 text-center w-36 rounded-full shadow-lg flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 p-4 cursor-pointer">
            <div className="border-2 border-white rounded-full p-4">
                <div className="badge badge-primary badge-sm">HURRY</div>
                <h6 className="text-xs font-medium">Book a Table <br />Right Now!!</h6>
            </div>
        </div>
    );
};

export default FixedBadge;