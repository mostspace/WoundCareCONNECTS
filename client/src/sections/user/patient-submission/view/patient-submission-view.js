import styles from 'src/style'
import Main from '../main';

import { SnackbarProvider } from 'notistack';

const PatientSubmissionView = () => {
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <div className={`${styles.paddingX} ${styles.flexStart} font-manrope`}>
          <div className={`${styles.boxWidth} py-[48px] sm:py-[70px]`}>
            <Main />
          </div>
        </div>
      </SnackbarProvider>
    </>
  );
};

export default PatientSubmissionView;