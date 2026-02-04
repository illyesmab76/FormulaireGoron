import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);
dayjs.locale("fr");

function DatePickerMui({ label, value, onChange, disabled, name }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
      <DatePicker
        label={label}
        value={value ? dayjs(value, "DD/MM/YYYY") : null}
        disabled={disabled}
        format="DD/MM/YYYY"
        slotProps={{
          actionBar: { actions: ['today'] },
          textField: {
            fullWidth: true,
            variant: "outlined",
            inputProps: { readOnly: true },
            sx: {
              "& .MuiInputBase-root": {
                height: "56px",
                backgroundColor: "#fff",
              },
            }
          },
        }}
        onChange={(newValue) => {
          onChange({
            target: {
              name: name,
              value: newValue && newValue.isValid() ? newValue.format("DD/MM/YYYY") : "",
            },
          });
        }}
      />
    </LocalizationProvider>
  );
}

export default DatePickerMui;