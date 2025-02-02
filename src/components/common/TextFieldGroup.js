import React from "react";
import classnames from "classnames";
import propTypes from "prop-types";

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className="form-group">
      <input
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {info && <small className="form-text text-muted"> {info} </small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextFieldGroup.propTypes = {
  name: propTypes.string.isRequired,
  placeholder: propTypes.string,
  value: propTypes.string.isRequired,
  info: propTypes.string,
  error: propTypes.string,
  type: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  disabled: propTypes.string
};

TextFieldGroup.propTypes = {
  type: "text"
};

export default TextFieldGroup;
