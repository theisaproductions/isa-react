import React from 'react';
import {Helmet} from "react-helmet";
import SubpageFooter from '../components/subpageFooter';
import TopMediaComponent from '../components/topMediaComponent';
import './common.css';

const TalentPage = () => {

    return (
        <div className=''>
            <Helmet>
                <title>Talent Management Companies In India | Indian School Of Acting</title>
                <meta name="description" content="ISA Talent Management and Casting is one of the world's leading talent and casting agencies, representing artists, technicians, broadcasters, actors, celebrities, and models."/>
            </Helmet>
            <TopMediaComponent type="image" mediaUrl='talent.jpg' />
            <div className='max-w-5xl mx-auto px-4 py-14 flex flex-col gap-14 md:gap-28'>

                {/* just center text */}
                <div className='text-center flex flex-col gap-10'>
                    <h1 className='heading1'>ISA Talents</h1>
                    <p className="subheading">“Show us your talent. We'll make it shine.”</p>
                    <p className='paragraph'>
                        We collaborate with brands, agencies,
                        casting agents, filmmakers and artists
                        from around the world to make casting
                        a smooth process.
                    </p>
                </div>

                {/* Overview section */}
                <div className='flex flex-col gap-6'>
                    <h1 className="heading1">Overview</h1>
                    <div className='space-y-6'>
                        <p className='paragraph'>
                            We have great relations with talents and talent agents around the world and we are always building more.
                            That makes us capable of conducting direct casting from any part of the world in the shortest time.
                            Whether you are looking for talent or you are looking for a job as an artist. We got it.
                        </p>
                    </div>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/talent/1.jpg`} alt=""/>
                    <h2 className='heading2'>Talent Management and Casting</h2>
                    <p className="paragraph">
                        ISA Talent Management and Casting is one of the world's leading talent and casting agencies, dedicated
                        to the representation of artists, technicians, broadcasters, actors, celebrities and models. We have the expertise and
                        influence of a legacy agency as well as the entrepreneurial spirit of our agent/owners to bring the best talent to you
                        for any of your events, shows or films. <br/><br/>
                        We are casting partners for top clients, ad agencies and Production houses around the world, casting for them in
                        Asia, parts of Europe and America. We understand the work-flow and importance of communication while working
                        with ad agency teams and clients. We do crowds casting as well for films, TV shows and web shows.
                    </p>
                </div>

                {/* two image with text */}
                <div className='flex flex-col gap-6'>
                    <div className='grid grid-cols-2 gap-1 md:gap-4'>
                        <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/talent/2.jpg`} alt=""/>
                        <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/talent/3.jpg`} alt=""/>
                    </div>
                    <h2 className='heading2'>Be Our Talent</h2>
                    <p className='paragraph'>
                        We represent the best talent of the country, including some of the biggest and most respected stars in Bollywood.
                        Our talent includes some of the most talented and experienced artists of the country and the freshest faces to burst
                        upon the scene in motion pictures, television and on stage. Send us your work profiles and portfolios in order to
                        be managed and represented by us. Get access to the best jobs in the media & entertainment industry. <br/><br/>
                        The platform simplifies the discovery and hiring process by enabling new & established talent (across fields of
                        acting, music, script writing, direction, dancing) to get access to the best opportunities in the entertainment
                        industry through verified recruiters and projects.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/talent/4.jpg`} alt=""/>
                    <h2 className='heading2'>The Process</h2>
                    <p className="paragraph">
                        We focus equally on the technical and creative aspects of the casting process, producing top quality test videos
                        and other materials that are preferred by clients all over the world. Our extensive casting process include
                        character briefing, pre-casting alignment, conducting auditions around the world, coordination with talent
                        agents and freelance talents, casting presentations, travel management of the cast and on-location cast
                        management. Our casting facilities are fully equipped and strategically located in the heart of the media and
                        entertainment zone and are attended by hundreds of talents daily for casting. We are Asia's leading casting
                        agency.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/talent/5.jpg`} alt=""/>
                    <h2 className='heading2'>Artist Community</h2>
                    <p className="paragraph">
                        Our mission is to champion creative independence in visual storytelling and support a community of artists
                        who embody diversity, innovation and uniqueness of vision. We make films and work with actors. We are a
                        movie-making network with tools, talent and inspiration to help you achieve your dreams. We want to network
                        and build a platform to help lots of people make movies and help artists like you with your careers. Anyone
                        passionate about film or related to any form of art can become a member, whether you are a filmmaker, industry
                        professional, a film lover or simply just creative.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/talent/6.jpg`} alt=""/>
                    <h2 className='heading2'>Collaborations</h2>
                    <p className="paragraph">
                        Creative studio that aggregates talents to create unique works that are vectors of curiosity and emotion. Our
                        artistic collaborations are designed for a variety of forms, ranging from films and installations, events and
                        immersive experiences, retail and interior design. If you have an idea and want to turn it big - meet us!
                    </p>
                </div>

                {/* just heading */}

                <h2 className='heading2'>We will always love to meet you.</h2>





            </div>
            <SubpageFooter />
        </div>
    )
}

export default TalentPage;