import styles from "./Button.module.scss";
import { Oval } from "react-loader-spinner";

const Button = (props) => {
  const { isLoading, btnText, type, className } = props;
  return (
    <div className={`${styles.Button} `}>
      <button
        className={`btn btn-primary ${className}`}
        type={type || "button"}
        disabled={isLoading}
      >
        {isLoading ? (
          <Oval
            height={50}
            width={50}
            color="#422e72"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#grey"
            strokeWidth={5}
            strokeWidthSecondary={5}
          />
        ) : (
          btnText
        )}
      </button>
    </div>
  );
};

export default Button;
