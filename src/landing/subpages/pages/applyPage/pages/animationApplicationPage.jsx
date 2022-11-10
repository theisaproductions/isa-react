import React from 'react';
import {Helmet} from "react-helmet";
import '../../common.css'

const AnimationApplication = () => {

    return(
        <div className=''>
            <Helmet>
                <title>ISA - Application form for animation courses.</title>
                <meta name="description" content=""/>
            </Helmet>
            <div className='max-w-5xl mx-auto px-4 pt-28 pb-14 flex flex-col gap-14 md:gap-20 min-h-screen'>
                
                {/* top section */}
                <div className='flex flex-col gap-6 items-center justify-center'>
                    <h1 className="text-5xl md:text-6xl font-black text-center drop-shadow-dark2 mb-6">Application Form</h1>
                    <a target="_blank" href="https://forms.gle/itKdXNdE7NNAkvsD6" className="bg-black/90 px-10 py-6 subheading text-green-400 hover:drop-shadow-dark1 duration-300">Click here to apply</a>
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

            </div>
        </div>
    )
}

export default AnimationApplication;