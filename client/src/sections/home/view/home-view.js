import styles from 'src/style'

import Hero from '../hero';
import WoundCareManagement from '../woundcare-management';
import GetToKnowUs from '../get-to-know-us';
import ServicesAndTreatments from '../services-treatments';
import WoundCareDressings from '../woundcare-dressings';
import BenefitsOfOurProgram from '../benefits-of-our-program';

export default function HomeView() {
    
    return (
        <>
            <Hero/>  
            <div className={`${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                <WoundCareManagement/>
                <GetToKnowUs/>
                <ServicesAndTreatments/>
                <WoundCareDressings/>
                <BenefitsOfOurProgram/>
                </div>
            </div>
        </>
    )
}