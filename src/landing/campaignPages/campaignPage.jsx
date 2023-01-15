import { useSinglePrismicDocument } from '@prismicio/react';
import { SliceZone } from '@prismicio/react';
import { Toaster } from 'react-hot-toast';

// components
import Spinner from '../components/spinner';
import ActionButton from './components/actionButton';
import ContactFormComponent from './components/contactFormComponent';

// Slices
import CtaSlice from './slices/ctaSlice';
import GallerySlice from './slices/gallerySlice';
import OutlineSlice from './slices/outlineSlice';
import StepsSlice from './slices/stepsSlice';
import TestimonialsSlice from './slices/testimonialsSlice';
import UspSlice from './slices/uspSlice';

const CampaignPage = (props) => {

    const [document, { state }] = useSinglePrismicDocument('campaign-page-1');
    
    if(state === 'loading') {
        return (
            <div className='h-screen flex items-center justify-center'>
                <Spinner size="md" />
            </div>
        )
    } else {
        return (
            <div className='bg-gradient-to-r from-rose-100 to-teal-100'>
                {/* Toast */}
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                    gutter={8}
                    containerClassName=""
                    containerStyle={{}}
                    toastOptions={{
                        // Define default options
                        className: '',
                        duration: 5000,
                        style: {
                        background: '#363636',
                        color: '#fff',
                        },

                        // Default options for specific types
                        success: {
                        duration: 3000,
                        theme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                        },
                    }}
                />

                {/* hero section */}
                <div className='bg-cover bg-black bg-center bg-no-repeat md:px-16 md:py-16' style={{backgroundImage: `url("${document?.data.hero_background.url}")`}}>
                    <div className='h-full bg-white/20 backdrop-blur p-10 flex flex-col md:flex-row gap-6'>
                        <div className='md:w-1/2 space-y-6'>
                            <img className='h-16 md:h-28' src={`${process.env.PUBLIC_URL}/assets/images/logo/white.png`} alt="Logo"/>
                            <h1 className='text-white text-6xl'>{document?.data?.hero_title[0].text}</h1>
                            <p className='text-white text-xl font-light'>{document?.data?.hero_text[0].text}</p>
                        </div>
                        <div className='md:w-1/2'>
                            <ContactFormComponent />
                        </div>
                    </div>
                </div>

                {/* slice zone - dynamic sections */}
                <SliceZone
                    slices={document?.data?.body}
                    components={{
                        call_to_action: CtaSlice,
                        usp_grid: UspSlice,
                        course_outline_section: OutlineSlice,
                        gallery_section: GallerySlice,
                        steps_section: StepsSlice,
                        testimonials_section: TestimonialsSlice
                    }}
                />

                {/* contact us section */}
                <section className='bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
                    <div className='px-4 sm:px-10 md:px-14 lg:px-24 py-6 md:py-20 flex flex-col md:flex-row space-y-10'>
                        <div className='md:w-1/2 space-y-6'>
                            <img className='h-16 md:h-28' src={`${process.env.PUBLIC_URL}/assets/images/logo/white.png`} alt="Logo"/>
                            <div className='relative max-w-max'>
                                <h2 className='text-white font-bold text-6xl'>Contact us Today</h2>
                                <div className='absolute bottom-[-18px] right-0'>
                                    <svg className='w-36 text-teal-400' viewBox="0 0 988 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M740.736 78.1339C655.256 69.0053 277.207 108.239 198.242 149.026C198.242 150.969 199.132 151.085 200.216 150.969C209.297 149.998 365.132 120.558 477.978 110.57C514.54 107.333 554.453 104.887 592.083 100.276C629.713 95.6641 740.736 78.1339 740.736 78.1339Z" fill="currentColor"/>
                                    <path d="M987.701 20.0599C987.701 20.0599 988.491 20.4485 987.504 22.3908C986.974 22.6511 984.937 23.9444 979.804 26.2751C972.303 30.9366 673.311 20.4832 500.483 38.3172L2.40654 84.5434C-2.19889 84.9234 1.22206 81.2417 1.22206 81.2417C65.1646 61.3428 130.726 40.2597 304.648 25.693C423.886 12.1034 645.8 -0.957092 691.185 0.0552668C758.898 0.0552668 903.099 9.50347 987.701 20.0599Z" fill="currentColor"/>
                                    </svg>
                                </div>
                            </div>
                            <p className='text-xl text-white'>Join the Best Acting School in India.</p>
                        </div>
                        <div className='md:w-1/2'>
                            <ContactFormComponent />
                        </div>
                    </div>
                    <div className='h-16'></div>
                </section>

                <ActionButton />
            </div>
        )
    }
}

export default CampaignPage;