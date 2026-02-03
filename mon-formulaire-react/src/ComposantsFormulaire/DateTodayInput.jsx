import DateInput from "../Composants/DateInput";

function DateTodayInput({ name, value, onChange, label, required = false, disabled = false }) {
  // On a retiré le useEffect pour laisser l'utilisateur modifier le champ librement
  return (
    <DateInput
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
    />
  );
}

export default DateTodayInput;