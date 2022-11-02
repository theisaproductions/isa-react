import React, { useState } from 'react';
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Spinner from '../../components/spinner';
import axios from 'axios';
import toast from 'react-hot-toast';

const ContactSlide = ({current, index}) => {

    const api = "https://submit-form.com/OHNK4wOs";

    const [submitting, setSubmitting] = useState(false);

    const validationSchema = Yup.object({
        name: Yup.string().min(2, 'Name is too short').max(80, 'Please enter a shorter name').required('Please enter your name.'),
        email: Yup.string().max(100, 'This is not an email. Please enter a valid email address.').email('Enter a vaild email address').required('Please enter your email address.'),
        phone: Yup.string().min(10, 'Phone number is too short').max(13, 'Phone number too long').required('Please enter your phone number..'),
        query: Yup.string().min(8, 'Query is too short. Please elaborate.').max(400, "let's keep it short. Enter your query in less than 400 words.").required('Please enter your query.'),
    });

    const initialValues = {
        name: '',
        email: '',
        phone: '',
        query: ''
    };

    const handleSubmit = (value, reset) => {
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


    const renderError = (message) => <p className="text-xs text-red-600 mt-1 font-semibold">{message}</p>;

    return (
        <div className='bg-white h-screen'>
                <div className={`h-full w-full px-5vw pt-24 md:pt-28 pb-4 md:pb-10 ${current.current === index  ? 'animate-fadeInText opacity-100' : 'opacity-0'}`}>
                    <div className='h-full w-full flex flex-col gap-10 pr-8 md:pr-10'>
                        <div className='flex flex-col sm:items-center'>
                            <div className='px-8 py-4 text-4xl font-black uppercase border-2 border-black select-none text-center'>Contact Us</div>
                        </div>
                        <div className='flex-grow flex gap-10'>
                            <div className='w-full sm:w-1/2 flex flex-col gap-10'>
                                <a tabIndex={-1} href="/" className='text-lg md:text-2xl max-w-max'>www.isafilmschool.com</a>
                                <div className="flex items-end gap-4">
                                    <a tabIndex={-1} target="_blank" href="https://www.facebook.com/theindianschoolofacting/" className='duration-200 hover:opacity-80'>
                                        <img className='h-6 md:h-8' src={`${process.env.PUBLIC_URL}/assets/images/utility/icons/social/facebook.png`} alt="facebook"/>
                                    </a>
                                    <a tabIndex={-1} target="_blank" href="https://www.instagram.com/theindianschoolofacting/" className='duration-200 hover:opacity-80'>
                                        <img className='h-6 md:h-8' src={`${process.env.PUBLIC_URL}/assets/images/utility/icons/social/instagram.png`} alt="instagram"/>
                                    </a>
                                    <a tabIndex={-1} target="_blank" href="https://twitter.com/ISAFilmschool" className='duration-200 hover:opacity-80'>
                                        <img className='h-6 md:h-8' src={`${process.env.PUBLIC_URL}/assets/images/utility/icons/social/twitter.png`} alt="twitter"/>
                                    </a>
                                    <a tabIndex={-1} target="_blank" href="https://www.linkedin.com/company/the-indian-school-of-acting/" className='duration-200 hover:opacity-80'>
                                        <img className='h-6 md:h-8' src={`${process.env.PUBLIC_URL}/assets/images/utility/icons/social/linkedin.png`} alt="linkedin"/>
                                    </a>
                                    <a tabIndex={-1} target="_blank" href="https://www.youtube.com/channel/UCXRE4_lhZmwD_5xPLoTiiYg" className='duration-200 hover:opacity-80'>
                                        <img className='h-6 md:h-8' src={`${process.env.PUBLIC_URL}/assets/images/utility/icons/social/youtube.png`} alt="youtube"/>
                                    </a>
                                </div>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10 text-base sm:text-sm md:text-base'>
                                    <div className="flex gap-2">
                                        <img className='h-4 mt-0.5' src={`${process.env.PUBLIC_URL}/assets/images/utility/icons/contact/location.png`} alt="address"/>
                                        <p className="text-gray-500">
                                            11/3, Apex Acacia Valley Apartment, Basement of Market Complex, Sector 3, Vaishali, UP, 210010
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <img className='h-4 mt-0.5' src={`${process.env.PUBLIC_URL}/assets/images/utility/icons/contact/call.png`} alt="phone"/>
                                        <p className="text-gray-500">
                                            <a tabIndex={-1} href="tel:+918130174322">+91 81301 74322</a> <br />
                                            <a tabIndex={-1} href="tel:+919953522123">+91 99535 22123</a>
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <img className='h-4 mt-0.5' src={`${process.env.PUBLIC_URL}/assets/images/utility/icons/contact/email.png`} alt="email"/>
                                        <p className="text-gray-500">
                                            <a tabIndex={-1} href="mailto:isafilmschool@gmail.com">isafilmschool@gmail.com</a>
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <img className='h-4 mt-0.5' src={`${process.env.PUBLIC_URL}/assets/images/utility/icons/contact/time.png`} alt="open"/>
                                        <p className="text-gray-500">We're always open.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='hidden sm:block w-1/2'>
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={async (values, { resetForm }) => { handleSubmit(values, resetForm); }}
                                    >
                                    <Form>
                                        <div className="space-y-2">
                                            <div>
                                                <label className="text-xs font-bold">Full Name</label>
                                                <Field disabled={submitting} name="name" type="text" tabIndex={-1} placeholder="Enter your name" className="text-sm shadow-sm text-black py-2 px-3 rounded-md w-full border border-black/20 outline-none duration-200 focus:ring-2 focus:ring-black/30" />
                                                <ErrorMessage name="name" render={renderError} />
                                            </div>
                                            <div>
                                                <label className="text-xs font-bold">Email Address</label>
                                                <Field disabled={submitting} name="email" type="text" tabIndex={-1} placeholder="Enter your email address" className="text-sm shadow-sm text-black py-2 px-3 rounded-md w-full border border-black/20 outline-none duration-200 focus:ring-2 focus:ring-black/30" />
                                                <ErrorMessage name="email" render={renderError} />
                                            </div>
                                            <div>
                                                <label className="text-xs font-bold">Phone Number</label>
                                                <Field disabled={submitting} name="phone" type="text" tabIndex={-1} placeholder="Please enter your phone number" className="text-sm shadow-sm text-black py-2 px-3 rounded-md w-full border border-black/20 outline-none duration-200 focus:ring-2 focus:ring-black/30" />
                                                <ErrorMessage name="phone" render={renderError} />
                                            </div>
                                            <div>
                                                <label className="text-xs font-bold">Your Query</label>
                                                <Field disabled={submitting} name="query" type="text" tabIndex={-1} placeholder="Please enter your query" className="text-sm shadow-sm text-black py-2 px-3 rounded-md w-full border border-black/20 outline-none duration-200 focus:ring-2 focus:ring-black/30" />
                                                <ErrorMessage name="query" render={renderError} />
                                            </div>
                                        </div>
                                        <div className="text-center mt-6">
                                            <button tabIndex={-1} disabled={submitting} type="submit" className="py-2 px-10 flex items-center justify-center rounded-md border border-black/20 text-lg font-bold text-white bg-black focus:bg-black/70">
                                                {submitting ? <Spinner size="sm" style='text-white' /> : 'Submit'}
                                            </button>
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ContactSlide;