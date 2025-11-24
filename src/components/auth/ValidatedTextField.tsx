import { TextField, TextFieldProps, InputAdornment } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface ValidatedTextFieldProps extends Omit<TextFieldProps, "sx"> {
  isValid?: boolean;
  showValidation?: boolean;
}

export default function ValidatedTextField({
  isValid = false,
  showValidation = true,
  ...props
}: ValidatedTextFieldProps) {
  return (
    <TextField
      {...props}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: 2,
          "&.Mui-focused fieldset": {
            borderColor: isValid && showValidation ? "#4caf50" : "#1976d2",
          },
          "& fieldset": {
            borderColor: isValid && showValidation ? "#4caf50" : "rgba(0, 0, 0, 0.23)",
          },
        },
      }}
      InputProps={{
        ...props.InputProps,
        endAdornment:
          isValid && showValidation ? (
            <InputAdornment position="end">
              <CheckCircleIcon sx={{ color: "#4caf50" }} />
            </InputAdornment>
          ) : (
            props.InputProps?.endAdornment
          ),
      }}
    />
  );
}

