import styles from "./Button.module.scss";
import { Oval } from "react-loader-spinner";

const Button = (props) => {
  const { isLoading, btnText, type } = props;
  return (
    <div className={`${styles.Button}`}>
      <button class="btn btn-primary" type={type || "button"} disabled={isLoading}>
        {/* <span
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span> */}

        {/* <span class="sr-only">Loading...</span> */}
        {isLoading?<Oval
          height={50}
          width={50}
          color="#000"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#grey"
          strokeWidth={5}
          strokeWidthSecondary={5}
        />:btnText}
      </button>
    </div>
  );
};

export default Button;
