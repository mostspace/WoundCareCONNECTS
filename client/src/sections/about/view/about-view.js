import styles from 'src/style'

import AboutHero from '../about-hero';
import OurTeam from '../our-team';
import PlanGoal from '../plan-goal';

const AboutView = () => {
  return (
    <>
      <div className={`${styles.paddingX} ${styles.flexStart} font-manrope`}>
        <div className={`${styles.boxWidth} flex flex-col gap-[48px] py-[48px] sm:py-[70px]`}>
          <AboutHero />
          <OurTeam />
          <PlanGoal />
        </div>
      </div>
    </>
  );
};

export default AboutView;