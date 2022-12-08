import React from 'react';
import {Helmet} from "react-helmet";
import SubpageFooter from '../components/subpageFooter';
import TopMediaComponent from '../components/topMediaComponent';
import './common.css';

const CorporatePage = () => {

    return (
        <div className=''>
            <Helmet>
                <title>Employee Engagement Solution Providers In India | Indian School Of Acting</title>
                <meta name="description" content="Indian School Of Acting provides employee engagement solutions. Our resources are shared to provide high-value, socially responsible, and relevant team-building experiences."/>
            </Helmet>
            <TopMediaComponent type="image" mediaUrl='corporate.jpg' />
            <div className='max-w-5xl mx-auto px-4 py-14 flex flex-col gap-14 md:gap-28'>

                {/* just center text */}
                <div className='text-center flex flex-col gap-10'>
                    <h1 className='heading1'>Collaborations</h1>
                    <p className="subheading">Enhance your company culture, efficiency and productivity.</p>
                </div>

                {/* Overview section */}
                <div className='flex flex-col gap-6'>
                    <h1 className="heading1">Overview</h1>
                    <div className='space-y-6'>
                        <p className='paragraph'>
                            We share resources, best practices and business
                            opportunities to create highly relevant, socially
                            responsible and great value team building
                            experiences for our clients.
                        </p>
                        <p className='quote'>
                        “With constant innovation we provide a complete Employee Engagement Solution to our clients.”
                        </p>
                    </div>
                </div>

                {/* just left text */}
                <div className='flex flex-col gap-10'>
                    <h1 className='heading1'>Our DNA</h1>

                    <div className='space-y-4'>
                        <h3 className='subheading'>Trend Led</h3>
                        <p className='paragraph'>
                            Ambition for being the trendsetter, enthusiastic and go-getters as there is always an ardent
                            urge for something new every time to engage all.
                        </p>
                    </div>
                    <div className='space-y-4'>
                        <h3 className='subheading'>Strategically Driven</h3>
                        <p className='paragraph'>
                            A strategy that has roots in the client’s purpose. To bring out the best level of work chosen
                            with clear and measurable objectives with a rigorous creative strategy.
                        </p>
                    </div>
                    <div className='space-y-4'>
                        <h3 className='subheading'>Thorough Thinkers</h3>
                        <p className='paragraph'>
                            From strategizing to execution, we believe to work in coherence to connect every element
                            at every phase of client’s journey.
                        </p>
                    </div>
                    <div className='space-y-4'>
                        <h3 className='subheading'>Deeply Humane</h3>
                        <p className='paragraph'>
                            Team building is all about bringing harmony to the workplace. We empathize and add value
                            to people’s lives.
                        </p>
                    </div>
                </div>

                {/* two image with text */}
                <div className='flex flex-col gap-6'>
                    <div className='grid grid-cols-2 gap-1 md:gap-4'>
                        <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/corporate/1.jpg`} alt=""/>
                        <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/corporate/2.jpg`} alt=""/>
                    </div>
                    <h2 className='heading2'>Trip and Adventure</h2>
                    <p className='paragraph'>
                        We can organize the most amazing trips for your company anywhere in the world.
                        Let’s get adventurous and take you for a trip.
                    </p>
                </div>

                {/* image right text left fixed */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-10'>
                        <h1 className='heading2'>Fashion in the nerves</h1>
                        <p className='paragraph font-semibold'>
                            Fashion shows for employees <br/> Beauty Pageants
                        </p>
                        <p className='paragraph'>
                            ISA providing opportunities for corporate
                            employees to explore their interest in
                            fashion while showcasing their artistic
                            talent in fashion shows.
                        </p>
                    </div>
                    <div className='order-first md:order-last'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/corporate/3.jpg`} alt=""/>
                    </div>
                </div>

                {/* two image with two text - fixed */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-6'>
                    <div className='flex flex-col gap-6'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/corporate/4.jpg`} alt=""/>
                        <h2 className='heading2'>I wanna be a Rockstar</h2>
                        <p className='paragraph'>
                            Talent Hunt
                        </p>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/corporate/5.jpg`} alt=""/>
                        <h2 className='heading2'>A Concert Night</h2>
                        <p className='paragraph'>
                            Gigs, jam and more.
                        </p>
                    </div>
                </div>

                {/* image left text right */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'>
                    <div>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/corporate/6.jpg`} alt="listening music"/>
                    </div>
                    <div className='flex flex-col gap-6 md:gap-10'>
                        <h3 className="heading2">Sports Events</h3>
                        <p className="paragraph font-semibold">
                            Bring corporate employees <br/> together as a tight knit team
                        </p>
                        <p className='paragraph'>
                            ISA providing opportunities for corporate
                            employees to explore their interest in
                            fashion while showcasing their artistic
                            talent in sports events.
                        </p>
                    </div>
                </div>

                {/* two image with two text - fixed */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-6'>
                    <div className='flex flex-col gap-6'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/corporate/7.jpg`} alt=""/>
                        <h2 className='heading2'>A Gamers Night</h2>
                        <p className='paragraph'>
                            Barca or Madrid?
                        </p>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/corporate/8.jpg`} alt=""/>
                        <h2 className='heading2'>A creative you</h2>
                        <p className='paragraph'>
                            Art, Photography, films and more.
                        </p>
                    </div>
                </div>

                {/* two image with two text - fixed */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-6'>
                    <div className='flex flex-col gap-6'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/corporate/9.jpg`} alt=""/>
                        <h2 className='heading2'>Master Chef</h2>
                        <p className='paragraph'>
                            You work for food.
                        </p>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/corporate/10.jpg`} alt=""/>
                        <h2 className='heading2'>Fitness Programs</h2>
                        <p className='paragraph'>
                            Yoga, Fitness, Martial arts for the team.
                        </p>
                    </div>
                </div>

                {/* two image with two text - fixed */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-6'>
                    <div className='flex flex-col gap-6'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/corporate/11.jpg`} alt=""/>
                        <h2 className='heading2'>Flash Mob</h2>
                        <p className='paragraph'>
                            Spice up your workplace with a mob.
                        </p>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/corporate/12.jpg`} alt=""/>
                        <h2 className='heading2'>Corporate Marathon</h2>
                        <p className='paragraph'>
                            Run for the team with the team.
                        </p>
                    </div>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/corporate/13.jpg`} alt=""/>
                    <h2 className='heading2'>A Movie Night</h2>
                    <p className="paragraph">
                        We can organize the most amazing film screening for your company at beautiful locations or
                        at your office itself. So bond with your team over your favorite film.
                    </p>
                </div>

            </div>
            <SubpageFooter />
        </div>
    )
}

export default CorporatePage;