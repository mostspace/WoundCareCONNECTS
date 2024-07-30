import React from "react";
import { IMaskInput } from 'react-imask';

const PhoneNumberMaskInput = React.forwardRef(function PhoneNumberMaskInput(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="+0 (#00) 000-0000"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
});

export default PhoneNumberMaskInput;