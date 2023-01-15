import { useEffect, useState } from 'react';
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import axios from 'axios';
import toast from 'react-hot-toast';
import { isValidPhoneNumber } from 'react-phone-number-input';

// styles
import 'react-phone-number-input/style.css';

// components
import Spinner from '../../components/spinner';
import PhoneInputField from './phoneInputField';
import { getLocation } from '../../services/locationService';

// captures location info from ip and updates the form value.
const HiddenData = ({onChange}) => {
    const { values, setFieldValue } = useFormikContext();
    useEffect(() => {
        getLocation().then(res => {
            setFieldValue('detected_city', res?.data?.city);
            setFieldValue('detected_country', res?.data?.country_name);
            setFieldValue('detected_country_code', res?.data?.country_code);
        })
    }, [])
    return null;
}

const ContactFormComponent = () => {

    const api = "https://submit-form.com/OHNK4wOs";
    
    const [submitting, setSubmitting] = useState(false);

    const initialValues = {
        name: '',
        email: '',
        phone: '',
        course: 'Acting',
        message: '',
        detected_country: '',
        detected_city: '',
        detected_country_code: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().min(2, 'Name is too short').max(80, 'Please enter a shorter name').required('Please enter your name.'),
        email: Yup.string().max(100, 'This is not an email. Please enter a valid email address.').email('Enter a vaild email address').required('Please enter your email address.'),
        phone: Yup.string().required('Please enter your phone number.').test((value, { path, createError }) => {
            if (!isValidPhoneNumber(String(value))) {
              return createError({ path, message: "Please enter a valid phone number." });
            }
            return true;
        }).nullable(),
        course: Yup.string().required('Please select your course.'),
        message: Yup.string().max(100, "Let's keep this message short. Enter your message in less than 100 words."),
        detected_country: Yup.string(),
        detected_city: Yup.string(),
        detected_country_code: Yup.string(),
    });

    const handleSubmit = (value, reset) => {
        console.log(value);
        setSubmitting(true);
        axios.post(api, value).then(res => {
            setSubmitting(false);
            reset();
            toast.success('Message Sent');
        }).catch(error => {
            setSubmitting(false);
            toast.error('Some error occurred!');
        })
    }

    const renderError = (message) => <p className="text-xs text-red-300 mt-1 font-semibold">{message}</p>;

    return (
        <div className='w-full'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values, { resetForm }) => { handleSubmit(values, resetForm); }}
                >
                <Form>
                    <div className="space-y-2">
                        <div>
                            <Field disabled={submitting} name="name" type="text" placeholder="Enter your name*" className="w-full outline-none bg-transparent py-2 text-xl placeholder:text-white text-white border-b-2"/>
                            <ErrorMessage name="name" render={renderError} />
                        </div>
                        <div>
                            <Field disabled={submitting} name="email" type="email" placeholder="Enter your email address*" className="w-full outline-none bg-transparent py-2 text-xl placeholder:text-white text-white border-b-2"/>
                            <ErrorMessage name="email" render={renderError} />
                        </div>
                        <div>
                            <PhoneInputField
                            label="Phone Number"
                            name="phone"
                            type="tel"
                            placeholder="Enter your phone number."
                            international
                            />
                            <ErrorMessage name="phone" render={renderError} />
                        </div>
                        <div>
                            <Field disabled={submitting} as="select" name="course" className="w-full py-2 bg-transparent text-xl border-b-2 text-white outline-none">
                                <option value="Acting" className='text-black'>Acting</option>
                                <option value="Filmmaking" className='text-black'>Filmmaking</option>
                                <option value="Others" className='text-black'>Others</option>
                            </Field>
                            <ErrorMessage name="course" render={renderError} />
                        </div>
                        <div>
                            <Field disabled={submitting} name="message" type="text" placeholder="Please enter your message" className="w-full outline-none bg-transparent py-2 text-xl placeholder:text-white text-white border-b-2"/>
                            <ErrorMessage name="message" render={renderError} />
                        </div>
                    </div>
                    <HiddenData />
                    <div className="text-center mt-6">
                        <button disabled={submitting} type="submit" className="py-2 px-4 w-36 h-12 flex items-center justify-center rounded-md border border-black/20 text-lg font-bold text-white bg-black focus:bg-black/70 shadow-inner shadow-white/40 hover:shadow-white/50 duration-300">
                            {submitting ? <Spinner size="sm" style={'text-white'} /> : 'Submit'}
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
};

export default ContactFormComponent;