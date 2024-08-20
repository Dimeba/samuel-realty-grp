import styles from "./Button.module.scss";

const Button = ({ text, color }) => {
  return (
    <button
      className={`${styles.button} ${
        color === "primary" ? styles.primary : styles.secondary
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
