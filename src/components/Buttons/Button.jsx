import styles from "./Button.module.css";

const Button = ({
  buttonText,
  buttonStyle = "primary",
  handleClick,
  shadow,
  type = "button",
}) => {
  return (
    <button
      className={`${styles.button} ${styles[buttonStyle]} ${
        shadow && styles.shadow
      }`}
      onClick={handleClick}
      type={type}
    >
      {buttonText}{" "}
    </button>
  );
};
export default Button;
