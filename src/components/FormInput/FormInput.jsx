import { FormInputStyled } from "./FormInput.styled";

function FormInput({ label, ...otherProps }) {
  return (
    <FormInputStyled>
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
          htmlFor=""
        >
          {label}
        </label>
      )}
    </FormInputStyled>
  );
}

export default FormInput;
