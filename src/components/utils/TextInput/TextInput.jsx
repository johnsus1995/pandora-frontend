import { sysPhone } from "helpers";
import styles from "./TextInput.module.scss";

const TextInput = (props) => {
  const { placeholder, name, value, onChange, onBlur, disabled, type } = props;

  const handleChange = (e) => {
    switch (type) {
      case "tel":
        onChange({
          target: {
            name: name,
            value: sysPhone(e.target.value),
          },
        });
        break;

      default:
        onChange(e);
    }
  };

  return (
    <div className={`${styles.TextInput}`}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        disabled={disabled}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
