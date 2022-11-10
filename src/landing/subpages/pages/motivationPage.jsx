import React from 'react';
import {Helmet} from "react-helmet";
import SubpageFooter from '../components/subpageFooter';
import TopMediaComponent from '../components/topMediaComponent';
import './common.css';

const MotivationPage = () => {

    return (
        <div className=''>
            <Helmet>
                <title>ISA Motivation</title>
                <meta name="description" content=""/>
            </Helmet>
            <TopMediaComponent type="video" mediaUrl='motivation.mp4' />
            <div className='max-w-5xl mx-auto px-4 py-14 flex flex-col gap-14 md:gap-28'>
                {/* just quote */}
                <h3 className='quote text-center'>“No masterpiece was ever created by a lazy artist."</h3>

                {/* just center text */}
                <div className='text-center flex flex-col gap-10'>
                    <h1 className='heading1'>ISA Motivation</h1>
                    <h2 className="subheading">“Get all of the support you need to help improve your mental health.”</h2>
                    <p className="paragraph">ISA offers high quality courses for professional development and continued learning.</p>
                </div>

                {/* Overview section */}
                <div className='flex flex-col md:flex-row gap-6'>
                    <h1 className="heading1">Overview</h1>
                    <div className='space-y-6'>
                        <p className='paragraph'>
                            The ISA Motivation School has educated thousands of full-time and part-time students, many of whom
                            have gone onto successful employment, both in industry or in their own businesses. Motivation is an essential
                            ingredient for staying focused, engaged and fueling the desire to achieve. Personal development and motivation
                            courses provide you with the skills and tools to develop and improve both professionally and personally.
                        </p>
                    </div>
                </div>

                {/* just image */}
                <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/motivation/1.jpg`} alt="motivation"/>

                {/* just heading */}
                <h2 className='heading1'>Courses</h2>

                {/* two image with two and one text - fixed */}
                <div className='space-y-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='flex flex-col gap-6'>
                            <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/motivation/2.jpg`} alt="motivation2"/>
                            <h2 className='heading2'>Time Management</h2>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/motivation/3.jpg`} alt="motivation3"/>
                            <h2 className='heading2'>Stress Management</h2>
                        </div>
                    </div>
                    <p className='paragraph'>
                        Time management and stress management are two key components to succeeding in life. Creating a system to
                        identify, evaluate and eliminate distractors and stressors will lead to a more productive and efficient life,
                        inside and outside of work. In this course, you will learn how to earn more time and be less stressed.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/motivation/4.jpg`} alt="motivation4"/>
                    <h2 className='heading2'>Health and Wellness | Meditation</h2>
                    <p className="paragraph">
                        ISA Health, Wellness and Meditation courses can help end the unproductive behaviour. In these urses, you’ll
                        learn how to incorporate mindfulness practices into your life, to reduce stress and improve your personal and professional life.
                        <br/><br/>
                        Meditation has become the basis for numerous therapeutic interventions both as a treatment in healthcare and
                        as a means of enhancing well-being and happiness. Program to learn more about how mindfulness can reduce
                        stress, impact academic success and improve self-care.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/motivation/5.jpg`} alt="motivation4"/>
                    <h2 className='heading2'>Life Coaching | Lifestyle</h2>
                    <p className="paragraph">
                        To be successful in your personal transformational journey, you need to find the perfect life coach to help support
                        you through the process. This means choosing a life coach that you feel comfortable with and is aligned with not
                        just your goals but your personality and lifestyle too. If you want to transform your life, ISA is the best
                        place. Our experts will sort you out and change life for good.
                    </p>
                </div>

                {/* two image with two text - fixed */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-6'>
                    <div className='flex flex-col gap-6'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/motivation/6.jpg`} alt="motivation6"/>
                        <h2 className='heading2'>Personal Development</h2>
                        <p className='paragraph'>
                            Personal development is the key to satisfaction
                            Development courses, covering everything
                            from how to plan your career to how to achieve
                            success, are designed to help you become a
                            more effective, organized and thoughtful
                            person.
                        </p>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/motivation/7.jpg`} alt="motivation7"/>
                        <h2 className='heading2'>Professional Growth</h2>
                        <p className='paragraph'>
                            Good business skills are crucial in any career
                            and emotional intelligence. Focus on what you
                            need to do to be more productive, hone your
                            creativity or give a great presentation.
                        </p>
                    </div>
                </div>


                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/motivation/8.jpg`} alt="motivation4"/>
                    <h2 className='heading2'>Motivational courses for Corporates</h2>
                    <p className="paragraph">
                        Disengaged employees cost organizations billions of dollars every year and yet most managers have no idea
                        the root source of the problem and how to turn things around. The right motivation matters. The key to
                        engagement is the quality of an employee’s motivation in the workplace. ISA teaches your managers how to
                        activate higher levels of motivation that are proven to increase engagement and overall business performance.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/motivation/9.jpg`} alt="motivation4"/>
                    <h2 className='heading2'>Hire a Motivational Speaker</h2>
                    <p className="paragraph">
                        Need a speaker to inspire your staff at a sales meeting or an individual who is recognized in their field as a guru
                        who can lend inspiration? Well then, one of our motivational speakers is for you. No matter the situation or audience
                        ISA has a motivational speaker who can inspire and motivate your employees, co-workers, students or sports team.
                        Get them inspired to make goals in the workplace and strive to achieve more. One speech can lead to increased
                        productivity and morale in the workplace. So, book a motivational speaker today!
                    </p>
                </div>

            </div>
            <SubpageFooter />
        </div>
    )
}

export default MotivationPage;