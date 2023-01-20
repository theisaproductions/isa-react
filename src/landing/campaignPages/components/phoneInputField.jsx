import PhoneInput from "react-phone-number-input";
import { useField } from "formik";
import './phoneInputStyles.css';
// styles
import 'react-phone-number-input/style.css';

const PhoneInputField = ({ darkMode, label, ...props }) => {
  const [field, meta, helpers] = useField(props.name);
  return (
      <PhoneInput
        className={`${darkMode ? 'text-black border-black darkArrow' : 'text-white border-white lightArrow'} text-xl border-b-2`}
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