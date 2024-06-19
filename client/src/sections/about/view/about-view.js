import styles from 'src/style'

import AboutHero from '../about-hero';
import OurTeam from '../our-team';
import PlanGoal from '../plan-goal';

const AboutView = () => {
  return (
    <>
      <div className={`${styles.paddingX} ${styles.flexStart} font-manrope`}>
        <div className={`${styles.boxWidth}`}>
          <AboutHero />
          <OurTeam />
          <PlanGoal />
        </div>
      </div>
    </>
  );
};

export default AboutView;