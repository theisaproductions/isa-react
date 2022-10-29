import React from 'react';
import useDocumentTitle from '../../components/documentTitle';
import SubpageFooter from '../components/subpageFooter';
import TopMediaComponent from '../components/topMediaComponent';
import './common.css';

const RoutesvillePage = () => {

    useDocumentTitle('Routesville');

    return (
        <div className=''>
            <TopMediaComponent type="video" mediaUrl='routesville.mp4' />
            <div className='max-w-5xl mx-auto px-4 py-14 flex flex-col gap-14 md:gap-28'>

                {/* just center text */}
                <div className='text-center flex flex-col gap-10'>
                    <h1 className='heading1'>Routesville</h1>
                    <p className="subheading">“A place where artists and connoisseurs, meet ponder, train and experiment.”</p>
                    <p className='paragraph'>ISA brings to you Routesville, the coolest collaborative art space in town.</p>
                </div>

                {/* Overview section */}
                <div className='flex flex-col gap-6'>
                    <h1 className="heading1">Overview</h1>
                    <div className='space-y-6'>
                        <p className='paragraph'>
                            ISA’s creative space called Routesville is an alternative arts and performance space. We rent out our beautiful
                            creative space which is more than 4000 sq. ft in size (it is massive) for different artistic events and purposes.
                            We support, host and curate films, theatre, music, events, stand up comedy shows, films, casting, poetry and
                            exhibits. It’s a big space which has different sections and can seat about 200 people and more if required.
                            Our arrangements with artists are fair, collaborative and as it should be.
                            <br/><br/>
                            As an alternative performance & arts space, we have hosted various shows in the past year in the mediums
                            of theatre, film, music, community projects & contemporary art. We support the new, unheard, upcoming,
                            exciting, cutting edge, the political, the forgotten, nostalgic, melancholic, soul stirring, the beautiful and more.
                            We are located in Vaishali, Ghaziabad which is well connected to the National Capital Region and Delhi via Delhi Metro.
                        </p>
                    </div>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/routesville/1.jpg`} alt=""/>
                    <p className="paragraph">
                        Routesville is a co-working and rent-it-out space that offers a cool, quirky and massive space for all creative
                        ventures and an alternative performance space that curates unique performances in the form of films, poetry,
                        artistic gathering, theater, music, contemporary and dances. <br/><br/>
                        Routesville is an international arts studio with a passion for films, new media, community art spaces and
                        contemporary art. Based in Vaishali, Ghaziabad, NCR, Routesville, the office of ISA, is the coolest and one of
                        the most trending artistic spaces in India. Routesville has taken many forms and identities across disciplines.
                        at the core, we are a collective of passionate storytellers from diverse cultural, business and creative backgrounds.
                        We are all about films. Along with the top training center of films and acting in India we create web content,
                        short films, fashion films and digital commercials. A part of our team is also always busy filming and putting
                        together behind the scenes documentation for Hindi language feature films. Another part is busy training the
                        best artists of the country. <br/><br/>
                        Working with Routesville is an experience of paradise. We like to engage with our clients meaningfully for each
                        project, to understand their goals and visions and then make them our own. All our clients directly interact and
                        work closely with the artist in charge, and are encouraged to participate and contribute to the process of
                        making videos and films. <br/><br/>
                        Routesville at heart is also a co-working space for artists and one of the most exciting alternative performance
                        spaces in India. We also curate experiences, organize events and exhibits.
                    </p>
                </div>

                {/* one image with multiple text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/routesville/2.jpg`} alt=""/>
                    <h2 className='heading2'>We got what you want and exactly what you need.</h2>
                    <p className="paragraph">Routesville, the coolest art space in town.</p>
                    <div className='space-y-6 md:space-y-10'>
                        <div className='space-y-2'>
                            <h3 className='subheading'>The Big Cool Space</h3>
                            <p className='paragraph'>
                                A little big hall, a couple of more mini halls, and a couple of micro ones.
                                If you start running in our space you might get tired pretty soon.
                            </p>
                        </div>
                        <div className='space-y-2'>
                            <h3 className='subheading'>Separated Sections</h3>
                            <p className='paragraph'>
                                Use the entire space or a section. Pay for only what you use.
                                Cowork, rent some or book it all.
                            </p>
                        </div>
                        <div className='space-y-2'>
                            <h3 className='subheading'>Whatever you Love, we have.</h3>
                            <p className='paragraph'>
                                Chai and Wifi, Cinema and Library, Playstation and Games, we even got dogs.
                                Get everything that you love. Ask for more.
                            </p>
                        </div>
                        <div className='space-y-2'>
                            <h3 className='subheading'>Amidst a food hub and pet store</h3>
                            <p className='paragraph'>
                                We are based in a beautiful commercial complex amidst a food hub and a pet shop.
                                Routesville is all about art. But waffles and dogs are loved too.
                            </p>
                        </div>
                        <div className='space-y-2'>
                            <h3 className='subheading'>Find a reason to be here.</h3>
                            <p className='paragraph'>
                                If you find a cooler place than Routesville in the same budget in the entire city of Delhi - NCR,
                                we will give the space to you for free. (No we won’t, as you won’t.) <br/><br/>
                                You can book the entire massive space for a day or a week or more. You can book a separate section.
                                You can enjoy our awesome company by using it as a coworking space.
                            </p>
                        </div>
                    </div>
                </div>

                {/* just heading */}
                <h2 className='heading2'>What we do at Routesville.</h2>

                {/* two image with two text - fixed */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-6'>
                    <div className='flex flex-col gap-6'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/routesville/3.jpg`} alt=""/>
                        <h2 className='heading2'>Films</h2>
                        <p className='paragraph'>
                            We create, curate, program and facilitate films. We also do film screenings and
                            gatherings. Got a film? Bring to us.
                        </p>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/routesville/4.jpg`} alt=""/>
                        <h2 className='heading2'>Casting and Auditions</h2>
                        <p className='paragraph'>
                            Routesville could be the most suitable space
                            Your next casting project. With a beautiful
                            customized space for audition and waiting capacity for more than 200 people.
                        </p>
                    </div>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/routesville/5.jpg`} alt=""/>
                    <h2 className='heading2'>Music Gigs, Acoustics and Unplugged</h2>
                    <p className="paragraph">
                        A perfect evening is made perfect only with music. At Routesville we often organize and conduct little gigs,
                        acoustic gatherings and small musical events. Musicians from all over the country perform at Routesville.
                    </p>
                </div>

                {/* two image with two text - fixed */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-6'>
                    <div className='flex flex-col gap-6'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/routesville/6.jpg`} alt=""/>
                        <h2 className='heading2'>Theatre</h2>
                        <p className='paragraph'>
                            Routesville with having acting in the bricks is a perfect place for theatre and related activities.
                        </p>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/routesville/7.jpg`} alt=""/>
                        <h2 className='heading2'>Film Festivals</h2>
                        <p className='paragraph'>
                            Routesville under the banner of ISA Productions
                            conduct mini film festivals where Indie filmmakers
                            from all over the world network and participate.
                        </p>
                    </div>
                </div>

                {/* two image with two text - fixed */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-6'>
                    <div className='flex flex-col gap-6'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/routesville/8.jpg`} alt=""/>
                        <h2 className='heading2'>Chai and Poetry</h2>
                        <p className='paragraph'>
                            Routesville organzes and curates different sorts of poetry events such as open pics poetry concerts, meetups, workshops etc.
                            You can either organize, attend or participate in events.
                        </p>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/routesville/9.jpg`} alt=""/>
                        <h2 className='heading2'>Artists Parties</h2>
                        <p className='paragraph'>
                            Find your inner artist in a fun way as you
                            socialize and party with others you meet
                            at the Routesville artist parties. The Uber
                            cool fun new way people are partying and
                            creating together. If you are an artist in life
                            then you should definitely join us all in the
                            next artistic party or why not organize one.
                        </p>
                    </div>
                </div>

                {/* two image with two text - fixed */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-6'>
                    <div className='flex flex-col gap-6'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/routesville/10.jpg`} alt=""/>
                        <h2 className='heading2'>Stand-up Comedy</h2>
                        <p className='paragraph'>
                            Routesville, is an experimental venue that
                            is often hosting thematic and other quirky
                            formats for stand-up acts and open mics.
                            you can either organize, attend or participate in events.
                        </p>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/routesville/11.jpg`} alt=""/>
                        <h2 className='heading2'>Fashion and Photoshoots</h2>
                        <p className='paragraph'>
                            Routesville fashion and photoshoot studio
                            for rent and is the first of its kind in Delhi NCR.
                            From basic backgrounds and full-fledged sets to
                            the latest and most comprehensive post-processing
                            software tools, we have it all.
                        </p>
                    </div>
                </div>

                {/* two image with two and one text - fixed */}
                <div className='space-y-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='flex flex-col gap-6'>
                            <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/routesville/12.jpg`} alt="motivation2"/>
                            <h2 className='heading2'>Art Exhibitions</h2>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/routesville/13.jpg`} alt="motivation3"/>
                            <h2 className='heading2'>Food Exhibitions</h2>
                        </div>
                    </div>
                    <p className='paragraph'>
                        Routesville aims to forge new creative strategies and cultural partnerships by curating events,
                        conducting workshops, walks and talks with allied institutions and individuals.
                    </p>
                </div>

                {/* two image with one text*/}
                <div className='space-y-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='flex flex-col gap-6'>
                            <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/routesville/14.jpg`} alt="motivation2"/>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/routesville/15.jpg`} alt="motivation3"/>
                        </div>
                    </div>
                    <h2 className='heading2'>Storytelling and Reading</h2>
                    <p className='paragraph'>
                        Got a story, come and tell us. Storytelling workshops, meetups and events, books exchange and more.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/routesville/16.jpg`} alt=""/>
                    <h2 className='heading2'>Workshop and Exhibitions</h2>
                    <p className="paragraph">
                        Routesville organizes and curates different sorts of workshops and exhibitions for all the artists out there.
                    </p>
                </div>

                {/* two image with one text*/}
                <div className='space-y-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='flex flex-col gap-6'>
                            <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/routesville/17.jpg`} alt="motivation2"/>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/routesville/18.jpg`} alt="motivation3"/>
                        </div>
                    </div>
                    <h2 className='heading2'>Just Come Na!</h2>
                    <p className='paragraph'>
                        If you are an artist or anyhow related to films you are always welcome at Routesville. If you want
                        to work, chill, read, watch a film, hang around or even sulk, why not do it at the coolest creative
                        space of the town. Have ideas? Come to us. Don’t have ideas? Come to us. We will give you some.
                    </p>
                    <p className='subheading'>Routesville will always welcome you.</p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/routesville/19.jpg`} alt=""/>
                    <h2 className='heading2'>Let us all unite</h2>
                    <p className="paragraph">
                        ISA Routesville is all about uniting artists. We are a family and you are a part too.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/routesville/20.jpg`} alt=""/>
                    <h2 className='heading2'>Spread a Smile.</h2>
                    <p className="paragraph">And don’t forget to smile. Meet us if you are not able to.</p>
                </div>

            </div>
            <SubpageFooter />
        </div>
    )
}

export default RoutesvillePage;