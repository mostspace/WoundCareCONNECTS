import React from 'react';
import styles from 'src/style'

import WoundCareProducts from '../woundcare-products';
import IndicationDrivenCare from '../indication-care';
import WoundTypes from '../wound-types';


const ProductsView = () => {
  return (
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} flex flex-col gap-[48px] py-[48px] sm:py-[70px]`}>
        <WoundCareProducts/>
        <IndicationDrivenCare/>
        <WoundTypes/>
      </div>
  </div>
  );
};

export default ProductsView;