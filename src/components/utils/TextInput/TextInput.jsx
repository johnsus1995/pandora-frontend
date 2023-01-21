import { sysPhone } from "helpers";
import React from "react";

import styles from "./TextInput.module.scss";

const TextInput = React.forwardRef((props, ref) => {
  const {
    name,
    value,
    onChange,
    onBlur,
    disabled,
    type,
    varient,
    errorMessage,
    placeholder
  } = props;

  const handleChange = (e) => {
    switch (type) {
      case "tel":
        !!onChange &&
          onChange({
            target: {
              name: name,
              value: sysPhone(e.target.value),
            },
          });
        break;

      default:
        !!onChange && onChange(e);
    }
  };

  return (
    <div className={`${styles.TextInput} ${varient}`}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        disabled={disabled}
        ref={ref}
        placeholder=" "
      />
      <label htmlFor="email">{placeholder}</label>
      <p>{errorMessage}</p>
    </div>
  );
});

export default TextInput;
