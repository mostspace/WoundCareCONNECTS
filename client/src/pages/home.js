import { Helmet } from 'react-helmet-async';
// Sections
import { HomeView } from 'src/sections/home/view';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>WoundCare CONNECTS</title>
            </Helmet>

            <HomeView />
        </>
    );
}

export default Home;