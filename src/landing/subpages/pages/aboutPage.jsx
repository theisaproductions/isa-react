import React from 'react';
import MetaTags from 'react-meta-tags';
import SubpageFooter from '../components/subpageFooter';
import TopMediaComponent from '../components/topMediaComponent';

const AboutPage = () => {

    return(
        <div className=''>
            <MetaTags>
                <title>Acting School In Delhi | The Indian School of Acting</title>
                <meta name="description" content={`The Indian School of Acting in Delhi offers the best acting courses. A variety of diploma and certificate courses are available in the performing and visual arts.`}/>
            </MetaTags>
            <TopMediaComponent type="video" mediaUrl='about.mp4' />
            <div className='max-w-5xl mx-auto px-4 py-10 flex flex-col gap-14 md:gap-28'>
                <div className='flex flex-col items-center justify-center gap-8 md:gap-12 text-center'>
                    <img className='w-1/4' src={`${process.env.PUBLIC_URL}/assets/images/logo/black_w_tag.png`} alt="logo"/>

                    <div className='flex flex-col items-center justify-center text-center gap-4'>
                        <h1 className='text-2xl md:text-4xl font-bold'>Who we are?</h1>
                        <p className='text-sm md:text-lg'>We're mentors, trainers, visionaries, directors, artists and some call us a blessing in disguise.</p>
                    </div>

                    <div className='flex flex-col items-center justify-center text-center gap-4'>
                        <h1 className='text-2xl md:text-4xl font-bold'>What we do?</h1>
                        <p className='text-sm md:text-lg'>We train potential actors and artists with passion and creativity to make them the best artists out there. Also, we create and curate content and films, amidst all the artistic parties.</p>
                    </div>

                    <div className='flex flex-col items-center justify-center text-center gap-6 md:gap-10'>
                        <h1 className='text-2xl md:text-4xl font-bold mb-2 md:mb-4'>What’s for you?</h1>
                        <div className='flex flex-col gap-2 text-center'>
                            <h2 className='text-xl md:text-2xl font-bold'>ISA Film School</h2>
                            <p className='text-sm md:text-lg'>Film is a battleground and we make warriors.</p>
                        </div>
                        <div className='flex flex-col gap-2 text-center'>
                            <h2 className='text-xl md:text-2xltext-2xl font-bold'>The Indian School of Acting</h2>
                            <p className='text-sm md:text-lg'>You have a burning desire to be the best, we have one to make you.</p>
                        </div>
                        <div className='flex flex-col gap-2 text-center'>
                            <h2 className='text-xl md:text-2xltext-2xl font-bold'>The ISA Productions</h2>
                            <p className='text-sm md:text-lg'>We collaborate with brands and agencies to create memorable experiences.</p>
                        </div>
                        <div className='flex flex-col gap-2 text-center'>
                            <h2 className='text-xl md:text-2xltext-2xl font-bold'>Routesville</h2>
                            <p className='text-sm md:text-lg'>The coolest creative space in town. Sharing Energy, Ideas and Space.</p>
                        </div>
                        <div className='flex flex-col gap-2 text-center'>
                            <h2 className='text-xl md:text-2xltext-2xl font-bold'>ISA Talent Management</h2>
                            <p className='text-sm md:text-lg'>The saddest thing in life is wasted talent. And we like happiness a little more.</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-6 md:gap-10'>
                    <h1 className='text-4xl md:text-6xl font-bold'>ISA Training</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                        <img className="w-full" src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/About us pics/pics/woman-wearing-teal.jpg`} alt=""/>
                        <div className='flex flex-col gap-8'>
                            <div className='space-y-2 md:space-y-6'>
                                <h2 className='text-2xl md:text-4xl font-bold'>ISA Film School</h2>
                                <p className='text-sm md:text-lg'>ISA Film School is one of India’s leading film school and performing arts centers.</p>
                            </div>
                            <div className='space-y-2 md:space-y-6'>
                                <h2 className='text-2xl md:text-4xl font-bold'>Overview</h2>
                                <p className='text-sm md:text-lg'>The school’s mission is to provide the highest caliber of artistic education for gifted actors, filmmakers, musicians, dancers and potential artists from around the world to help them achieve their fullest potential as artists, leaders and global citizens.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* three gird image with text */}
                <div className='flex flex-col gap-10 text-center'>
                    <h1 className='text-2xl md:text-4xl font-bold'>How does it work?</h1>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                        <div className='flex flex-col items-center gap-3 md:gap-6'>
                            <img className="w-24" src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/About us pics/icons/1.png`} alt=""/>
                            <p className='text-sm md:text-lg text-center'>Train artists from all over the world to help them excel in their field</p>
                        </div>
                        <div className='flex flex-col items-center gap-3 md:gap-6'>
                            <img className="w-24" src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/About us pics/icons/2.png`} alt=""/>
                            <p className='text-sm md:text-lg text-center'>Nurture and develop their potential to help them make a mark in the world</p>
                        </div>
                        <div className='flex flex-col items-center gap-3 md:gap-6'>
                            <img className="w-24" src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/About us pics/icons/3.png`} alt=""/>
                            <p className='text-sm md:text-lg text-center'>Break the cycle of struggle, build a brighter future for them and help them find the right job</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-6 md:gap-10'>
                    <img className="w-full" src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/About us pics/pics/evolution.jpg`} alt=""/>
                    <h1 className='text-2xl md:text-4xl font-bold'>Evolution</h1>
                    <p className="text-sm md:text-lg">ISA is one of the best acting and film schools of India founded in Delhi - NCR by Mr.
                        Sagar Kohli, who is an actor, filmmaker and entrepreneur. Mr. Sagar
                        Kohli has
                        discovered a new method of acting called Realism which is taught to the acting students of ISA. <br/><br/>
                        The idea of the school is to provide the aspiring actors and artists a realistic approach towards the art of
                        acting, films and
                        performing arts in a customized fashion depending upon what they need to learn the most to excel the craft
                        and help them find the right practical work in the industry.
                        <br/><br/>
                        After becoming the best acting school in India, The Indian School of Acting , expanded its curriculum to
                        several areas of arts along with its global presence by having students, enquiries and clients coming in
                        from
                        all
                        over
                        the world and becoming ISA Film School. At ISA, students can choose from a wide range of visual and
                        performing
                        arts programs
                        that includes Filmmaking, Acting for Films and TV, 3D Animation & Visual Effects, Music, Art, Dance,
                        Cinematography,
                        Digital Editing, Photography, Fitness, Life Lessons, Digital Marketing, Photography, Production and
                        Screenwriting.
                        Located in Delhi - NCR, ISA offers diploma and certificate courses in several domains of arts and performing
                        arts.
                        <br/><br/>
                        ISA is unlike any other film school in the whole world. Since, ISA works like a family,
                        we also make sure that our students are well informed and aware with our other objective being that no
                        students
                        should struggle to get work in the industry. Also no student should get trapped in the fraudulent cases or
                        scams out
                        there, neither while learning nor while finding work, as we protect them. We seek a limited number of
                        students
                        per
                        batch and ensure laser sharp focus on their improvements. We are an improvement oriented film school with
                        our
                        top objective to make you the best artist out there.
                    </p>
                </div>

                {/* 1 image and text in col */}
                <div className='flex flex-col gap-6 md:gap-10'>
                    <img className="w-full" src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/About us pics/pics/nativity-painting.jpg`} alt=""/>
                    <h1 className='text-2xl md:text-4xl font-bold'>Culture</h1>
                    <p className="text-sm md:text-lg">
                        Thanks to the cross-disciplinary nature of ISA, our students, staff and management connect
                        and collaborate together on a daily basis and this creates an exciting, inspiring and engaged space
                        to work,
                        learn and create. ISA is founded on passion, adventure and creative excellence and we ask our students to
                        be
                        fearless in pursuit of their dreams. We pride ourselves on the unlimited creative and collaborative
                        opportunities that
                        exist for our students and staff to push their creativity to its limit.
                        <br/><br/>
                        We are adaptive, innovative and flexible with courses designed to take full advantage of the rapid and
                        ongoing
                        advancements in new media technology. So whatever may be your dream – to manage, perform, produce, direct,
                        sing,
                        dance
                        or design – ISA promises to deliver you into the heart of the industry, highly trained,
                        experienced and ready to impress.
                        <br/><br/>
                        ISA continues to build on this prestige through the creation of a dynamic, skill-based learning
                        environment that offers a full spectrum of creative arts disciplines.
                    </p>
                </div>

                {/* 2 image and text in col */}
                <div className='flex flex-col gap-6 md:gap-10'>
                    <div className='grid grid-cols-2 gap-1 md:gap-4'>
                    <img className="w-full" src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/About us pics/pics/woman1.jpg`} alt=""/>
                    <img className="w-full" src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/About us pics/pics/woman2.jpg`} alt=""/>
                    </div>
                    <h1 className='text-2xl md:text-4xl font-bold'>Future</h1>
                    <p className="text-sm md:text-lg">
                        ISA is a broad-focused, dynamic, world-class learning environment and our vision is
                        long reaching – to produce industry ready performers with a real-world understanding of their craft for whom
                        employability in the industry is a realistic and an attainable goal. To do that, we need to be ahead of the
                        curve, have
                        an adaptive, innovative and flexible learning environment with a cross-disciplinary ability to respond and
                        to
                        think outside the square.
                        <br/><br/>
                        Our intense and wholly immersive environment is designed to ensure ISA excels in individual focused,
                        professional teaching and training in all disciplines within our multifaceted industry.
                        Thanks to the industry conditions of ISA and the latent knowledge of our tutors, our alumni
                        emerge with an inherent understanding of the global film, theatre and TV economy which makes them leave
                        primed to
                        succeed
                        on the world stage. The ISA community is made up of creatively focused like-minded individuals, drawn from
                        current and past students, tutors, directors, consultants and a supportive and dedicated student
                        recruitment
                        and
                        management team.
                        <br/><br/>
                        Our industry networks are strong and growing and our high-value performers are routinely well observed by
                        luminaries in the business. We will always encourage our students to live and breathe their passion, be
                        fearless in
                        pursuit of their dreams and to dream big. Watching them succeed in the global film and TV industry is what
                        makes
                        us tick.
                    </p>
                </div>

                {/* 1 image and text in col */}
                <div className='flex flex-col gap-6 md:gap-10'>
                    <img className="w-full" src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/About us pics/pics/woman-in-gray.jpg`} alt=""/>
                    <h1 className='text-2xl md:text-4xl font-bold'>Philosophy</h1>
                    <p className="text-sm md:text-lg">
                        ISA is unlike any other film school in the whole world. No longer limited to saying The
                        Indian School of acting is the best acting school in India, we are now a global name and a cross
                        disciplinary
                        film
                        school. ISA, now being the best film school in India has students and enquiries coming in from all over the
                        world.
                        At ISA, we believe in success. We believe in thinking outside the square, pushing the
                        limits and daring to imagine. With a highly supportive and nurturing approach we believe in
                        helping our students aspire to greatness, giving them the best possible foundation to become an integral
                        part
                        of the
                        global film and TV industry. The Indian school of Acting is now the best acting school in India and ISA Film
                        School
                        has certainly carved a name for itself.
                    </p>
                </div>

                {/* 1 image and multible text with heading in col */}
                <div className='flex flex-col gap-6 md:gap-10'>
                    <h1 className='text-4xl md:text-5xl font-bold'>ISA Productions</h1>
                    <img className="w-full" src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/About us pics/pics/three-people.jpg`} alt=""/>
                    <div className='space-y-4'>
                        <h2 className='text-2xl md:text-4xl font-bold'>ISA Productions</h2>
                        <p className="text-base md:text-lg">
                            ISA Productions is a full-service production company, content studio, post-production and creative
                            collective.
                        </p>
                    </div>
                    <div className='space-y-4'>
                        <h2 className='text-2xl md:text-4xl font-bold'>Believe</h2>
                        <p className="text-sm md:text-lg">
                            We have stellar instincts supported by a borderline-insane work ethic. We are professional,
                            over-prepared, insured,
                            inventive and eager to please. We do great work because we care deeply about the process. Our
                            resourcefulness
                            keeps our work lively and our approach fresh. We keep it fun for the people involved and those good vibes
                            always
                            show up on the project. <br/>
                            For us, every project is an opportunity to impress, to exceed expectations, to make miracles happen. Because
                            great work
                            isn’t created simply by owning gear, it's born from a meticulous and concentrated effort, backed by years of
                            experience.
                        </p>
                    </div>
                    <div className='space-y-4'>
                        <h2 className='text-2xl md:text-4xl font-bold'>Bring It on</h2>
                        <p className="text-sm md:text-lg">
                            Bring us a project and let us show you how good it can be. We have built our reputation over
                            years delivering
                            outstanding results for our clients. We take the time to understand your strategy, stakeholders and
                            audiences
                            and bring
                            our experience and insights to the table. Operating as a valuable and highly specialised team at the very
                            centre of your
                            organisation, we collaborate seamlessly with your team to deliver visual identities & executions that are
                            robust,
                            memorable and truly effective.
                        </p>
                    </div>
                </div>

                {/* four gird image with text */}
                <div className='flex flex-col gap-6 md:gap-10 text-center'>
                    <h1 className='text-4xl md:text-5xl font-bold'>Core Values</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10'>
                        <div className='flex flex-col items-center gap-2 md:gap-6'>
                            <img className="w-24" src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/About us pics/icons2/checked.png`} alt=""/>
                            <h3 className="text-xl md:text-2xl font-bold">Tell it like it is</h3>
                            <p className='text-sm md:text-base text-center'>
                                We’re in the business of clear, up-front communication. Honesty is key, with our clients and employees.
                            </p>
                        </div>
                        <div className='flex flex-col items-center gap-2 md:gap-6'>
                            <img className="w-24" src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/About us pics/icons2/start-up.png`} alt=""/>
                            <h3 className="text-xl md:text-2xl font-bold">Better is Best</h3>
                            <p className='text-sm md:text-base text-center'>
                                We innovate aggressively because video is ALWAYS improving. Today’s “better” leads tomorrow’s
                                “best.” That’s how we keep our clients ahead of the curve.
                            </p>
                        </div>
                        <div className='flex flex-col items-center gap-2 md:gap-6'>
                            <img className="w-24" src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/About us pics/icons2/ear.png`} alt=""/>
                            <h3 className="text-xl md:text-2xl font-bold">We're all Ears</h3>
                            <p className='text-sm md:text-base text-center'>
                                We want to listen well in order to fully learn your needs and values. We make sure
                                we hear right and only then do we get to work.
                            </p>
                        </div>
                        <div className='flex flex-col items-center gap-2 md:gap-6'>
                            <img className="w-24" src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/About us pics/icons2/plan.png`} alt=""/>
                            <h3 className="text-xl md:text-2xl font-bold">No Surprises</h3>
                            <p className='text-sm md:text-base text-center'>
                                Expectations are everything. We take care to lay out a complete plan alongside
                                clients, so what you expect is what you get.
                            </p>
                        </div>
                    </div>
                </div>

                {/* center aligned text */}
                <div className='flex flex-col items-center gap-6 text-center'>
                    <h2 className='text-xl md:text-2xl font-bold'>People are the Best Investment</h2>
                    <p className='text-sm md:text-base w-full md:w-2/3'>
                        We dedicate our time and resources to empowering our team of professionals. Their
                        individual growth adds up to a higher bar all around.
                    </p>
                </div>

                {/* 1 image and text in col */}
                <div className='flex flex-col gap-6 md:gap-10'>
                    <h1 className='text-4xl md:text-5xl font-bold'>ISA Talent Management</h1>
                    <img className="w-full" src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/About us pics/pics/administration.jpg`} alt=""/>
                    <h1 className='text-xl md:text-2xl md:text-4xl font-bold'>ISA Talent Management and Casting</h1>
                    <p className="text-sm md:text-lg">
                    ISA Talent Management has great relations with talents and talent agents
                    around the world. That makes
                    us capable of conducting direct casting from any part of the world in the shortest time. ISA is not just about
                    training, but also about helping you find the right work and the right talent for the clients and casting coordinators.
                    The institute is backed by the biggest job provider for actors, directors, cinematographers, producers,
                    editors, sound recordists, script writers in the continent. So you begin by auditioning for roles right in the
                    campus itself, instead of having to run from place to place.
                    </p>
                </div>

                {/* 1 image and text in col */}
                <div className='flex flex-col gap-6 md:gap-10'>
                    <h1 className='text-4xl md:text-5xl font-bold'>ISA Creative Space</h1>
                    <img className="w-full" src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/About us pics/pics/man-standing.jpg`} alt=""/>
                    <h1 className='text-2xl md:text-4xl font-bold'>Routesville: Our Collaborative Space</h1>
                    <p className="text-sm md:text-lg">
                        ISA’s creative space called Routesville is an alternative arts and performance space. We rent out our beautiful
                        creative space which is more than 4000 sq. ft in size(it is massive) for different artistic events and purposes.
                        We support, host and curate films, theatre, music, events, stand up comedy shows, films, casting, poetry and
                        exhibits. It’s a big space which has different sections and can seat about 200 people and more if required.
                        <br/><br/>
                        Routesville is a co-working and rent-it-out space that offers a cool, quirky and massive space for all creative
                        entures and an alternative performance space that curates unique performances in the form of films, poetry,
                        artistic gatherings, theater, music, comedy shows and dances.
                        It is a new way of life that embraces all art forms and seeks to create something bigger and better.
                    </p>
                </div>

                {/* left aligned text */}
                <div className='flex flex-col gap-6'>
                    <h2 className='text-4xl md:text-5xl font-bold'>What else?</h2>
                    <p className='text-sm md:text-lg'>
                        Routesville is an international arts studio with a passion for film, new media, community art spaces and
                        contemporary art. Based in Vaishali, Ghaziabad, (Delhi - NCR), Routesville, the office of ISA, is the coolest
                        and one of the most trending artistic spaces in India. Routesville has taken many forms and identities across
                        disciplines. At the core, we are a collective of passionate storytellers from diverse cultural, business and
                        creative backgrounds. We are all about films. Along with being the top training center of films and acting in
                        India, we create web content, short films, fashion films and digital commercials. A part of our team is also
                        always busy filming and putting together behind the scenes documentation for feature films. Another part
                        is busy training the best artists of the country.
                    </p>
                </div>

            </div>
            <SubpageFooter />
        </div>
    )
}

export default AboutPage;