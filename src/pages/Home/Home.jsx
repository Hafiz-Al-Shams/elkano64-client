import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner";
import FixedBadge from "../../components/FixedBadge";



const Home = () => {
    return (
        <>
            <Helmet>
                <title>Elkano64 - Home</title>
            </Helmet>
            <div>
                <Banner></Banner>
                <FixedBadge></FixedBadge>
            </div>
        </>
    );
};

export default Home;