import PhoneInput from "react-phone-number-input";
import { useField } from "formik";
import './phoneInputStyles.css';

const PhoneInputField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props.name);
  return (
      <PhoneInput
        {...props}
        {...field}
        value={field.value}
        defaultCountry="IN"
        onChange={(value) => {
          helpers.setValue(value);
        }}
      />
  );
};

export default PhoneInputField;