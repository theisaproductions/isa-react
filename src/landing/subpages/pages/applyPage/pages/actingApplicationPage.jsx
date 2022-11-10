import React from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import '../../common.css'

const ActingApplication = () => {

    const handleDownload = () => {
        fetch(`${process.env.PUBLIC_URL}/assets/files/ISA_Fee_Structure.pdf`).then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'ISA_Fee_Structure.pdf';
                alink.click();
            })
        })
    }

    return(
        <div className=''>
            <Helmet>
                <title>ISA - Application form for acting course.</title>
                <meta name="description" content=""/>
            </Helmet>
            <div className='max-w-5xl mx-auto px-4 pt-28 pb-14 flex flex-col gap-14 md:gap-20 min-h-screen'>

                {/* top section */}
                <div className='flex flex-col gap-6 items-center justify-center'>
                    <h1 className="text-5xl md:text-6xl font-black text-center drop-shadow-dark2 mb-6">Application Form</h1>
                    <a target="_blank" href="https://forms.gle/D1tyCYRmiR1R4JP4A" className="bg-black/90 px-10 py-6 subheading text-green-400 hover:drop-shadow-dark1 duration-300">Click here to apply</a>
                    <h3 onClick={handleDownload} className='text-base cursor-pointer hover:text-pink-700 duration-300'>Download Fee Structure</h3>
                </div>

                {/* separator */}
                <div className='border-t border-black/30'></div>

                {/* book a seat section */}
                <div className='text-center space-y-10'>
                    <h2 className='text-4xl md:text-5xl font-black'>Book a Seat</h2>
                    <p className='text-base'>
                        A student can confirm his seat on selection of his application. with advance fee payment of 20%
                        of the fees, which will be adjusted against the full payment.
                    </p>
                    <div className='flex flex-col gap-6 '>
                        <h3 className='text-base font-bold'>Account details for IMPS/NEFT/RTGS</h3>
                        <p className='text-center'>
                            Account Name: ISA Productions <br/>
                            Account Number: 125405001142  <br/>
                            Bank Name: ICICI BANK  <br/>
                            IFSC Code: ICIC0001254  <br/>
                            Google Pay/ Paytm: + 919953522123  <br/>
                        </p>
                    </div>
                </div>

                {/* separator */}
                <div className='border-t border-black/30'></div>

                {/* fee structure */}
                <div className='space-y-20'>
                    <h1 className='text-4xl md:text-5xl font-black'>Fee Structure</h1>

                    <div className='space-y-4'>
                        <h3 className="heading2">Diploma in Foundational Course In Acting: Six months</h3>
                        <h4 className="font-bold">Total Course fee: INR 55,000</h4>
                        <p>The whole fees to be submitted before the commencement of the classes. However, a student can choose
                            to pay the fees in installment with the following options where the fee increases with installments.
                        </p>
                        <h4 className="font-bold">Installment Options:</h4>
                        <p>
                            <strong>Two Installments:</strong> <br/> Total Fees: INR 65,000 <br/>
                            INR 32,500 before joining and INR 32,500 after 2 months of course completion.
                        </p>
                        <p>
                            <strong>Three Installments:</strong> <br/> Total Fees: INR 75,000 <br/>
                            INR 25,000 to be paid before joining and INR 25,000 after every 1 month for the first three months.
                        </p>
                        <p>Please note: 18% GST would be charged separately on the above mentioned fee.</p>
                    </div>

                    <div className='space-y-4'>
                        <h3 className="heading2">Full Fledged Actor: 1 Year Diploma in Intensive Acting</h3>
                        <h4 className="font-bold">Total Course fee: INR 90,000</h4>
                        <p>
                            The whole fees to be submitted before the commencement of the classes. However, a student can choose
                            to pay the fees in installment with the following options where the fee increases with installments.
                        </p>
                        <h4 className='font-bold'>Installment Options:</h4>
                        <p>
                            <strong>Two Installments:</strong> <br/> Total Fees: INR 1,00,000 <br/>
                            INR 50,000 before joining and INR 50,000 after 3 months of course completion.
                        </p>
                        <p>
                            <strong>Four Installments:</strong> <br/> Total Fees: INR 1,10,000 <br/>
                            INR 27,500 to be paid before joining and INR 27,500 after every 1 month for the first four months.
                        </p>
                        <p>Please note: 18% GST would be charged separately on the above mentioned fee.</p>
                    </div>

                    <div className='space-y-4'>
                        <h3 className="heading2">Full Metal Jacket: 2 years Advance Diploma In Professional Acting</h3>
                        <h4 className="font-bold">Total Course fee: INR 1,60,000</h4>
                        <p>
                            The whole fees to be submitted before the commencement of the classes. However, a student can choose
                            to pay the fees in installment with the following options where the fee increases with installments.
                        </p>
                        <h4 className='font-bold'>Installment Options:</h4>
                        <p>
                            <strong>Two Installments:</strong> <br/> Total Fees: INR 1,70,000 <br/>
                            INR 85,000 before joining and INR 85,000 after 4 months of course completion.
                        </p>
                        <p>
                            <strong>Six Installments:</strong> <br/> Total Fees: INR 1,80,000 <br/>
                            INR 30,000 to be paid before joining and INR 30,000 after every 1 month for the first six months
                        </p>
                        <p>Please note: 18% GST would be charged separately on the above mentioned fee.</p>
                    </div>

                    <div className='space-y-4'>
                        <h3 className="heading2">Acting Workshop in Screen Acting: 3 months</h3>
                        <h4 className="font-bold">Total Course fee: INR 36,000</h4>
                        <p>
                            The whole fees to be submitted before the commencement of the classes. However, a student can choose
                            to pay the fees in installment with the following options where the fee increases with installments.
                        </p>
                        <h4 className='font-bold'>Installment Options:</h4>
                        <p>
                            <strong>Two Installments:</strong> <br/> Total Fees: INR 42,000 <br/>
                            INR 21,000 before joining and INR 21,000 after 1 month of course completion.
                        </p>
                        <p>
                            <strong>Three Installments:</strong> <br/> Total Fees: INR 48,000 <br/>
                            INR 16,000 to be paid before joining and INR 16,000 after every 1 month for the first three months.
                        </p>
                        <p>Please note: 18% GST would be charged separately on the above mentioned fee.</p>
                    </div>

                    <div className='space-y-4'>
                        <h3 className="heading2">Diploma in 1 year Part Time: Weekend Professional Acting Course</h3>
                        <h4 className="font-bold">Total Course fee: INR 75,000</h4>
                        <p>
                            The whole fees to be submitted before the commencement of the classes. However, a student can choose
                            to pay the fees in installment with the following options where the fee increases with installments.
                        </p>
                        <h4 className='font-bold'>Installment Options:</h4>
                        <p>
                            <strong>Two Installments:</strong> <br/> Total Fees: INR 80,000 <br/>
                            INR 40,000 before joining and INR 40,000 after 3 months of course completion.
                        </p>
                        <p>
                            <strong>Four Installments:</strong> <br/>Total Fees: INR 85,000 <br/>
                            INR 21,250 to be paid before joining and INR 21,250 after every 1 month for the first four months.
                        </p>
                        <p>Please note: 18% GST would be charged separately on the above mentioned fee.</p>
                    </div>

                    <div className='space-y-4'>
                        <h3 className="heading2">Weekend Foundational Course In Acting: Six months</h3>
                        <h4 className="font-bold">Total Course fee: INR 45,000</h4>
                        <p>
                            The whole fees to be submitted before the commencement of the classes. However, a student can choose
                            to pay the fees in installment with the following options where the fee increases with installments.
                        </p>
                        <h4 className='font-bold'>Installment Options:</h4>
                        <p>
                            <strong>Two Installments:</strong> <br/> Total Fees: INR 50,000 <br/>
                            INR 25,000 before joining and INR 25,000 after 3 months of course completion.
                        </p>
                        <p>
                            <strong>Three Installments:</strong> <br/> Total Fees: INR 57,000 <br/>
                            INR 19,000 to be paid before joining and INR 19,000 after every 1 month for the first three months.
                        </p>
                        <p>Please note: 18% GST would be charged separately on the above mentioned fee.</p>
                    </div>

                    <div className='space-y-4'>
                        <h3 className="heading2">Acting Workshop in Screen Acting: 3 months</h3>
                        <h4 className="font-bold">Total Course fee: INR 30,000</h4>
                        <p>
                            The whole fees to be submitted before the commencement of the classes. However, a student can choose
                            to pay the fees in installment with the following options where the fee increases with installments.
                        </p>
                        <h4 className='font-bold'>Installment Options:</h4>
                        <p>
                            <strong>Two Installments:</strong> <br/>Total Fees: INR 36,000 <br/>
                            INR 18,000 before joining and INR 18,000 after 1 month of course completion.
                        </p>
                        <p>
                            <strong>Three Installments:</strong> <br/>Total Fees: INR 42,000 <br/>
                            INR 14,000 to be paid before joining and INR 14,000 after every 1 month for the first three months.
                        </p>
                        <p>Please note: 18% GST would be charged separately on the above mentioned fee.</p>
                    </div>

                    <div className='border border-black p-4 text-base md:text-lg'>
                        <strong>Please note:</strong> <br/>
                        - Taxes will extra as applicable <br/>
                        - Fee excludes any accommodation facility <br/>
                        - Application based admissions only <br/>
                        - Special discounts and scholarship of up to 60% to deserving applicants <br/>
                    </div>
                </div>

                {/* Online course */}
                <div className='space-y-4'>
                    <h1 className='heading1'>Online Course</h1>
                    <div className='space-y-4'>
                    <p><strong>Foundation of Acting:</strong> <br/>12 week programme in Acting
                        <br/>
                        INR 7,999 - A complete guide (These are not live online classes)
                    </p>
                    <p><strong>ISA Acting guidebook:</strong> <br/> A must have guide to be an actor, <br/> INR 1,699 only (This is
                        a PDF e-book)</p>
                    <p><strong>Private Classes:</strong> Starts at INR 1000 - 1500 per class (live sessions)</p>
                    <p>Please note: 18% GST would be charged separately on the above mentioned fee.</p>
                    </div>
                </div>

                {/* Scholarships and discounts section */}
                <div className='space-y-6'>
                    <h1 className='heading1'>Scholarships and Discounts</h1>
                    <p>
                        Scholarship decisions are made by The ISA Committee upon the student’s admission to The Indian School of Acting
                        and based on a combination of financial need, application and artistic merit. The members of the committee
                        include administrators for the departments of enrollment management and financial aid as well as senior
                        administrators and artistic directors from appropriate areas of the school. While we are unable to meet the full
                        need of all who apply, We make every effort to assist as many students as possible to attend the school.
                        Concessions and discounts upto 60% are given to the best applications that we get throughout the year.
                    </p>
                </div>

                {/* Help section */}
                <div className="space-y-4">
                    <h3 className="subheading">Need Help?</h3>
                    <p>
                        Contact our support center - <Link to={'/?page=19'} className="text-blue-600 font-semibold">Click here</Link>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default ActingApplication;