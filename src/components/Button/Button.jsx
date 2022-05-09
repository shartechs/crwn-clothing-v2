import { ButtonStyled } from "./Button.styled";
export const BUTTON_TYPE_CLASSES = {
  google: "google",
  inverted: "inverted",
};

function Button({ children, className, ...otherProps }) {
  return (
    <ButtonStyled
      className={`${
        BUTTON_TYPE_CLASSES[className] ? BUTTON_TYPE_CLASSES[className] : ""
      }`}
      {...otherProps}
    >
      {children}
    </ButtonStyled>
  );
}

export default Button;
