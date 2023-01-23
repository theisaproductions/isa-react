import PhoneInput from "react-phone-number-input";
import { useField } from "formik";
// styles
import 'react-phone-number-input/style.css';
import styles from './phoneInputField.module.css';

const PhoneInputField = ({ darkMode, label, ...props }) => {
  const [field, meta, helpers] = useField(props.name);
  return (
      <PhoneInput
        className={`${darkMode ? 'text-black border-black ' + styles.darkArrow : 'text-white border-white ' + styles.lightArrow} text-xl border-b-2 ${styles.PhoneInput}`}
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