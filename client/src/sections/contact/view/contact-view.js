import styles from 'src/style'

import ContactForm from '../contact-form';

const ContactView = () => {
  return (
    <>
      <div className={`${styles.paddingX} ${styles.flexStart} font-manrope`}>
        <div className={`${styles.boxWidth} py-[48px] sm:py-[70px]`}>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default ContactView;