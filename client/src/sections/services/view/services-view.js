import styles from 'src/style'

import ServicesHero from '../services-hero';
import ServicesRange from '../services-range';
import ServicesApproach from '../services-approach';
import OurServiceArea from '../our-service-area';

const ServicesView = () => {
  return (
    <>
      <div className={`${styles.paddingX} ${styles.flexStart} font-manrope`}>
        <div className={`${styles.boxWidth} flex flex-col gap-[48px]`}>
          <ServicesHero />
          <ServicesRange />
          <ServicesApproach />
          <OurServiceArea />
        </div>
      </div>
    </>
  );
};

export default ServicesView;