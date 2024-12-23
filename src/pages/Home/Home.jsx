import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner";
import FixedBadge from "../../components/FixedBadge";
import TopFoods from "../../components/TopFoods";



const Home = () => {
    return (
        <>
            <Helmet>
                <title>Elkano64 - Home</title>
            </Helmet>

            <Banner></Banner>
            <FixedBadge></FixedBadge>
            <TopFoods></TopFoods>
        </>
    );
};

export default Home;