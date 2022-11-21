import React from 'react';
import {Helmet} from "react-helmet";
import SubpageFooter from '../components/subpageFooter';
import TopMediaComponent from '../components/topMediaComponent';
import './common.css';

const MusicPage = () => {

    return (
        <div className=''>
            <Helmet>
                <title>Music Classes In Delhi | Indian School Of Acting</title>
                <meta name="description" content="Indian School Of Acting offers music classes in Delhi. The purpose of our program is to enable our young musicians to excel in a safe and supportive culture."/>
            </Helmet>
            <TopMediaComponent type="video" mediaUrl='music.mp4' />
            <div className='max-w-5xl mx-auto px-4 py-14 flex flex-col gap-14 md:gap-28'>
                
                {/* just center text */}
                <div className='text-center flex flex-col gap-10'>
                    <h1 className='heading1'>ISA Music School</h1>
                    <h2 className="quote">“Music is the literature of the heart; it commences where speech ends.”</h2>
                    <p className="quote">“Without music, life would be a mistake”</p>
                </div>

                {/* just left text */}
                <div className='flex flex-col gap-10'>
                    <h1 className='heading2'>ISA School of Music</h1>
                    <p className='paragraph font-semibold'>
                        1 and 2 years Diploma Courses <br/> Short Certificate Courses
                    </p>
                    <p className='paragraph'>
                        Our purpose is to enable our young musicians
                        to excel in a safe and supportive culture that
                        is creative, inclusive and committed.
                    </p>
                </div>

                {/* Overview section */}
                <div className='flex flex-col md:flex-row gap-6'>
                    <h1 className="heading1">Overview</h1>
                    <div className='space-y-6'>
                        <p className='paragraph'>
                            ISA champions relevant and innovative training that equips you with the knowledge and skills to meet the
                            demands of a perpetually evolving industry. We help students nourish artistry, mastering technique, expanding musical senses.
                        </p>
                    </div>
                </div>

                {/* just heading */}
                <h2 className='heading1'>Courses</h2>

                {/* image right text left fixed */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-10'>
                        <h1 className='heading2'>Indian Classical Vocals</h1>
                        <p className='paragraph font-semibold'>
                            For Kids and Adults <br/> Certificate and Diploma
                        </p>
                        <p className='paragraph'>
                            We use sargam/scales to improve your
                            vocal ability and range then work with
                            songs in a range of genres to apply the
                            techniques. Voice training include
                            practices with various sargam, renditions
                            of notes up and down in various
                            combinations, voice throws, correct
                            pronunciations of the lyrics, creating
                            appropriate feel and emotion
                            for particular lyrics and compositions.
                        </p>
                    </div>
                    <div className='order-first md:order-last'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/music/1.jpg`} alt=""/>
                    </div>
                </div>

                {/* image left text right */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'>
                    <div>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/music/2.jpg`} alt="listening music"/>
                    </div>
                    <div className='flex flex-col gap-6 md:gap-10'>
                        <h3 className="heading2">Western Vocals</h3>
                        <p className="paragraph font-semibold">
                            For all age groups <br/> Certificate and Diploma
                        </p>
                        <p className='paragraph'>
                            Our singing classes, lessons, programs and
                            courses will help you bring out your hidden
                            musical talents. Here, our vocal lessons will
                            help develop your singing learning skills.
                            At ISA Music School, our trained singing
                            teachers will help you to learn singing the
                            right way.
                        </p>
                    </div>
                </div>

                {/* image right text left fixed */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-10'>
                        <h1 className='heading2'>Guitar Classes</h1>
                        <p className='paragraph font-semibold'>
                            For all age groups <br/> Certificate and Diploma
                        </p>
                        <p className='paragraph'>
                            At ISA we are dedicated to providing
                            the best acoustic and electric guitar
                            lessons in Delhi-NCR and the most
                            rewarding and fulfilling learning
                            experience for our students.
                        </p>
                    </div>
                    <div className='order-first md:order-last'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/music/3.jpg`} alt=""/>
                    </div>
                </div>

                {/* image left text right */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'>
                    <div>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/music/4.jpg`} alt="listening music"/>
                    </div>
                    <div className='flex flex-col gap-6 md:gap-10'>
                        <h3 className="heading2">Keyboard/Synthesizer</h3>
                        <p className="paragraph font-semibold">
                            For all age groups <br/> Certificate and Diploma
                        </p>
                        <p className='paragraph'>
                            ISA Music school Keyboard program is a
                            wonderful and comprehensive music program,
                            which has adults and kids learn everything
                            about playing the piano or keyboard in record
                            time while learning loads of great pieces.
                        </p>
                    </div>
                </div>

                {/* image right text left fixed */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-10'>
                        <h1 className='heading2'>Violin Classes</h1>
                        <p className='paragraph font-semibold'>
                            For all age groups <br/> Certificate and Diploma
                        </p>
                        <p className='paragraph'>
                            As a beginner taking violin lessons,
                            students will learn beginner note reading
                            beginner violin rhythm and technique.
                            Once a solid technical foundation has
                            been built, we then explore the different
                            violin genres available to a violin player
                            like contemporary, classical, musical theatre,
                            jazz etc.
                        </p>
                    </div>
                    <div className='order-first md:order-last'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/music/5.jpg`} alt=""/>
                    </div>
                </div>

                {/* image left text right */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'>
                    <div>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/music/6.jpg`} alt="listening music"/>
                    </div>
                    <div className='flex flex-col gap-6 md:gap-10'>
                        <h3 className="heading2">Indian Classical Instruments</h3>
                        <p className="paragraph font-semibold">
                            For all age groups <br/> Certificate and Diploma
                        </p>
                        <p className='paragraph'>
                            Our aim is to teach you the correct technique and
                            flow in playing harmonium with percussions,
                            rhythm and wind instruments. From our diverse
                            range of music lessons, you learn to play all songs
                            ragas, bhajans, and melodies.
                        </p>
                    </div>
                </div>

                {/* two image with text */}
                <div className='flex flex-col gap-6'>
                    <div className='grid grid-cols-2 gap-1 md:gap-4'>
                        <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/music/7.jpg`} alt=""/>
                        <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/music/8.jpg`} alt=""/>
                    </div>
                    <h2 className='heading2'>ISA Gigs and Concerts</h2>
                    <p className='paragraph'>
                        Those putting on an event simply submit the type of musician or band they wish to hire, providing details
                        like instrument, genre and time and place. ISA then takes that information and sends out an alert to matching
                        musicians and bands who are registered with us. It lets you find and book a musician or band online for
                        your event. Our marketplace has already attracted over 18,000 musicians. ISA also organizes small scale
                        and mega scale concerts in India and abroad.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/music/9.jpg`} alt=""/>
                    <h2 className='heading2'>Shows and Events</h2>
                    <p className="paragraph">
                        Those putting on an event simply submit the type of musician or band they wish to hire, providing details
                        like instrument, genre and time and place. ISA then takes that information and sends out an alert to matching
                        musicians and bands who are registered with us. It lets you find and book a musician or band online for
                        your event. Our marketplace has already attracted over 18,000 musicians. ISA also organizes small scale
                        and mega scale concerts in India and abroad.
                    </p>
                </div>

                {/* image right text left fixed */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-10'>
                        <h1 className='heading2'>Music Classes For Kids</h1>
                        <p className='paragraph font-semibold'>
                            For Age Groups: 4 - 14 years <br/> Certificate and Diploma
                        </p>
                        <p className='paragraph'>
                            ISA music for kids helps children of all
                            ages babies, toddlers, preschoolers and
                            big kids discover their inner music-maker
                            by playing with the music and instruments
                            they love. Our kids' music and movement
                            classes also offer other important benefits.
                            It turns out that music for children also
                            supports overall early childhood development.
                        </p>
                    </div>
                    <div className='order-first md:order-last'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/music/10.jpg`} alt=""/>
                    </div>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/music/11.jpg`} alt=""/>
                    <h2 className='heading2'>For Schools, Colleges and Institutes</h2>
                    <p className="paragraph">
                        ISA Music classes are used at thousands of preschools, childcare centers, schools, colleges and institutes around
                        the world. In addition to supporting student’s music development, our in-school curriculum raises the overall
                        quality of education by touching many important factors all at once: school readiness, family engagement,
                        parent-child relationships and teacher professional development. When ISA music is a part of the school day,
                        music isn't just fun, it's a powerful learning tool, too.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/music/12.jpg`} alt=""/>
                    <h2 className='heading2'>For Corporates</h2>
                    <p className="paragraph">
                        ISA School of Music Corporate Programs brings a bunch of offerings for employee engagement
                        from conducting musical sessions for groups to provide discounts on individual classes to conducting talent hunts.
                    </p>
                </div>

                {/* two image with two text - fixed */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-6'>
                    <div className='flex flex-col gap-6'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/music/13.jpg`} alt=""/>
                        <h2 className='heading2'>Online Classes</h2>
                        <p className='paragraph'>
                            Learn music anytime, anywhere.
                            Live online classes with expert
                            faculty. Customized learning and
                            world class curriculum.
                        </p>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/music/14.jpg`} alt=""/>
                        <h2 className='heading2'>Personal classes at Home/Studio</h2>
                        <p className='paragraph'>
                            Progress at your own pace and gain the
                            best understanding of music. Private lesson
                            are provided in all instruments and vocal training.
                        </p>
                    </div>
                </div>

            </div>
            <SubpageFooter />
        </div>
    )
}
export default MusicPage;