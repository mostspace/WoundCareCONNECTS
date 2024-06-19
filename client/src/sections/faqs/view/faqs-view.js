import styles from 'src/style'

import faqHero from '../faq-hero'
import Accordion from '../accordion'

const FaqsView = () => {
  return (
    <>
      <div className={`${styles.paddingX} ${styles.flexStart} font-manrope`}>
        <div className={`${styles.boxWidth}`}>
          <faqHero />
          {/* <Accordion /> */}
        </div>
      </div>
    </>
  );
};

export default FaqsView;