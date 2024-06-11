import React from 'react'
import { 
    Hero,
    WoundCareManagement, 
    GetToKnowUs, 
    ServicesAndTreatments, 
    WoundCareDressings, 
    BenefitsOfOurProgram,
} from '../sections/home'
import styles from '../style'

const Home = () => {
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
    );
}

export default Home;