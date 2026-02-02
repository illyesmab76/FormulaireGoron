import { useState } from "react";
import InputMui from "./InputMui";

const formatDateInput = (value) => {
  let v = value.replace(/\D/g, "");

  if (v.length > 8) v = v.slice(0, 8);

  if (v.length >= 5) return `${v.slice(0, 2)}/${v.slice(2, 4)}/${v.slice(4)}`;
  if (v.length >= 3) return `${v.slice(0, 2)}/${v.slice(2)}`;
  return v;
};

const isValidDateFR = (date) => {
  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(date)) return false;

  const [d, m, y] = date.split("/").map(Number);
  const testDate = new Date(y, m - 1, d);

  return (
    testDate.getFullYear() === y &&
    testDate.getMonth() === m - 1 &&
    testDate.getDate() === d
  );
};

function DateInput({ label, name, value, onChange, required = false }) {
  const [touched, setTouched] = useState(false);

  const handleChange = (e) => {
    const formatted = formatDateInput(e.target.value);

    onChange({
      target: {
        name,
        value: formatted,
      },
    });
  };

  const isError = touched && value && !isValidDateFR(value);

  return (
    <InputMui
      label={label}
      name={name}
      value={value}
      onChange={handleChange}
      onBlur={() => setTouched(true)}
      inputProps={{ maxLength: 10 }}
      error={isError}
      helperText={isError ? "Format attendu : JJ/MM/AAAA" : ""}
      required={required}
      fullWidth
    />
  );
}

export default DateInput;
