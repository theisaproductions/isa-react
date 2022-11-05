import React from 'react';
import SubpageFooter from '../components/subpageFooter';
import MetaTags from 'react-meta-tags';
import TopMediaComponent from '../components/topMediaComponent';
import './common.css';

const ArtPage = () => {

    const artWorks = [
        {id: 1, url: '', price: '30,000'},
        {id: 2, url: '', price: '45,000'},
        {id: 3, url: '', price: '25,000'},
        {id: 4, url: '', price: '39,000'},
        {id: 5, url: '', price: '35,000'},
        {id: 6, url: '', price: '79,000'},
        {id: 7, url: '', price: '39,000'},
        {id: 8, url: '', price: '15,000'},
        {id: 9, url: '', price: '9,000'},
        {id: 10, url: '', price: '7,500'},
        {id: 11, url: '', price: '5,000'},
        {id: 12, url: '', price: '4,000'},
        {id: 13, url: '', price: '45,000'},
        {id: 14, url: '', price: '1,44,000'},
        {id: 15, url: '', price: '29,000'},
        {id: 16, url: '', price: '14,000'},
        {id: 17, url: '', price: '19,000'},
        {id: 18, url: '', price: '28,000'},
        {id: 19, url: '', price: '15,000'},
        {id: 20, url: '', price: '34,000'},
        {id: 21, url: '', price: '37,500'},
        {id: 22, url: '', price: '6000'},
        {id: 23, url: '', price: '15,000'},
        {id: 24, url: '', price: '64,000'},
        {id: 25, url: '', price: '2,55,000'},
        {id: 26, url: '', price: '54,000'},
        {id: 27, url: '', price: '3,84,000'},
        {id: 28, url: '', price: '1,15,000'},
        {id: 29, url: '', price: '44,000'},
        {id: 30, url: '', price: '35,000'},
        {id: 31, url: '', price: '1,87,000'},
        {id: 32, url: '', price: '75,000'},
        {id: 33, url: '', price: '98,000'},
        {id: 34, url: '', price: '55,000'},
        {id: 35, url: '', price: '83,000'},
        {id: 36, url: '', price: '49,000'},
        {id: 37, url: '', price: '33,000'},
        {id: 38, url: '', price: '2,50,000'},
        {id: 39, url: '', price: '73,500'},
        {id: 40, url: '', price: '6,85,000'},
        {id: 41, url: '', price: '4,35,000'},
    ]
    
    return (
        <div className=''>
            <MetaTags>
                <title>Indian School of Art</title>
                <meta name="description" content={`The Indian School of Art is the best art school in India. We offer a wide range of production services and training programs at our award-winning art school.`}/>
            </MetaTags>
            <TopMediaComponent type="video" mediaUrl='art.mp4' />
            <div className='max-w-5xl mx-auto px-4 py-14 flex flex-col gap-14 md:gap-28'>

                {/* just center text */}
                <div className='text-center flex flex-col gap-10'>
                    <h1 className='quote'>“It is through art, and through art only, that we can realise our perfection”</h1>
                    <h1 className='heading1'>ISA School of Art</h1>
                    <h2 className="subheading">“Every human being is an artist”</h2>
                    <p className="paragraph">
                        The ultimate aim of ISA Art Class is to inspire students
                        to realise their full creative potential and make them
                        into artists.
                    </p>
                </div>

                {/* Overview section */}
                <div className='flex flex-col md:flex-row gap-6'>
                    <h1 className="heading1">Overview</h1>
                    <div className='space-y-6'>
                        <p className='paragraph'>
                            The ISA School of Art offers art workshops in a creative environment that supports the artistic journey of each
                            student. Enhance your creativity process through a study of the physical realities of Painting, Drawing and
                            Sketching. Explore different approaches to Paints, Brushes, Canvas, Paper and more. Get ready to develop a rich
                            and rewarding studio practice. Learn to stretch and prepare canvasses. Explore the language and craft of art.
                            Enjoy one-of-a-kind art classes as you explore your self-expression, creativity and artistic techniques. Let go of
                            daily stresses and express yourself authentically as you let our expert art instructors nurture you with
                            inspiration that we provide. We guarantee to transform you.
                        </p>
                    </div>
                </div>

                {/* just heading */}
                <h1 className='heading1'>Courses</h1>

                {/* just two image */}
                <div className='grid grid-cols-2 gap-2 md:gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/art/1.jpg`} alt="banana"/>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/art/2.jpg`} alt="apple"/>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/art/3.jpg`} alt=""/>
                    <h2 className='heading2'>Paintings and Sketching</h2>
                    <p className="paragraph">
                        The journey in a painting and sketching course must begin by observing and representing nature. The Short
                        term Painting & Sketching course is designed to give expression to one’s imagination through visual principles
                        like proportion, symmetry and rhythm. The course in painting & sketching at ISA, Delhi is instrumental in
                        bringing out your individual creative self which can be a hugely therapeutic practice. This re-connection with
                        your creativity will manifest itself in other areas of your life as well.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/art/4.jpg`} alt=""/>
                    <h2 className='heading2'>Kids Art Classes</h2>
                    <p className="paragraph">
                        Our art classes for kids contain a selection of fun drawing subjects including people, landscape, Animals and
                        cartoons drawing. Each art lesson draws on several of the basic drawing and painting skills with pastel and acrylic.
                        Our classes for Kids are not only for them to become artists one day but good sketching & coloring is needed for
                        diagrams and presentations in schoolwork as well. Our Art program is specially designed to focus on the
                        children'sart skills which can be used in their day to day school assignments and competitions.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/art/5.jpg`} alt=""/>
                    <h2 className='heading2'>Private Classes: At home or At studio</h2>
                    <p className="paragraph">
                        Private guidance from a professional artist and one special meeting and lesson from an established/ famous artist
                        who will give his/her invaluable tips to the student. This 1 on 1 private class will focus the artistic medium
                        of the students’ choice and class timing will be fixed according to your convenience.
                        You can decide what to learn about and the professional artist will share their experience and knowledge with
                        you. They will provide you the complete guidance.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/art/6.jpg`} alt=""/>
                    <h2 className='heading2'>Calligraphy</h2>
                    <p className="paragraph">
                        Learn the beautiful art of modern calligraphy hand lettering and be on your way to lettering everything from
                        art pieces to cards and more. In this beginner-level class, your instructor will begin by walking you through
                        the basics of modern calligraphy while guiding you as you practice writing using worksheets. We will help
                        you develop your own personal lettering style and finally you'll create your own hand-lettered art piece or
                        greeting cards.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/art/7.jpg`} alt=""/>
                    <h2 className='heading2'>Resin Art Workshops</h2>
                    <p className="paragraph">
                        Resin is a chemical which comes in two components, resin and hardener, when mixed together hardens to create
                        a glass finish on the surface. It creates a waterproof, beautiful epoxy glass like surface. Resin is a two-part
                        compound that hardens to give a clear and glossy finish. You can either add paints to the resin and then create a
                        painting. Alternatively, you can paint first and then pour the resin over the painting to create the finish.
                        In this workshop, you will learn how to work with the epoxy resin and how to mix colours and techniques for
                        applying and creating designs. ISA conducts Resin workshops at 2 levels - Beginners and Advance. In beginners
                        one is taught about the nature of chemicals, how to mix in the right proportion, what surfaces to use, from where
                        to procure materials and most importantly how to use it safely. In advance level one is taught techniques to use
                        it and to create ocean pour lacing and geodes.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/art/8.jpg`} alt=""/>
                    <h2 className='heading2'>Corporate workshops</h2>
                    <p className="paragraph">
                        The activities conducted at the Corporate Art Workshops not only helps the employees to vanish the stress busting
                        cells but also help the employees to socialize among themselves, understand the system of working in groups and
                        organizing themselves for quality work and increased performance. <br/><br/>
                        The workshops, set in an informal environment arranged in your premises/office are tailor made to suit the
                        requirements of your organization. The objective of the day is to give participants an appreciation of individual
                        differences and approaches to problem solving and to use techniques that develop the creative side of the brain.
                        In addition to the other benefits, each participating individual ends up with a piece of art which he or she
                        will be proud of.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/art/9.jpg`} alt=""/>
                    <h2 className='heading2'>Events and Exhibitions</h2>
                    <p className="paragraph">
                        We are also dedicated to conducting events in the space of public and performing arts. ISA aims to forge new
                        creative strategies and cultural partnerships by curating events, conducting workshops, walks and talks with allied
                        institutions and individuals. Through our special projects, we enhance the visibility and outreach of artists by
                        promoting and building their social media profiles.
                    </p>
                </div>

                {/* just heading */}
                <h1 className='heading1'>ISA Online Gallery | Exhibition</h1>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/art/10.jpg`} alt=""/>
                    <h2 className='heading2'>ISA Art Gallery</h2>
                    <p className='paragraph font-semibold'>Buy And Sell your art <br/> Sketches | Paintings | Resins</p>
                    <h3 className='quote'>“A bridge between Artists and their Dreams.”</h3>
                </div>

                {/* Overview section */}
                <div className='flex flex-col gap-6'>
                    <h1 className="heading1">Overview</h1>
                    <div className='space-y-6'>
                        <p className='paragraph'>
                            We want art to be accessible to everyone. We want to bridge the gap between artists and their careers, between
                            your work and the appreciation it deserves. Tired of seeing the very best talents of emergent artists go
                            unrecognised, ISA Art Gallery is dedicated to discovering and promoting these hidden gems. <br/><br/>
                            ISA Art Gallery runs an online gallery and a dedicated blog to promote and share our passion for art as creators
                            and appreciators. Our gallery is a curated and supportive platform, making your work available to art lovers
                            worldwide, connecting your work directly with buyers, interior designers and magazines.
                            <br/><br/>
                            Art buyers, ranging from the collectors and curators to designers and the individual enthusiasts, have the
                            opportunity to easily browse various of art works and images through a variety of search criteria from artists
                            around the world that they otherwise might not have been able to see.
                        </p>
                    </div>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/art/11.jpg`} alt=""/>
                    <h2 className='heading2'>Auction: Featured Paintings</h2>
                </div>

                {/* collection of artworks */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {artWorks.map((item, index) => {
                        return(
                            <div className='select-none flex flex-col gap-4 border-4 border-amber-900 bg-black text-white p-4 shadow-lg rounded-lg md:hover:scale-105 duration-300' key={index}>
                                <div className='h-full flex flex-col items-center justify-center'>
                                    <img draggable={false} className='object-contain' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/art/gallery/${item.id}.jpg`} alt=""/>
                                </div>
                                <div className=''>
                                    <p className='text-xl font-semibold font-mono'>Rs {item.price}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                
                {/* just text */}
                <div className='flex flex-col gap-10'>
                    <h2 className='heading1'>Buy an Art</h2>
                    <p className='paragraph'>
                        To buy any of the featured work of art please fill in the contact form sending the artwork you want to buy and our
                        agent will get back to you with the final availability and shipping charges. We ship the paintings all over the
                        globe and have the best customer support system. Alternatively you can call our customer support number.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/art/12.jpg`} alt=""/>
                    <h2 className='heading2'>Apply as Artists</h2>
                    <p className='paragraph'>
                        To buy any of the featured work of art please fill in the contact form sending the artwork you want to buy and our
                        agent will get back to you with the final availability and shipping charges. We ship the paintings all over the
                        globe and have the best customer support system. Alternatively you can call our customer support number.
                    </p>
                </div>

            </div>
            <SubpageFooter />
        </div>
    )
}

export default ArtPage;