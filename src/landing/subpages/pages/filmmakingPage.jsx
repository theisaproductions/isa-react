import React from 'react';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import SubpageFooter from '../components/subpageFooter';
import TopMediaComponent from '../components/topMediaComponent';
import './common.css';

const FilmmakingPage = () => {

    return(
        <div className=''>
            <MetaTags>
                <title>ISA Film School</title>
                <meta name="description" content=""/>
            </MetaTags>
            <TopMediaComponent type="video" mediaUrl='filmmaking.mp4' />
            <div className='max-w-5xl mx-auto px-4 py-14 flex flex-col gap-14 md:gap-28'>
                {/* just center text with heading and subheading */}
                <div className='text-center flex flex-col gap-6'>
                    <h1 className="heading1">ISA Film School</h1>
                    <h2 className="subheading">There is no higher form of artistic expression than film.</h2>
                    <p className='paragraph'>
                        Immerse yourself in a curriculum that integrates technical knowledge with artistic exploration and creativity
                        taught by industry-experienced professionals.
                    </p>
                </div>

                {/* just text*/}
                <div className='flex flex-col md:flex-row gap-6'>
                    <h1 className="heading1">Overview</h1>
                    <p className='paragraph'>
                        It all starts with imagination, ideas and the script. Creative producers and screenwriters learn to analyze
                        and write screenplays by understanding character, structure and narrative story elements. From pre-production,
                        into production and finally post-production. Filmmakers will perfect both the creative and business aspects of
                        filmmaking by enhancing and developing artistic proficiency and judgment, becoming immersed in a solid
                        background of the entertainment industry.
                    </p>
                </div>

                {/* quote */}
                <h2 className='quote text-center'>“We don’t want to tell you how to do your job, but somebody has to.”</h2>
                
                {/* heading */}
                <h1 className='heading1'>Courses</h1>
                
                {/* two image and two text */}
                <div className='flex flex-col gap-6'>
                    <div className='grid grid-cols-2 gap-1 md:gap-4'>
                        <div className='flex flex-col gap-6'>
                            <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/1.jpg`} alt=""/>
                            <h2 className='heading2'>Filmmaking: Script to Screen</h2>
                            <p className='paragraph font-bold'>Duration: 1.5 Years</p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/2.jpg`} alt=""/>
                            <h2 className='heading2'>Advance Diploma in Film making</h2>
                            <p className='paragraph'>
                                The study of film involves a wide variety of different
                                topics, including directing, production, screenplay
                                and distribution. Students often analyze everything
                                from film structure and storytelling to visual
                                symbolism and social context.
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* three grid with image and text */}
                <div className='flex flex-col gap-6'>
                    <h2 className='heading2'>Course Flow</h2>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                        <div className="space-y-2">
                            <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/3.jpg`} alt=""/>
                            <h4 className="subheading">Introduction</h4>
                        </div>
                        <div className="space-y-2 subheading">
                            <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/4.jpg`} alt=""/>
                            <h4 className="subheading">Script Development</h4>
                        </div>
                        <div className="space-y-2 subheading">
                            <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/5.jpg`} alt=""/>
                            <h4 className="subheading">Pre Production</h4>
                        </div>
                        <div className="space-y-2 subheading">
                            <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/6.jpg`} alt=""/>
                            <h4 className="subheading">Production</h4>
                        </div>
                        <div className="space-y-2 subheading">
                            <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/7.jpg`} alt=""/>
                            <h4 className="subheading">Post Production</h4>
                        </div>
                        <div className="space-y-2 subheading">
                            <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/8.jpg`} alt=""/>
                            <h4 className="subheading">Distribution</h4>
                        </div>
                    </div>
                </div>

                {/* image left text right */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'>
                    <div>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/9.jpg`} alt="girl smiling"/>
                    </div>
                    <div className='flex flex-col gap-6 md:gap-10'>
                        <h3 className="heading2">INTRODUCTION</h3>
                        <h4 className="subheading">The Beginning of Films.</h4>
                        <p className="paragraph">
                        Introduction to films | Brief History of Cinema
                        | Invention of Motion Picture | Evolution of movies | Camera and its impact on the industry.
                        </p>
                    </div>
                </div>

                {/* image right text left */}
                <div className='flex flex-col-reverse md:flex-row gap-6 md:gap-10'>
                    <div className='flex flex-col gap-6 md:gap-10 w-full md:w-1/2'>
                        <h3 className="heading2">SCRIPT AND SCREENPLAY</h3>
                        <h4 className="subheading">It’s all about stories.</h4>
                        <p className="paragraph">
                            Understanding of Scripting Ideas | Loglines | Synopsis | Treatment | Genres and Formats | Plots and Subplots |
                            Three Act Structure | Screenplay Writing.
                        </p>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/10.jpg`} alt="girl smiling"/>
                    </div>
                </div>

                {/* image left text right */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'>
                    <div>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/11.jpg`} alt="girl smiling"/>
                    </div>
                    <div className='flex flex-col gap-6 md:gap-10'>
                        <h3 className="heading2">PRE PRODUCTION</h3>
                        <h4 className="subheading">The good training will survive.</h4>
                        <p className="paragraph">
                            Scheduling, lining, scene breakdown sheets | Locations | Cast & Crew Structure | Equipments
                            | Types of Camera, Lightings, Sound, Video vs Film | Production Design: Props Sets, Wardrobe, Makeup
                            | Set Dressing, Creating Time Period.
                        </p>
                    </div>
                </div>

                {/* image with row of items */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/12.jpg`} alt=""/>
                    <h2 className='heading2'>PRODUCTION</h2>
                    <p className='paragraph'>
                        Master skills in the art of visual storytelling from a creative and technical perspective.
                    </p>
                    <div className="flex flex-col md:flex-row justify-between gap-6">
                        <div className="flex flex-col gap-4 w-full md:w-1/5">
                            <img className='h-44 mx-auto' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/13.jpg`} alt=""/>
                            <h4 className="paragraph font-semibold text-center">Acting</h4>
                        </div>
                        <div className="flex flex-col gap-4 w-full md:w-1/5">
                            <img className='h-44 mx-auto' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/14.jpg`} alt=""/>
                            <h4 className="paragraph font-semibold text-center">Directing</h4>
                        </div>
                        <div className="flex flex-col gap-4 w-full md:w-1/5">
                            <img className='h-44 mx-auto' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/15.jpg`} alt=""/>
                            <h4 className="paragraph font-semibold text-center">Cinematography</h4>
                        </div>
                        <div className="flex flex-col gap-4 w-full md:w-1/5">
                            <img className='h-44 mx-auto' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/16.jpg`} alt=""/>
                            <h4 className="paragraph font-semibold text-center">Audio Recording</h4>
                        </div>
                        <div className="flex flex-col gap-4 w-full md:w-1/5">
                            <img className='h-44 mx-auto' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/17.jpg`} alt=""/>
                            <h4 className="paragraph font-semibold text-center">Makeup</h4>
                        </div>
                    </div>
                </div>

                {/* course with two image */}
                <div className='flex flex-col gap-6'>
                    <div className='grid grid-cols-2 gap-1 md:gap-4'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/18.jpg`} alt=""/>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/19.jpg`} alt=""/>
                    </div>
                    <h2 className='heading2'>ACTING FOR CAMERA</h2>
                    <h3 className='quote'>“It is important to feel what others are feeling.”</h3>
                </div>

                {/* image right text left */}
                <div className='flex flex-col-reverse md:flex-row gap-6 md:gap-10'>
                    <div className='flex flex-col gap-6 md:gap-10 w-full md:w-1/2'>
                        <h2 className="heading2">DIRECTION</h2>
                        <h3 className="subheading">“Film gives us a second chance at a first impression.”</h3>
                        <p className="paragraph">
                            Directing | Directing during Pre Production
                            | Rehearsing with Actors | Directing Crew | Direction during Production and Post Production.
                        </p>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/20.jpg`} alt="girl smiling"/>
                    </div>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/21.jpg`} alt=""/>
                    <h2 className='heading2'>CINEMATOGRAPHY</h2>
                    <h3 className='quote'>“Cinematography is infinite in its possibilities. So, learn.”</h3>
                    <p className="paragraph">
                        Director of photography and camera team, cinematography as a technique, art form and shooting styles, light
                        and its properties, camera, lenses, five rings, framing and composition, shot types, lighting, blocking,
                        rehearsing,
                        tweaking, shooting scenes, organisation of shots.
                    </p>
                </div>

                {/* image left text right */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'>
                    <div>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/22.jpg`} alt="girl smiling"/>
                    </div>
                    <div className='flex flex-col gap-6 md:gap-10'>
                        <h3 className="heading2">SOUND IN FILMS</h3>
                        <h4 className="subheading">Music or sound in a film is a character as important as another character.</h4>
                        <p className="paragraph">
                            Audio recording, production microphones,
                            recording to camera, sync sound, boom handling techniques, wireless mics,
                            types of sounds.
                        </p>
                    </div>
                </div>

                {/* image right text left */}
                <div className='flex flex-col-reverse md:flex-row gap-6 md:gap-10'>
                    <div className='flex flex-col gap-6 md:gap-10 w-full md:w-1/2'>
                        <h2 className="heading2">MAKE-UP</h2>
                        <h3 className="subheading">Magnify the beauty of your characters</h3>
                        <p className="paragraph">
                        Hair and Make-up - straight make up
                        special effects makeup, prosthetics
                        hairstyling.
                        </p>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/23.jpg`} alt="girl smiling"/>
                    </div>
                </div>

                {/* text with row of items */}
                <div className='flex flex-col gap-6'>
                    <h2 className='heading2'>POST - PRODUCTION</h2>
                    <h3 className='subheading'>Technical skills and expertise align to make the successful creative Film technician.</h3>
                    <div className="flex flex-col md:flex-row justify-between gap-6">
                        <div className="flex flex-col gap-4 w-full md:w-1/5">
                            <img className='h-44 mx-auto' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/24.png`} alt=""/>
                            <h4 className="paragraph font-semibold text-center">Editing</h4>
                        </div>
                        <div className="flex flex-col gap-4 w-full md:w-1/5">
                            <img className='h-44 mx-auto' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/25.png`} alt=""/>
                            <h4 className="paragraph font-semibold text-center">Digital Effects</h4>
                        </div>
                        <div className="flex flex-col gap-4 w-full md:w-1/5">
                            <img className='h-44 mx-auto' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/26.png`} alt=""/>
                            <h4 className="paragraph font-semibold text-center">Post Production Audio</h4>
                        </div>
                        <div className="flex flex-col gap-4 w-full md:w-1/5">
                            <img className='h-44 mx-auto' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/27.png`} alt=""/>
                            <h4 className="paragraph font-semibold text-center">Music</h4>
                        </div>
                    </div>
                </div>

                {/* one image with text and quote */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/28.jpg`} alt=""/>
                    <h2 className='heading2'>EDITING</h2>
                    <h3 className='quote'>“A lot can change in the editing room”</h3>
                    <p className="paragraph">
                        Post production workflow, concepts of editing, relationship between shots, editing systems, editing process,
                        editing techniques, continuity, cutting on action, montages, edit types, transitions, colour correction, titles
                        and graphics, compression, credits.
                    </p>
                </div>

                {/* two image with text */}
                <div className='flex flex-col gap-6'>
                    <div className='grid grid-cols-2 gap-1 md:gap-4'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/29.jpg`} alt=""/>
                        <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/30.png`} alt=""/>
                    </div>
                    <h2 className='heading2'>DIGITAL EFFECTS</h2>
                    <h3 className='quote'>“Magic is really performing digital effects live.”</h3>
                    <p className='paragraph'>
                        Compositing, Chroma Keying | 3-D Animation.
                    </p>
                </div>

                {/* two image and two text */}
                <div className='flex flex-col gap-6'>
                    <div className='grid grid-cols-1 gap-1 md:gap-4'>
                        <div className='grid grid-cols-2 gap-2 md:gap-6'>
                            <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/31.jpg`} alt=""/>
                            <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/32.jpg`} alt=""/>
                        </div>
                        <div className='grid grid-cols-2 gap-6'>
                            <div className='flex flex-col gap-6'>
                                <h2 className='heading2'>POST-PRODUCTION AUDIO</h2>
                                <p className='paragraph'>Five tracks, audio mixing, M&E tracks.</p>
                            </div>
                            <div className='flex flex-col gap-6'>
                                <h2 className='heading2'>MUSIC</h2>
                                <p className='paragraph'>Stock music, copyrighted music, music loops.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/33.jpg`} alt=""/>
                    <h2 className='heading2'>DISTRIBUTION OF FILMS</h2>
                    <p className="paragraph">
                        Learn how distributors will advertise and promote the film and how much to spend on these activities and film
                        festivals. This includes promotion activities, distribution type: foreign and domestic distribution,
                        deliverables and film festivals.
                    </p>
                </div>

                {/* Heading */}
                <h1 className='heading1'>Individual Courses</h1>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/34.jpg`} alt=""/>
                    <h2 className='heading2'>Advance Diploma In Filmmaking: Script to Screen</h2>
                    <p className="paragraph">
                        1.5 years course <br/>
                        Full Time and Part Time
                    </p>
                </div>

                {/* two image and two text */}
                <div className='flex flex-col gap-6'>
                    <div className='grid grid-cols-1 gap-1 md:gap-4'>
                        <div className='grid grid-cols-2 gap-2 md:gap-6'>
                            <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/35.jpg`} alt=""/>
                            <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/36.jpg`} alt=""/>
                        </div>
                        <div className='grid grid-cols-2 gap-6'>
                            <div className='flex flex-col gap-6'>
                                <h2 className='heading2'>Foundation course in Film Direction</h2>
                                <p className='paragraph'>Course Duration: 6 months</p>
                            </div>
                            <div className='flex flex-col gap-6'>
                                <h2 className='heading2'>Diploma in Film direction</h2>
                                <p className='paragraph'>
                                    Script + Pre Production + Production <br/>
                                    Course Duration: 1 year
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* two image with text */}
                <div className='flex flex-col gap-6'>
                    <div className='grid grid-cols-2 gap-1 md:gap-4'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/37.jpg`} alt=""/>
                        <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/38.jpg`} alt=""/>
                    </div>
                    <h2 className='heading2'>Foundation course in Script Development</h2>
                    <p className='paragraph'>
                        Certificate course <br/>
                        Duration: 15 weeks
                    </p>
                </div>

                {/* two image with text */}
                <div className='flex flex-col gap-6'>
                    <div className='grid grid-cols-2 gap-1 md:gap-4'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/39.jpg`} alt=""/>
                        <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/40.jpg`} alt=""/>
                    </div>
                    <h2 className='heading2'>Diploma in Film Post Production</h2>
                    <p className='paragraph'>
                        Photoshop + Post Production <br/>
                        Course duration: 9 months
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/41.jpg`} alt=""/>
                    <h2 className='heading2'>Diploma in Cinematography</h2>
                    <p className="paragraph">
                        Course Duration: 3 months <br/><br/>
                        At ISA, you will get your hands on a wide variety of equipment and technology used in motion pictures. By
                        working with other disciplines, a Cinematography student at ISA, explores a wide range of filmmaking, gaining
                        skills in: dramatic narrative, filmmaking and the latest in green-screen videography.
                    </p>
                </div>

                {/* two image with row of items */}
                <div className='flex flex-col gap-6'>
                    <div className='grid grid-cols-2 gap-1 md:gap-4'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/42.jpg`} alt=""/>
                        <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/43.jpg`} alt=""/>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center'>
                        <div className='flex flex-col gap-4'>
                            <h2 className='subheading'>Editing Foundation</h2>
                            <p className='paragraph'>
                                Certificate course <br/>
                                Duration: 2 months
                            </p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h2 className='subheading'>Advance Editing Pro</h2>
                            <p className='paragraph'>
                                Certificate course <br/>
                                Duration: 4 months
                            </p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h2 className='subheading'>Editing Premiere</h2>
                            <p className='paragraph'>
                                Certificate course <br/>
                                Duration: 1 months
                            </p>
                        </div>
                    </div>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/44.jpg`} alt=""/>
                    <h2 className='heading2'>Online Courses</h2>
                    <div className='space-y-2'>
                        <h3 className="subheading">4-Week Online Film Directing</h3>
                        <p className="paragraph">This workshop focuses on how a filmmaker writes, prepares for and directs a short film
                            while focusing on the
                            fact that good storytelling is never about the technology but rather the story and the acting.
                            Through a series of online lectures and guided exercises this workshop will cover the tools available to help
                            implement the director’s vision in the unique narrative structure of the short film they write.
                        </p>
                    </div>
                    <div className='space-y-2'>
                        <h3 className="subheading">4-Week Online Cinematography</h3>
                        <p className="paragraph">
                            This workshop is focused on understanding the basic principles of cinematography with a combination of
                            online lectures, analysis of the history of cinematography, camera and basic lighting technology and
                            techniques,
                            including an introduction to editing and color correction.
                        </p>
                    </div>
                    <div className='space-y-2'>
                        <h3 className="subheading">4-Week Online Digital Editing with Adobe Premiere Pro</h3>
                        <p className="paragraph">
                            This Online Digital Editing workshop is designed to serve the needs of students from a wide array of
                            professional, personal and educational backgrounds. For students contemplating a longer-term education
                            in editing or a career in the industry, it is an excellent introduction to the field. Students will edit
                            various
                            projects over the course, including a montage and two shor
                        </p>
                    </div>
                    <div className='space-y-2'>
                        <h3 className="subheading">15-Week Online ScriptWriting Workshop</h3>
                        <p className="paragraph">
                            Our 15-Week Online Screenwriting workshops offer instruction in specific areas of screenwriting, whether it
                            is feature-length film scripts, television or comic book writing. Each of the workshops is structured to
                            deliver
                            intensely focused and challenging lessons to help students improve their skills and develop projects of which
                            they can be proud.
                        </p>
                    </div>
                </div>

                {/* two image with text */}
                <div className='flex flex-col gap-6'>
                    <div className='grid grid-cols-2 gap-1 md:gap-4'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/45.jpg`} alt=""/>
                        <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/46.jpg`} alt=""/>
                    </div>
                    <h2 className='heading2'>Eligibility and Application Requirements</h2>
                    <p className='paragraph'>
                        At ISA, We are looking for creative, motivated, committed individuals with original ideas and the
                        determination
                        to succeed in this most competitive industry. Our students come from all over the country and even abroad,
                        our
                        current students come from New Zealand, Kenya, and different states of India. We don’t seek a prior
                        experience
                        or academic qualification. There is no age bar to apply.
                        However the selections and admissions are strictly on the basis of applications followed by an interview.
                    </p>
                    <h2 className='heading2'>Scholarships and Discounts</h2>
                    <p className='paragraph'>
                        Scholarship decisions are made by The ISA Committee upon the student’s admission to The ISA Film School
                        and based on a combination of financial need, application & artistic merit. The members of the committee
                        include
                        administrators for the departments of enrollment management & financial aid as well as senior
                        administrators
                        and artistic directors from appropriate areas of the school. While we are unable to meet the full need of
                        all who
                        apply, we make every effort to assist as many students as possible to attend the school. Concessions &
                        discounts
                        upto 60% are given to the best applications that we get throughout the year.
                    </p>
                    <h2 className='heading2'>How to apply</h2>
                    <p className='paragraph'>
                        The admissions are strictly on the basis of applications. Every application duly submitted is screened by
                        ISA.
                        We accept applications throughout the year and hold a telephonic interview/ auditions at regular
                        intervals. The
                        first stage is to contact us for an application form, submit it and then we will contact you regarding a
                        date for a
                        telephonic interview/ audition. The applicant thereafter has to deposit registration fees towards the
                        confirmation
                        of their seat, since the batch limit is restricted to limited students only. This registration amount
                        shall be adjusted
                        against the course fee and the applicant shall have to pay the balance amount at the time of admission.
                    </p>
                </div>

                {/* Apply here section */}
                <div className='flex flex-col gap-10'>
                    <h1 className='heading1'>Application Form</h1>
                    <div className='mt-4'>
                        <Link to="/apply/filmmaking" className="border border-black text-lg px-10 py-4 font-bold hover:text-white hover:bg-blue-800">Apply Here</Link>
                    </div>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/47.jpg`} alt=""/>
                    <h2 className='heading2'>Workshop for Schools, Colleges and Institutes</h2>
                    <p className="paragraph">
                        ISA’s special filmmaking programs offers amazing film activities and events for both students and teachers,
                        providing specialist training and access to industry professionals and guest artists. From filmmaking workshops
                        to film festivals for students, we got a range of film related programs customized as per the need of the
                        institute.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/48.jpg`} alt=""/>
                    <h2 className='heading2'>Corporate Filmmaking Workshops</h2>
                    <p className="paragraph">
                        At the heart of our corporate workshops we aim at providing staff members with a rewarding, team building
                        experience. Participants will work closely to develop creative ideas, they will rely on one another to pitch and
                        develop these ideas into story and characters that will then form the basis of a film that the group will create
                        collaboratively. The day will often begin with a challenge that relates to the organisation that they work for.
                        The script writing process then focuses on messaging, clear communication and creative development.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/49.jpg`} alt=""/>
                    <h2 className='heading2'>Events</h2>
                    <p className="paragraph">
                        ISA organizes the best filmmaking and film festival events in India. Get ready to explore filmmaking,
                        festivals and much more. Networking events, workshops, documentaries, fundings, film booths - the
                        events are packed with fun, information and entertainment.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/50.jpg`} alt=""/>
                    <h2 className='heading2'>Accommodation Facilities</h2>
                    <p className="paragraph">
                        The best film school of India, ISA Film School is located in Vaishali, Ghaziabad which is part of the
                        National Capital Region, Delhi - NCR. Vaishali is very well connected to the Delhi Metro. Vaishali has an
                        elevated
                        metro station located on the branch line of the Blue Line of the Delhi Metro. So it is in the very close
                        proximity of
                        Delhi. ISA Film School is located at a walkable distance of less than 2km from the Vaishali metro station.
                    </p>
                    <h2 className='heading2'>Student Housing Options</h2>
                    <p className="paragraph">
                        Outstation students can choose between various accommodation preferences including Paying Guest, Hotels,
                        Service Apartments and Rentals facilities. Expenses for accommodation in NCR starts from Rs 4,000 per month
                        for hostel facilities, PG facilities and onwards depending on the preferred type of accommodation and location.
                        A list of accommodation facilities that has been compiled by us from contacts received by our students. Many
                        of the ISA students are staying in PG and flats. For help and guidance on accommodation, you may contact on
                        this number: <a className='font-bold text-blue-600' href="tel:+918077441855">+91 - 8077441855</a>.
                        <br/>
                        Please note that ISA Film School is not associated in any manner with any accomodation entities and these
                        are just suggestions to help outstation students. ISA doesn’t provide in house hostel facilities. Applicants are
                        advised to conduct due diligence before patronizing these facilities. Please make sure you verify the
                        authenticity
                        of the company/ agent/ broker before you transfer any funds for such a facility.
                    </p>
                    <h2 className='heading2'></h2>
                    <p className="paragraph"></p>
                </div>

                {/* one image and terms */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/filmmaking/51.jpg`} alt=""/>
                    <h2 className='heading2'>Terms, Conditions and Rules</h2>
                    <p className='paragraph terms'>
                        ISA has all the rights to take disciplinary action against any student failing to abide by the rules and
                        regulations of the institute.
                    </p>
                    <p className='paragraph terms'>Diplomas/ Certificates for all courses will be awarded to only those students with 75% and above attendance.</p>
                    <p className='paragraph terms'>Please note that all applicants 18 years of age and below will need to submit a parent consent letter.</p>
                    <p className='paragraph terms'>There shall be no refund of admission or registration fees under any circumstances.</p>
                    <p className='paragraph terms'> We don’t seek prior experience. Freshers are welcome if they have the right will to learn.</p>
                    <p className='paragraph terms'>We need a minimum of 10 students to run a batch without which the batch can be cancelled without prior notice.
                        In the case of such a cancellation, the fees will be refunded.
                    </p>
                    <p className='paragraph terms'>Any kind of misbehavioral activity or act of violence in or near the premises can lead to immediate
                        cancellation of the admission of the student. No fees would be refunded under such circumstances.
                    </p>
                    <p className='paragraph terms'>The institute will not be responsible for any loss or theft of any valuables on premises.</p>
                    <p className='paragraph terms'>All students need to submit their fitness certificate before joining the classes.</p>
                    <p className='paragraph terms'>Management policy changes, course dates and schedule are subject to change as per management discretion and
                        will be communicated accordingly and will be final and binding.
                    </p>
                    <p className='paragraph terms'>Please note that admission to any course at The Indian School of Acting is based on applicant information
                        received during the admission process. If, however, the information submitted by a student is found to be wrong or
                        faulty, the institute reserves the right to cancel that particular admission and any fees paid by that applicant will be
                        non-refundable.
                    </p>
                    <p className='paragraph terms'>The admissions for all courses are subject to seat availability.</p>
                </div>



            </div>
            <SubpageFooter />
        </div>
    )
}
export default FilmmakingPage;