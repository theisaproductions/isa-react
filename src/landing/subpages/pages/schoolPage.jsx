import React from 'react';
import SubpageFooter from '../components/subpageFooter';
import TopMediaComponent from '../components/topMediaComponent';
import './common.css';

const SchoolPage = () => {
    return (
        <div className=''>
            <TopMediaComponent type="image" mediaUrl='schools.jpg' />
            <div className='max-w-5xl mx-auto px-4 py-14 flex flex-col gap-14 md:gap-28'>
                
                {/* just center text */}
                <div className='text-center flex flex-col gap-10'>
                    <h1 className='heading1'>Collaborations</h1>
                    <p class="subheading">To create purposeful opportunities that work for your students, staff and management.</p>
                </div>

                {/* Overview section */}
                <div className='flex flex-col gap-6'>
                    <h1 className="heading1">Overview</h1>
                    <div className='space-y-6'>
                        <p className='paragraph'>
                            ISA illustrates a wide range of ways in which schools and organizations
                            combine forces to benefit students teachers and entire communities.
                        </p>
                    </div>
                </div>

                {/* image left text right */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'>
                    <div>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/school/1.jpg`} alt="kid"/>
                    </div>
                    <div className='flex flex-col gap-6 md:gap-10'>
                        <h3 className="heading2">After school</h3>
                        <p className="paragraph font-semibold">
                            Training in the campus
                        </p>
                        <p className='paragraph'>
                            Using the campus space as an alternative
                            campus for training the students in various
                            forms of performing arts to benefit the
                            students as well as the institute. Space to be
                            used after school/college hours or holidays.
                        </p>
                    </div>
                </div>

                {/* image right text left fixed */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-10'>
                        <h1 className='heading2'>Special Programs/Events</h1>
                        <p className='paragraph font-semibold'>
                            For Schools and Colleges <br/> Small and Big scale Events
                        </p>
                        <p className='quote'>
                            “From festivals to annual functions, ISA organizes, manages and choreographs it all.”
                        </p>
                    </div>
                    <div className='order-first md:order-last'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/school/2.jpg`} alt="kid2"/>
                    </div>
                </div>

                {/* image left right content with image */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'>
                    <div>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/school/3.jpg`} alt="horse"/>
                    </div>
                    <div className='flex flex-col gap-6 md:gap-10'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/school/4.jpg`} alt="summer camp"/>
                        <h3 className="heading2">Summer Camp | Winter Workshops</h3>
                        <p className='paragraph'>
                            Tailored programs according to the needs to make the best use of Summers and Winters.
                        </p>
                    </div>
                </div>

                {/* image left text right */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'>
                    <div>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/school/5.jpg`} alt="teacher"/>
                    </div>
                    <div className='flex flex-col gap-6 md:gap-10'>
                        <h3 className="heading2">Hire Teachers</h3>
                        <p className="paragraph font-semibold">
                            Full time and part time faculty <br/> For all performing arts courses
                        </p>
                        <p className='paragraph'>
                            ISA with its vast network and hold in performing
                            arts all across India provides schools, colleges and
                            organizations with the best faculty for various
                            performing arts and arts courses.
                        </p>
                    </div>
                </div>

                {/* image right text left fixed */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-10'>
                        <h1 className='heading2'>Programs For Staff</h1>
                        <p className='paragraph font-semibold'>
                            Customized Training for Faculty <br/> Arts and Fitness Programs
                        </p>
                        <p className='paragraph'>
                            ISA organizes various programs for
                            not just students but the faculty and
                            staff as well to build their talent, skills
                            and fitness. In order to promote a fit,
                            healthy and talented culture not just
                            amongst the students but also among their
                            teachers as well.
                        </p>
                    </div>
                    <div className='order-first md:order-last'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/school/6.jpg`} alt="teacher"/>
                    </div>
                </div>

                {/* image with overlay text */}
                <div className='relative'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/school/7.jpg`} alt="pencils"/>
                    <div className='absolute z-10 top-0 left-0 h-full w-full'>
                        <div className='h-full w-full flex flex-col items-end justify-center p-4 gap-2 md:gap-4 lg:gap-6'>
                            <div className='px-6 py-4 bg-black/70 text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white'>More Than 50 courses.</div>
                            <div className='px-6 py-4 bg-black/70 text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white'>More Than 100 partners.</div>
                            <div className='px-6 py-4 bg-black/70 text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white'>More Than 10 cities.</div>
                        </div>
                    </div>
                </div>





            </div>
            <SubpageFooter />
        </div>
    )
}

export default SchoolPage;