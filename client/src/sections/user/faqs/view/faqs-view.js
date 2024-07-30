import styles from 'src/style'

import FaqHero from '../faq-hero';
import Accordion from '../accordion';

const FaqsView = () => {
  return (
    <>
      <div className={`${styles.paddingX} ${styles.flexStart} font-manrope`}>
        <div className={`${styles.boxWidth} pb-20`}>
          <FaqHero />
          <Accordion />
        </div>
      </div>
    </>
  );
};

export default FaqsView;