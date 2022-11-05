import React from 'react';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import SubpageFooter from '../components/subpageFooter';
import TopMediaComponent from '../components/topMediaComponent';
import './common.css';

const AnimationsPage = () => {

    return(
        <div className=''>
            <MetaTags>
                <title>Indian School of Animations</title>
                <meta name="description" content={`The Indian School of Animation is the best animation school in India. We offer a wide range of production services and training programs at our award-winning film school.`}/>
            </MetaTags>
            <TopMediaComponent type="video" mediaUrl='animation.mp4' />
            <div className='max-w-5xl mx-auto px-4 py-14 flex flex-col gap-14 md:gap-28'>
                {/* just center text */}
                <div className='text-center flex flex-col gap-10'>
                    <h2 className='quote'>“Nothing’s occurring in animation. You manufacture everything.”</h2>
                    <h1 className='heading1'>ISA School of Animations</h1>
                    <p className="paragraph">
                        Courses for all age groups
                        <br />
                        Diploma, Advance Diploma course
                        <br />
                        Short term certificate courses
                        <br />
                        Full time and Part time
                    </p>
                    <p className="paragraph">
                        ISA instills students with the full confidence
                        and ability to become part of the highes
                        echelons of the animation industry.
                    </p>
                </div>

                {/* just text*/}
                <div className='flex flex-col md:flex-row gap-6'>
                    <h1 className="heading1">Overview</h1>
                    <div className='space-y-6'>
                        <p className='paragraph'>
                            We follow a rigorous curriculum, providing students with a pairing studio and a creative atmosphere along
                            with our excellence in propelling the animators outside of the classroom through client projects, substantive
                            internships and in house productions, stopping at nothing to shape our students into the experts of the field.
                            <br/><br/>
                            Animation begins with a simple drawing on a piece of paper, adding movement and motion with just slight
                            variations. If you can animate in that medium, there are no boundaries to your creative potential. The goal
                            of ISA Animation School is to develop your technical animation skills to support, not lead, creative process
                            of animation. With such limited animation schools in India, ISA School of Animations has surely carved
                            its way to the top.
                        </p>
                        <p className="paragraph">
                            “ISA Animations is now one of the best animation schools in India.”
                        </p>
                        
                    </div>
                </div>

                <h3 className="quote text-center">“Well, luckily with animation, fantasy is your friend.”</h3>

                <h2 className='heading1'>Courses</h2>

                {/* image left text right */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'>
                    <div>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/animation/1.jpg`} alt="girl smiling"/>
                    </div>
                    <div className='flex flex-col gap-6 md:gap-10'>
                        <div className='space-y-4'>
                            <h3 className="heading2">Editing Foundation</h3>
                            <p className="paragraph">
                                Certificate course <br />
                                Duration: 2 months
                            </p>
                        </div>
                        <div className='space-y-4'>
                            <h3 className="heading2">Editing Pro</h3>
                            <p className="paragraph">
                                Certificate course <br />
                                Duration: 3/ 4 months
                            </p>
                        </div>
                        <div className='space-y-4'>
                            <h3 className="heading2">Editing Premiere</h3>
                            <p className="paragraph">
                                Certificate course <br />
                                Duration: 1 months
                            </p>
                        </div>
                    </div>
                </div>

                {/* text with row of items */}
                <div className='flex flex-col gap-6'>
                    <h2 className='heading2'>Editing courses Inclusions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">Basics of Filmmaking</h4>
                        </div>
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">Video Editing</h4>
                        </div>
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">Audio-Video Synchronisation</h4>
                        </div>
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">Sound Editing</h4>
                        </div>
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">Digital Design</h4>
                        </div>
                    </div>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/animation/2.jpg`} alt=""/>
                    <h2 className='heading2'>3-D Animation Film Making: Diploma Course</h2>
                    <p className='paragraph font-semibold'>Duration: 10 months</p>
                    <p className="paragraph">
                        At ISA Animation School, we set ourselves apart with an
                        emphasis on the practical, technical and artistic skills that
                        are required to bring CG-enhanced stories to life and actively
                        prepare students for the rigors of a professional studio.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/animation/3.jpg`} alt=""/>
                    <h2 className='heading2'>Advance 3D Animation Film Making</h2>
                    <p className='paragraph font-semibold'>
                        Advance Diploma
                        <br/> Duration: 14 months
                        <br/> 3-D animation Filmmaking + Specialization
                    </p>
                    <p className="paragraph">
                        One of the best animation schools in India
                        ISA Animations has an award-winning faculty of
                        professional animators and visual artists who can
                        share a wealth of industry secrets and practical
                        knowledge for the aspiring practitioner. The goal
                        is to prepare the next generation of animators &
                        artists for a growing and competitive industry.
                    </p>
                </div>

                {/* text with row of items */}
                <div className='flex flex-col gap-6'>
                    <h2 className='heading2'>Animation Filmmaking Courses inclusions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">Pre Production</h4>
                        </div>
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">Storyboarding</h4>
                        </div>
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">Filmmaking Concepts</h4>
                        </div>
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">Modeling (Characters and Environment)</h4>
                        </div>
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">Texture Painting</h4>
                        </div>
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">Look Development</h4>
                        </div>
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">Animation</h4>
                        </div>
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">Rigging</h4>
                        </div>
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">Digital Painting</h4>
                        </div>
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">Lighting and Rendering</h4>
                        </div>
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">Particle and Dynamics</h4>
                        </div>
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">Composting</h4>
                        </div>
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">Character Design</h4>
                        </div>
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">Matte Painting</h4>
                        </div>
                    </div>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/animation/4.jpg`} alt=""/>
                    <h2 className='heading2'>3-D Architectural Visualisation</h2>
                    <p className='paragraph font-semibold'>
                        Diploma in Architectural Visualisation <br/> Duration: 6 months
                    </p>
                    <p className="paragraph">
                        Modeling, texturing, rendering from an unfinished
                        mockup of a lifelike architectural visualization,
                        the artist needs a little bit more than talent to create
                        something truly stunning and thus need to train
                        with the best institute.
                    </p>
                </div>

                {/* text with row of items */}
                <div className='flex flex-col gap-6'>
                    <h2 className='heading2'>Architectural Course Inclusions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">Video Editing</h4>
                        </div>
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">Photoshop for Texturing</h4>
                        </div>
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">3D Design Visualisation</h4>
                        </div>
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">Overview of Architecture</h4>
                        </div>
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">Real world Lighting Simulation</h4>
                        </div>
                    </div>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/animation/5.jpg`} alt=""/>
                    <h2 className='heading2'>4-Week Online 3D Animation</h2>
                    <p className="paragraph">
                        This online 4-Week Survey of 3D Animation workshop is designed to deliver a bird’s-eye view of the tools,
                        pipelines and careers available in 3D animation. The course will cover basic introductions to modeling,
                        texturing,
                        rigging, lighting, rendering and compositing. This survey course offers a window into the magnitude of the
                        industry, giving the student a hands-on perspective of all its possibilities and a glimpse at some emerging
                        technologies.
                    </p>
                </div>

                <h1 className='heading1'>Career</h1>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/animation/6.jpg`} alt=""/>
                    <h2 className='heading2'>Placements and Career</h2>
                    <p className="paragraph">
                        Students from our animation program are following their dreams in the industry with internships at the biggest studios
                        of the world. ISA Animations is India’s leading animation school because the vision is to help and guide students find
                        the right work in the animation industry based upon their capabilities and talents. A student can choose one or
                        many career options.
                    </p>
                </div>

                {/* text with row of items */}
                <div className='flex flex-col gap-6'>
                    <h2 className='heading2'>Career Options</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">Character Animator</h4>
                        </div>
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">Character Designer</h4>
                        </div>
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">Post Producer</h4>
                        </div>
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">Storyboard Artist</h4>
                        </div>
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">Lighting Technician</h4>
                        </div>
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">Texture Artist</h4>
                        </div>
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">Rendering Artist</h4>
                        </div>
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">Layout Artist</h4>
                        </div>
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">Character Rigger</h4>
                        </div>
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">3d Generalist</h4>
                        </div>
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">Motion Graphics Artist</h4>
                        </div>
                        <div className="border border-black px-1 py-2">
                            <h4 className="paragraph font-semibold text-center">Production Coordinator</h4>
                        </div>
                    </div>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/animation/7.jpg`} alt=""/>
                    <h2 className='heading2'>Eligibility and Application Requirements</h2>
                    <p className="paragraph">
                        At ISA, we are looking for creative, motivated, committed individuals with original ideas and the determination
                        to succeed in this most competitive industry. Our students come from all over the country and even abroad. Our
                        current students come from New Zealand, Kenya, and different states of India. We don’t seek a prior
                        experience or academic qualification. There is no age bar to apply.
                        However the selections and admissions are strictly on the basis of applications followed by an interview.
                    </p>
                </div>

                {/* just text*/}
                <div className='flex flex-col gap-6'>
                    <h1 className="heading2">Scholarships and Discounts</h1>
                    <p className="paragraph">
                        Scholarship decisions are made by The ISA Committee upon the student’s admission to ISA School of Animations
                        and based on a combination of financial need, application and artistic merit. The members of the committee
                        include
                        administrators for the departments of enrollment management and financial aid as well as senior administrators
                        and artistic directors from appropriate areas of the school. While we are unable to meet the full need of all
                        who apply,
                        We make every effort to assist as many students as possible to attend the school. Concessions and discounts upto
                        60%
                        are given to the best applications that we get throughout the year.
                    </p>
                </div>

                {/* just text*/}
                <div className='flex flex-col gap-6'>
                    <h1 className="heading2">How to apply</h1>
                    <p className="paragraph">
                        The admissions are strictly on the basis of applications. Every application duly submitted is screened by ISA.
                        We accept applications throughout the year and hold a telephonic interview/auditions at regular intervals. The
                        first stage is to contact us for an application form, submit it and then we will contact you regarding a date
                        for a
                        telephonic interview/audition. The applicant thereafter has to deposit registration fees towards the
                        confirmation
                        of their seat, since the batch limit is restricted to limited students only. This registration amount shall be
                        adjusted
                        against the course fee and the applicant shall have to pay the balance amount at the time of admission.
                    </p>
                </div>

                {/* Apply here section */}
                <div className='flex flex-col gap-10'>
                    <h1 className='heading1'>Application Form</h1>
                    <div className='mt-4'>
                        <Link to="/apply/animation" className="border border-black text-lg px-10 py-4 font-bold hover:text-white hover:bg-blue-800">Apply Here</Link>
                    </div>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/animation/8.jpg`} alt=""/>
                    <h2 className='heading2'>For Schools and Colleges</h2>
                    <p className="paragraph">
                        This creative workshop for schools helps students create their own stop motion animations,
                        from teaching the
                        methods to watching their final product on YouTube. Stop motion animation is one of the simplest and most
                        effective ways to create an impressive animation and our workshop leader teaches students how to make
                        stop motion animation step by step, frame by frame. Students begin with an initial concept and they take the
                        concept from start to finish by learning to storyboard their animation, constructing a set, animating and
                        editing
                        their movies and finally watching their short film on YouTube.
                        <br/><br/>
                        Our local stop motion animation expert will provide their knowledge and the equipment to teach students how
                        to make stop motion animation movies and help them produce their first short movies.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/animation/9.jpg`} alt=""/>
                    <h2 className='heading2'>For Corporates</h2>
                    <p className="paragraph">
                        Our workshops are a fantastic way to get your team working together and being creative. Our
                        workshop leaders
                        work with your group. Each group becomes a film crew and receives an animation station along with instructions
                        from our stop motion animation experts on how to use the software. When the films are all in, the groups get
                        together for a premiere screening of all the films they have created. After the session the finished animations
                        can be taken away on a USB memory stick.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/animation/10.jpg`} alt=""/>
                    <h2 className='heading2'>Accommodation Facilities</h2>
                    <p className="paragraph">
                        The best animation school of India, ISA School of Animation is located in Vaishali, Ghaziabad which is part of
                        the National Capital Region, Delhi - NCR. Vaishali is very well connected to the Delhi Metro. Vaishali has an
                        elevated metro station located on the branch line of the Blue Line of the Delhi Metro. So it is in the very close
                        proximity of Delhi. ISA school of animation is located at a walkable distance of less than 2km from the metro station.
                    </p>
                    <h3 className="subheading">Student Housing Options</h3>
                    <p className="paragraph">Outstation students can choose between various accommodation preferences including Paying
                        Guest, Hotels,
                        Service Apartments and Rentals facilities. Expenses for accommodation in NCR starts from Rs 4,000 per month
                        for hostel facilities, PG facilities and onwards depending on the preferred type of accommodation and location.
                        A list of accommodation facilities that has been compiled by us from contacts received by our students. Many
                        of the ISA students are staying in PG and flats. For help and guidance on accommodation, you may contact on
                        this number: <a className='font-bold text-blue-600' href="tel:+918077441855">+91 - 8077441855</a>. <br/><br/> Please note that ISA school of Animation
                        is not associated in any manner
                        with any accomodation entities
                        and these are just suggestions to help outstation students. ISA doesn’t provide in house hostel facilities.
                        Applicants
                        are advised to conduct due diligence before patronizing these facilities. Please make sure you verify the
                        authenticity
                        of the company/ agent/ broker before you transfer any funds for such a facility.
                    </p>
                </div>

                {/* one image and terms */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/animation/11.jpg`} alt=""/>
                    <h2 className='heading2'>Terms, Conditions and Rules</h2>
                    <p className='paragraph terms'>
                        ISA has all the rights to take disciplinary action against any student failing to abide by the rules and
                        regulations of the institute.
                    </p>
                    <p className='paragraph terms'>Diplomas/ Certificates for all courses will be awarded to only those students with 75% and above attendance.</p>
                    <p className='paragraph terms'>Please note that all applicants 18 years of age and below will need to submit a parent consent letter.</p>
                    <p className='paragraph terms'>There shall be no refund of admission or registration fees under any circumstances.</p>
                    <p className='paragraph terms'> We don’t seek prior experience. Freshers are welcome if they have the right will to learn.</p>
                    <p className='paragraph terms'>We need a minimum of 10 students to run a batch without which the batch can be cancelled without prior notice.
                        In the case of such a cancellation, the fees will be refunded.
                    </p>
                    <p className='paragraph terms'>Any kind of misbehavioral activity or act of violence in or near the premises can lead to immediate
                        cancellation of the admission of the student. No fees would be refunded under such circumstances.
                    </p>
                    <p className='paragraph terms'>The institute will not be responsible for any loss or theft of any valuables on premises.</p>
                    <p className='paragraph terms'>All students need to submit their fitness certificate before joining the classes.</p>
                    <p className='paragraph terms'>Management policy changes, course dates and schedule are subject to change as per management discretion and
                        will be communicated accordingly and will be final and binding.
                    </p>
                    <p className='paragraph terms'>Please note that admission to any course at The Indian School of Acting is based on applicant information
                        received during the admission process. If, however, the information submitted by a student is found to be wrong or
                        faulty, the institute reserves the right to cancel that particular admission and any fees paid by that applicant will be
                        non-refundable.
                    </p>
                    <p className='paragraph terms'>The admissions for all courses are subject to seat availability.</p>
                </div>

            </div>
            <SubpageFooter />
        </div>
    )
}

export default AnimationsPage;