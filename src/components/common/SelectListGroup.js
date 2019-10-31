import React from "react";
import classnames from "classnames";
import propTypes from "prop-types";

const SelectListGroup = ({ name, value, error, info, options, onChange }) => {
  const selectOptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div className="form-group">
      <select
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        name={name}
        value={value}
        onChange={onChange}
      >
        {selectOptions}
      </select>
      {info && <small className="form-text text-muted"> {info} </small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

SelectListGroup.propTypes = {
  name: propTypes.string.isRequired,
  placeholder: propTypes.string,
  value: propTypes.string.isRequired,
  info: propTypes.string,
  error: propTypes.string,
  options: propTypes.array.isRequired,
  onChange: propTypes.func.isRequired
};

export default SelectListGroup;
