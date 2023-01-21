import { sysPhone } from "helpers";
import React from "react";

import styles from "./TextInput.module.scss";

const TextInput = React.forwardRef((props, ref) => {
  const {
    placeholder,
    name,
    value,
    onChange,
    onBlur,
    disabled,
    type,
    // className,
    varient,
    ariaLabelledby,
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
        className="input"
        type={type}
        name={name}
        id="email"
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        disabled={disabled}
        ref={ref}
        placeholder=" "
      />
      <label for="email">Email or phone</label>

    </div>
  );
});

export default TextInput;
