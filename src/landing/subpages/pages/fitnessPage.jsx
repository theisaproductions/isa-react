import React from 'react';
import MetaTags from 'react-meta-tags';
import SubpageFooter from '../components/subpageFooter';
import TopMediaComponent from '../components/topMediaComponent';
import './common.css';

const FitnessPage = () => {

    return (
        <div className=''>
            <MetaTags>
                <title>ISA Fitness</title>
                <meta name="description" content=""/>
            </MetaTags>
            <TopMediaComponent type="video" mediaUrl='fitness.mp4' />
            <div className='max-w-5xl mx-auto px-4 py-14 flex flex-col gap-14 md:gap-28'>
                {/* just center text */}
                <div className='text-center flex flex-col gap-10'>
                    <h1 className='heading1'>ISA Fitness</h1>
                    <h2 className='heading2'>Changing bodies, changing lives</h2>
                </div>

                {/* Overview section */}
                <div className='flex flex-col md:flex-row gap-6'>
                    <h1 className="heading1">Overview</h1>
                    <div className='space-y-6'>
                        <p className='paragraph'>
                            Finding a workout you enjoy is the key. It is much
                            harder to motivate yourself to move if you hate the
                            activity. We at ISA train kids and adults in different
                            forms of fitness to build the physical structure, bring discipline in the bodies,
                            deepening concentration and artistry.
                        </p>
                    </div>
                </div>

                {/* Quote */}
                <h2 className='quote text-center'>“The clock is ticking. Are you becoming the person you want to be?”</h2>

                {/* Heading */}
                <h1 className='heading1'>Training</h1>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/fitness/1.jpg`} alt=""/>
                    <h2 className='heading2'>ISA Zumba</h2>
                    <p className='paragraph font-semibold'>
                        For all age groups <br/> Packages: Quarterly, Half yearly, Yearly
                    </p>
                    <p className="paragraph">
                        Set to hypnotic Latin dance rhythms, these easy to follow routines, feel more like a celebration rather
                        than a workout. The classes integrate fast and slow
                        rhythms that are designed to tone your body while
                        burning fat. A total body workout combining cardio,
                        muscle conditioning, balance and flexibility.
                    </p>
                </div>

                {/* two image with text */}
                <div className='flex flex-col gap-6'>
                    <div className='grid grid-cols-2 gap-1 md:gap-4'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/fitness/2.jpg`} alt=""/>
                        <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/fitness/3.jpg`} alt=""/>
                    </div>
                    <h2 className='heading2'>ISA Yoga</h2>
                    <h3 className='paragraph font-semibold'>
                        Yoga Certification Programs <br/> Morning Sessions <br/> Studio classes <br/> At home personal classes
                    </h3>
                    <p className='paragraph'>
                        Our aim is to teach the ancient art of yoga in a safe, fun and an intelligent way.
                        Our unique style is based on deep understanding of anatomy, physiology, modern medical science and traditional
                        yoga.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/fitness/4.jpg`} alt=""/>
                    <h2 className='heading2'>ISA Martial Arts</h2>
                    <p className='paragraph font-semibold'>
                        All forms of Martial Arts <br/> Kids and Adults batches
                    </p>
                    <p className="paragraph">
                        With ISA Martial Arts program you can have the privilege of getting the teachings of different forms
                        of martial arts for all ages to maintain the fitness
                        strength within your body. To provide you with the
                        best teaching services, we have maintained a
                        professional team of instructors, those who are
                        extensively experienced and incredibly trained. ISA
                        provides the best martial arts training in Delhi-NCR.
                    </p>
                </div>

                {/* two image with text */}
                <div className='flex flex-col gap-6'>
                    <div className='grid grid-cols-2 gap-1 md:gap-4'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/fitness/5.jpg`} alt=""/>
                        <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/fitness/6.jpg`} alt=""/>
                    </div>
                    <h2 className='heading2'>Self-Defence Classes For Kids Judo, Karate and Jiu Jitsu</h2>
                    <h3 className='paragraph font-semibold'>
                        Age: 4 - 14 Years <br/> Certification and Diplomas <br/> Packages: Quarterly, Half yearly, Yearly
                    </h3>
                    <p className='paragraph'>
                        With ISA Defense programs children reap the rewards that our structured
                        integrated and technically focused
                        defense programs provide them. The
                        ISA Self defense for Kids program
                        will improve their revnfidence, increase
                        their focus and develop and enhance
                        their self control.
                    </p>
                </div>

            </div>
            <SubpageFooter />
        </div>
    )
}

export default FitnessPage;