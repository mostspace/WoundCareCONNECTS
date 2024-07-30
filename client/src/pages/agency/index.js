import { Helmet } from 'react-helmet-async';
// Sections
import { DashboardView } from 'src/sections/agency/view';

const Agency = () => {
    return (
        <>
            <Helmet>
                <title>WoundCare CONNECTS Health Agency</title>
            </Helmet>

            <DashboardView />
        </>
    );
}

export default Agency;