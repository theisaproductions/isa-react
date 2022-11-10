import React from 'react';
import {Helmet} from "react-helmet";
import SubpageFooter from '../components/subpageFooter';
import TopMediaComponent from '../components/topMediaComponent';
import './common.css';

const PhotographyPage = () => {

    return (
        <div className=''>
            <Helmet>
                <title>Diploma In Photography In Delhi  | The Indian School of Acting</title>
                <meta name="description" content="We offer professional photography diploma courses in Delhi. Diplomas and certificates in photography cover every aspect of the field."/>
            </Helmet>
            <TopMediaComponent type="video" mediaUrl='photography.mp4' />
            <div className='max-w-5xl mx-auto px-4 py-14 flex flex-col gap-14 md:gap-28'>
                {/* just center text */}
                <div className='text-center flex flex-col gap-10'>
                    <h1 className='heading1'>ISA School of Photography and Fashion</h1>
                    <h2 className='quote'>“Photography is the story I fail to put into words.”</h2>
                    <h2 className='heading2'>ISA School of Photography</h2>
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
                        At ISA, we believe the most successful
                        communicators of the future will be those
                        who use photography instinctively and intelligently.
                    </p>
                </div>

                {/* just text*/}
                <div className='flex flex-col md:flex-row gap-6'>
                    <h1 className="heading1">Overview</h1>
                    <div className='space-y-6'>
                        <p className='paragraph'>
                            Our cutting-edge professional photography courses are written and directed by some of the best working
                            photographers in their field. The aim of the courses is to provide you with the knowledge and skills
                            required for a career as a professional photographer or as a keen hobbyist. Both versions of our course,
                            the Certificate Course and the Diploma of Photography are up-to-date and comprehensive, covering every
                            aspect of photography.
                        </p>
                    </div>
                </div>

                <h1 className='heading1'>Courses</h1>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/photography/1.jpg`} alt=""/>
                    <h2 className='heading2'>Diploma In Professional Photography</h2>
                    <p className='paragraph font-semibold'>
                        Terms: 3, 6, 9 and 12 months <br/>
                        Full Time and Part Time
                    </p>
                    <p className="paragraph">
                        Throughout the diploma courses you will discover and be immersed in the enormous
                        possibilities of image
                        making in the 21st century. Starting with a strong focus on ideas, techniques and hands-on approaches to
                        your image making, you will be guided through digital workflow, image composition and creative output.
                        The courses are aimed at those who want to take the complete journey from beginner through to
                        professional photographer. These courses aim to deliver you a broad spectrum of skills in both photography
                        and post-production, covering everything from beginner to advanced DSLR, street photography and studio
                        lighting, through to beginner to advanced Photoshop and how to make money from your photography and
                        more. Recommended for beginners, intermediate as well as anyone wishing to consolidate their knowledge
                        and get a highly valued diploma certificate, this course starts from the foundations of photography and
                        combines a variety of specialised workshops in different fields with a step by step process and hands-on
                        experience that builds up real skills.The complete programme includes street and studio photography, post
                        production and career coaching sessions. After completing the course, you will have enough material
                        to build a professional portfolio of images for a wide range of work or possibilities.
                    </p>
                </div>

                {/* heading */}
                <h2 className='heading2'>Course Inclusions</h2>

                {/* image right text left */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-10'>
                        <h1 className='heading2'>Foundations Of Photography</h1>
                        <p className='paragraph font-semibold'>
                            Full Time and Part time <br/>
                            Diploma Course
                        </p>
                        <p className='paragraph'>
                            The ISA Foundation photography course
                            has been designed to familiarize you
                            in-depth with the basics of photography
                            and digital camera operations. The course
                            is recommended for those who wish to
                            take great photos and embark on a creative
                            journey, including hobbyists and amateurs.
                            Course develops your understanding of
                            exposure and covers the more complex
                            camera functions, with an opportunity
                            put it all into practice.
                        </p>
                    </div>
                    <div>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/photography/2.jpg`} alt="girl smiling"/>
                    </div>
                </div>

                {/* two image and two text */}
                <div className='flex flex-col gap-6'>
                    <div className='grid grid-cols-1 gap-1 md:gap-4'>
                        <div className='grid grid-cols-2 gap-2 md:gap-6'>
                            <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/photography/3.jpg`} alt=""/>
                            <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/photography/4.jpg`} alt=""/>
                        </div>
                        <div className='grid grid-cols-2 gap-6'>
                            <div className='flex flex-col gap-6'>
                                <h2 className='heading2'>Studio Lighting</h2>
                                <p className='paragraph'>
                                    A step-by-step training into the world
                                    of artificial lighting. Learn to use studio
                                    lights and accessories to achieve every
                                    desired result.
                                </p>
                            </div>
                            <div className='flex flex-col gap-6'>
                                <h2 className='heading2'>Lightroom Essential Training</h2>
                                <p className='paragraph'>
                                    Learn sophisticated imaging techniques
                                    to maximise image quality and workflow
                                    efficiency to a professional level.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* two image and two text */}
                <div className='flex flex-col gap-6'>
                    <div className='grid grid-cols-1 gap-1 md:gap-4'>
                        <div className='grid grid-cols-2 gap-2 md:gap-6'>
                            <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/photography/5.jpg`} alt=""/>
                            <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/photography/6.jpg`} alt=""/>
                        </div>
                        <div className='grid grid-cols-2 gap-6'>
                            <div className='flex flex-col gap-6'>
                                <h2 className='heading2'>PJ and Street Photography</h2>
                                <p className='paragraph'>
                                    Document the streets and life as it happens
                                    gaining confidence to photograph in ever
                                    changing light conditions and unexpected
                                    situations.
                                </p>
                            </div>
                            <div className='flex flex-col gap-6'>
                                <h2 className='heading2'>Portrait Photography</h2>
                                <p className='paragraph'>
                                    Learn how to take remarkable portraits
                                    using very little equipment, getting the
                                    most of light and speedlights indoors
                                    and outdoors.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* two image and two text */}
                <div className='flex flex-col gap-6'>
                    <div className='grid grid-cols-1 gap-1 md:gap-4'>
                        <div className='grid grid-cols-2 gap-2 md:gap-6'>
                            <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/photography/7.jpg`} alt=""/>
                            <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/photography/8.jpg`} alt=""/>
                        </div>
                        <div className='grid grid-cols-2 gap-6'>
                            <div className='flex flex-col gap-6'>
                                <h2 className='heading2'>Product Photography</h2>
                                <p className='paragraph'>
                                    Identify the challenges of product
                                    photography and learn how to resolve
                                    them. Experience the many roles that are part of it
                                    from styling to post processing.
                                </p>
                            </div>
                            <div className='flex flex-col gap-6'>
                                <h2 className='heading2'>Career Coaching</h2>
                                <p className='paragraph'>
                                    With a personal portfolio review and the guidance of a
                                    professional to find your strength, take the steps you
                                    need to start your career as a photographer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/photography/9.jpg`} alt=""/>
                    <h2 className='heading2'>Advance Diploma Course</h2>
                    <p className="paragraph font-semibold">
                        Duration: 4 months <br/>
                        Part Time Only
                    </p>
                </div>

                {/* Overview */}
                <div className='flex flex-col md:flex-row gap-6'>
                    <h1 className="heading1">Overview</h1>
                    <div className='space-y-6'>
                        <p className='paragraph'>
                            For students wanting to turn their passion into a career, there is the option to undertake our
                            unique and innovative part time Advanced Diploma of Photography course. Advanced Diploma
                            in Photography extends your techniques and creative abilities as you find a visual language and
                            direction in your work. Practical hands-on classes in studio photography explore studio lighting,
                            equipment and working collaboratively. Professional workflow and post-production are built on,
                            as is the importance of the photographic print.
                        </p>
                    </div>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/photography/10.jpg`} alt=""/>
                    <h2 className='heading2'>Professional Photography: Flexible Course</h2>
                    <p className="paragraph font-semibold">
                        Part Time, Study at own pace <br/>
                        Duration: 9 months
                    </p>
                    <p className='paragraph'>
                        Complete the Professional Photography Course at your own pace, making your own schedule, spreading
                        your lessons from 2 to 9 months. Workshops available on weekdays, weekends and evenings. In addition
                        to being able to spread the time to finish the course from the 2 Months intensive training to 9 months in a
                        more relaxed pace. Once you have completed your first step Foundations of Photography), you can also
                        tailor the order in which you take the other workshops.
                    </p>
                </div>

                {/* image left text right */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'>
                    <div>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/photography/11.jpg`} alt="girl smiling"/>
                    </div>
                    <div className='flex flex-col gap-6 md:gap-10'>
                        <h3 className="heading2">Pro Photography Certificate</h3>
                        <p className="paragraph font-semibold">
                            Part time <br/>
                            Duration: 2 months
                        </p>
                        <h3 className='quote'>“The perfect blend of creative and technical”</h3>
                        <p className='paragraph'>
                            If you love travel photography, landscape, people
                            fashion, portraiture and want great results or are
                            dreaming of a career change then course option is
                            for you.
                        </p>
                    </div>
                </div>

                {/* image right text left */}
                <div className='flex flex-col-reverse md:flex-row gap-6 md:gap-10'>
                    <div className='flex flex-col gap-6 md:gap-10 w-full md:w-1/2'>
                        <h3 className="heading2">Creative Photography Certificate</h3>
                        <p className="paragraph font-semibold">
                            Part-Time Course <br/>
                            Duration: 2 months
                        </p>
                        <h3 className='quote'>“Stand out from the crowd”</h3>
                        <p className='paragraph'>
                            Our Creative Photography Certificate
                            has the perfect blend of the creative,
                            technical and image review in every
                            class. So you learn in a fun, dynamic
                            and professional way.
                        </p>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/photography/12.jpg`} alt="girl smiling"/>
                    </div>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/photography/13.jpg`} alt=""/>
                    <h2 className='heading2'>Beginners Photography Course</h2>
                    <p className="paragraph font-semibold">
                        Duration: 1 Month <br/>
                        Certification Course
                    </p>
                    <p className='paragraph'>
                        Our comprehensive DSLR Photography for Beginners course will give you all the technical information
                        you need to get the most out of your camera, and begin to look at the aesthetics of photography to develop
                        your personal style. Our expert tutors will guide you through all the manual functions on your camera,
                        lens options and compositional techniques, giving you a deeper understanding of digital photography,
                        allowing further creativity with your images. The course will feature hands-on practical exercises to further
                        your understanding of the theory of photography, giving you the confidence to produce the images that you
                        have imagined. You will look at a range of photography genres and discover new techniques and photography
                        styles to inspire your work.
                    </p>
                </div>

                {/* image left text right */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'>
                    <div>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/photography/14.jpg`} alt="girl smiling"/>
                    </div>
                    <div className='flex flex-col gap-6 md:gap-10'>
                        <h3 className="heading2">5 days Photography Workshop</h3>
                        <p className="paragraph font-semibold">
                            LEVEL 1 and 2 <br/> Certificate Workshop
                        </p>
                        <p className='paragraph'>
                            In this Photography Workshop you breathe and live
                            photography for 5 days. With hands-on experience
                            (70% practice/30% theory) and projects throughout
                            the 5 days, by the end of the workshop you will feel
                            extremely empowered, fully in control of your camera
                            and will see the world with brand new eyes.
                        </p>
                    </div>
                </div>

                {/* two image with text */}
                <div className='flex flex-col gap-6'>
                    <div className='grid grid-cols-2 gap-1 md:gap-4'>
                        <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/photography/15.jpg`} alt=""/>
                        <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/photography/16.jpg`} alt=""/>
                    </div>
                    <h2 className='heading2'>Diploma in Travel & Nature Photography</h2>
                    <p className='paragraph font-semibold'>
                        Diploma Course
                        <br/> Full Time, Part time
                    </p>
                    <p className='paragraph'>
                        Travel Photography is about capturing the essence of a place and its people. Nature Photography is about capturing
                        the many facets and moods of nature. It will give you good grounding of the technical and create aspects of
                        Travel & Nature Photography and the nuances involved to create interesting and meaningful images.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/photography/17.jpg`} alt=""/>
                    <h2 className='heading2'>Wedding and Pre Wedding Photography</h2>
                    <p className="paragraph font-semibold">
                        Wedding Photography Workshop
                        <br/> Certificate courses
                    </p>
                    <h3 className="quote">“Capture souls, not just smiles.”</h3>
                    <p className='paragraph'>
                        This workshop will help you to prepare for the most challenging real life event there is by simulating realistic
                        photographic situations as well as interesting and dynamic theory discussions. You will come away with an
                        understanding of how to approach this field photography with confidence and curiosity as well as the beginning
                        of a great portfolio of work to get your new career started in Style. Being responsible for capturing the memories
                        of the most important day of a couples life is what makes wedding photography so special, it will make you a
                        better photographer in every way.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/photography/18.jpg`} alt=""/>
                    <h2 className='heading2'>4 Week Online Photography Course</h2>
                    <p className="paragraph font-semibold">
                        1 hour per class
                        <br/> Certificate course
                    </p>
                    <p className='paragraph'>
                        This Online Photography workshop is constructed to deliver a great deal of content in a short time & is an exceptional
                        opportunity for an intensive education in photography for four weeks. The course will cover Adobe Lightroom
                        classic, camera operations, elements of exposure, the history of photography through 1960 and a deep dive into
                        the creation of personal projects.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/photography/19.jpg`} alt=""/>
                    <h2 className='heading2'>Hire Photographers</h2>
                    <p className="paragraph font-semibold">
                        For Weddings, Pre Weddings & other Events
                        <br/> Best Photographers of the country
                    </p>
                    <p className='paragraph'>
                        We have a passionate team of the best Indian wedding, Fashion and Event Photographers and Candid
                        Cinematographers who love to capture and preserve the most beautiful emotions experienced around. The biggest
                        days of your life deserve to be captured by the most talented ones. We have a list of wedding and events
                        photographers from all the Indian cities. Both premium and budget photographers are listed in all categories
                        including traditional, candid, drone, pre-wedding photography, fashion and events categories. At ISA, you
                        can find the type of photographer you want for any budget.
                    </p>
                </div>

                {/* just text*/}
                <div className='flex flex-col gap-6'>
                    <h1 className="heading1">Editing Courses</h1>
                    <p className='paragraph'>
                        It has now become essential for an able photographer to know all digital post production techniques to enhance
                        the quality of photographs using a computer. Hence a photographer must acquire knowledge of digital photo editing
                        from the photography point of view. ISA gives the same. It imparts knowledge in digital photo editing keeping
                        in mind the needs of a photographer that too with reasonable fees.
                    </p>
                </div>

                {/* image with row of items */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/photography/20.jpg`} alt=""/>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col gap-4 border-t-8 border-gray-300 pt-4">
                            <h2 className="heading2">Photoshop</h2>
                            <p className="paragraph font-semibold">
                                Certificate course <br/> Duration: 2 months
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 border-t-8 border-gray-300 pt-4">
                            <h2 className="heading2">Editing Pro: Photoshop + Premiere</h2>
                            <p className="paragraph font-semibold">
                                Certificate course <br/> Duration: 1 months
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 border-t-8 border-gray-300 pt-4">
                            <h2 className="heading2">Editing Premiere</h2>
                            <p className="paragraph font-semibold">
                                Certificate course <br/> Duration: 1 months
                            </p>
                        </div>
                    </div>
                </div>

                {/* two image with text */}
                <div className='flex flex-col gap-6'>
                    <h2 className='heading1'>World of fashion</h2>
                    <div className='grid grid-cols-2 gap-1 md:gap-4'>
                        <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/photography/21.jpg`} alt=""/>
                        <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/photography/22.jpg`} alt=""/>
                    </div>
                    <h2 className='heading2'>ISA School of Fashion</h2>
                    <p className='paragraph font-semibold'>
                        Short certificate courses
                        <br/> Diploma Courses
                        <br/> Advance Diploma Course
                    </p>
                    <p className='paragraph'>
                        Being a professional model is about creativity
                        independence and individuality. Our modelling
                        course will equip you with the physical and mental
                        essentials to succeed in the modelling industry.
                    </p>
                </div>

                {/* just text*/}
                <div className='flex flex-col md:flex-row gap-6'>
                    <h1 className="heading1">Overview</h1>
                    <div className='space-y-6'>
                        <p className='paragraph'>
                            We have specifically designed courses to educate aspiring and established models to equip them with physical and
                            mental essentials to succeed in the competitive modelling industry. All of the courses consist of smaller classes for
                            intimate and personalised training, making sure all our students receive the most value throughout the training.
                        </p>
                    </div>
                </div>

                {/* one image with quote */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/photography/23.jpg`} alt=""/>
                    <h2 className='quote'>“Style is a way to say who you are without having to speak"</h2>
                </div>

                {/* image left text right */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'>
                    <div>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/photography/24.jpg`} alt="girl smiling"/>
                    </div>
                    <div className='flex flex-col gap-6 md:gap-10'>
                        <h3 className="heading2">ISA Modelling Course</h3>
                        <p className="paragraph font-semibold">
                            Age: Above 15 Years <br />
                            Duration: 3 months <br />
                            Diploma in Modelling <br />
                            Includes Portfolio
                        </p>
                        <p className='paragraph'>
                            This 12 week course is the most popular course because of its
                            holistic approach to the industry. You will learn all
                            that you need to know about modelling – runway,
                            editorial, agency application and interviewing, starting
                            a business, marketing strategies, leadership, finances
                            and admin, hair and makeup, nutrition and positive
                            mindset and even finish with an agency ready portfolio.
                        </p>
                    </div>
                </div>

                {/* image right text left */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-10'>
                        <h1 className='heading2'>ISA Kids Modelling</h1>
                        <p className='paragraph font-semibold'>
                            Age: 5 - 12 Years <br/>
                            Duration: 3, 6, 9 months <br/>
                            Includes Portfolio <br/>
                            Casting support
                        </p>
                        <p className='paragraph'>
                            This unique course is intended for children and
                            delivers age appropriate lessons in deportment,
                            grooming, etiquette and confidence development.
                        </p>
                    </div>
                    <div>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/photography/25.jpg`} alt="girl smiling"/>
                    </div>
                </div>

                {/* image left text right */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'>
                    <div>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/photography/26.jpg`} alt="girl smiling"/>
                    </div>
                    <div className='flex flex-col gap-6 md:gap-10'>
                        <h3 className="heading2">ISA Portfolio Making</h3>
                        <p className="paragraph font-semibold">
                            For Aspiring models <br/>
                            For Kids Models <br/>
                            Includes: Placement and promotions <br/>
                            Casting support
                        </p>
                        <p className='paragraph'>
                            Meticulously planned out, the portfolio includes a wide
                            range of pictures clicked both in fully equipped studio
                            as well as outdoors. A number of stunning looks are
                            provided by renowned makeup artist and hair stylist
                            along with best costumes which gives the right effects
                            as per the frame and bone structure. Complete guidance
                            is provided for promotion and planning out of a
                            successful modelling career.
                        </p>
                    </div>
                </div>

                {/* image right text left */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-10'>
                        <h1 className='heading2'>ISA Celebrity Shoots</h1>
                        <p className='paragraph font-semibold'>
                            A portfolio with a celebrity <br/>
                            photoshoot, promotions, casting
                        </p>
                        <p className='paragraph'>
                            Once in a while event exclusively organized
                            by ISA In which artists and aspiring stars
                            are given an opportunity to get a portfolio
                            with their favorite celebrities and stars
                            from Bollywood.
                        </p>
                    </div>
                    <div>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/photography/27.jpg`} alt="girl smiling"/>
                    </div>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/photography/28.jpg`} alt=""/>
                    <h2 className='heading2'>Fashions Shows | Fashion Weeks | Beauty Pageants | Products Launch | Kids Pageants</h2>
                    <p className='paragraph'>
                        In the world of event management fashion event planning is often seen as very glamorous and cutting edge. In reality
                        there are aspects of it which involve a lot of hard work and pressure behind the scenes that is often unrecognised.
                        ISA with its vast crew and network can ease things out for you organizing the small and large scale level
                        fashion events with the utmost success.
                    </p>
                </div>

            </div>
            <SubpageFooter />
        </div>
    )
}

export default PhotographyPage;