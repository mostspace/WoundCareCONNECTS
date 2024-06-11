import styles from '../../style'
import Button from '../../components/button'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col`}>
      <div className={`flex-1 ${styles.flexStart} flex-col relative`}>
        <div className='w-full overflow-hidden hero-section'>
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth} z-[5] mx-auto py-16`}>
              <div className='md:w-[50%]'>
                <div className='flex flex-row justify-between items-center w-full'>
                  <h1 className='flex-1 font-manrope font-semibold ss:text-[52px] text-[40px] text-white ss:leading-[70.8px] leading-[75px]'>
                    Discover the Benefits of Routine Bedside
                    <span className='text-gradient'> Wound Care</span> {" "}
                  </h1>
                </div>
                <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
                  Connecting Home Health Companies and patients with Accessible Physician Care for Wound Treatments and comprehensive wound care services tailored to the unique needs of our patients.
                </p>
                <Button title="Get Started" styles='mt-10' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
