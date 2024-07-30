import styles from 'src/style'

import ContactForm from '../contact-form';
import { SnackbarProvider } from 'notistack';


const ContactView = () => {
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <div className={`${styles.paddingX} ${styles.flexStart} font-manrope`}>
          <div className={`${styles.boxWidth} py-[48px] sm:py-[70px]`}>
            <ContactForm />
          </div>
        </div>
      </SnackbarProvider>
    </>
  );
};

export default ContactView;