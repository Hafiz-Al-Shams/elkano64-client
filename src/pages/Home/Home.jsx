import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner";
import FixedBadge from "../../components/FixedBadge";
import TopFoods from "../../components/TopFoods";
import Review from "../../components/Review";
import Events from "../../components/Events";



const Home = () => {
    return (
        <>
            <Helmet>
                <title>Elkano64 - Home</title>
            </Helmet>

            <Banner></Banner>
            <FixedBadge></FixedBadge>
            <TopFoods></TopFoods>
            <Review></Review>
            <Events></Events>
        </>
    );
};

export default Home;