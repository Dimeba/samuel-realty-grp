//styles

import styles from "./Button.module.scss";

const Button = ({ text, buttonClass }) => {
  return (
    <button
      className={$`{styles.button} ${
        color == "primary" ? styles.primary : styles.secundary
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
