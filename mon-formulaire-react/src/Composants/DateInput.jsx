import { useState } from "react";
import InputMui from "./InputMui";

const formatDateInput = (value) => {
  let v = value.replace(/\D/g, "");

  if (v.length > 8) v = v.slice(0, 8);

  let day = v.slice(0, 2);
  let month = v.slice(2, 4);
  let year = v.slice(4, 8);

 
  if (day.length === 2 && Number(day) > 31) day = "31";
  if (month.length === 2 && Number(month) > 12) month = "12";
  if (year.length === 4 &&Number(year) < 2026) year = "2026";

  if (v.length >= 5) return `${day}/${month}/${year}`;
  if (v.length >= 3) return `${day}/${month}`;
  return day;
};

function DateInput({ label, name, value, onChange, required }) {
  const handleChange = (e) => {
    const formatted = formatDateInput(e.target.value);

    onChange({
      target: {
        name,
        value: formatted,
      },
    });
  };

  return (
    <InputMui
      label={label}
      name={name}
      value={value}
      onChange={handleChange}
      inputProps={{
        maxLength: 10,
        inputMode: "numeric",
        pattern: "\\d{2}/\\d{2}/\\d{4}",
      }}
      required={required}
      fullWidth
    />
  );
}

export default DateInput;
