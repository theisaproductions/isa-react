import React from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import SubpageFooter from '../components/subpageFooter';
import TopMediaComponent from '../components/topMediaComponent';
import './common.css';

const ActingPage = () => {

    return(
        <div className=''>
            <Helmet>
                <title>Indian School of Acting | Acting Classes in Delhi</title>
                <meta name="description" content={`The Indian School of Acting offers an exciting and immersive path to acting. Indian School of Acting provides the best acting classes for enthusiastic dancers in Delhi.`}/>
            </Helmet>
            <TopMediaComponent type="video" mediaUrl='acting.mp4' />
            <div className='max-w-5xl mx-auto px-4 py-14 flex flex-col gap-14 md:gap-28'>
                <h1 className="quote text-center">"We will make you meet the best version of yours"</h1>

                {/* image right text left */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-10'>
                        <h1 className='heading1'>The Indian School of Acting</h1>
                        <h2 className='subheading'>The Best Acting School in India</h2>
                        <p className='paragraph'>
                            An exciting and immersive pathway into
                            your professional career as an actor for
                            film, theatre and television in India and
                            abroad.
                        </p>
                    </div>
                    <div>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/acting/one.jpg`} alt="girl smiling"/>
                    </div>
                </div>

                {/* just text */}
                <div className='flex flex-col md:flex-row gap-10'>
                    <h2 className='heading2'>Overview</h2>
                    <p className='paragraph'>
                        The acting skills taught at The Indian School of Acting, involve unique and dynamic processes of learning that
                        will equip you with a robust and logical pathway to produce the most amazing performances. This acting
                        training is the only kind in India that fuses the psychology of acting with an approach to moving and embodying
                        the character for both stage and screen. The Indian School of acting with its unique training methods, makes the
                        diploma courses in acting one of its kind in India. The courses guide students through the core principles of
                        acting,
                        creative play, movement and voice for stage, films and television. These skills are then integrated throughout
                        the
                        course into dynamic screen from classics to contemporary film scene work. Regarded all over the country,
                        The Indian School of Acting is the best acting School in India. <br/><br/>
                        ISAs unique ’Actor as Filmmaker’ project integrates acting technique with the language of film, allowing each
                        student to develop their unique screen aesthetic as performers and filmmakers.
                        As one of the best acting schools in India, The Indian School of Acting, provides professional acting courses,
                        is determined to produce highly skilled actors and presenters who are well prepared for the demands of the
                        entertainment industry. Which is another reason why, The Indian School of Acting is the best acting school in
                        Delhi - NCR. We prepare students for Bollywood, Hollywood and other film industries across the globe.
                    </p>
                </div>

                {/* just two images */}
                <div className='grid grid-cols-2 gap-1 md:gap-4'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/acting/two.jpg`} alt="boy sleeping"/>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/acting/three.jpg`} alt="boy sleeping"/>
                </div>

                <h1 className="quote text-center">"We think too much and feel too little"</h1>

                <h1 className="heading1 text-center">Courses</h1>

                {/* course with one image */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/acting/four.jpg`} alt=""/>
                    <h2 className='heading2'>Acting Workshop in Screen Acting</h2>
                    <p className='paragraph'>
                        The three months acting workshop provides students with a thorough foundation of acting
                        skills with a specific focus on acting or films, Tv and Webseries.
                    </p>
                    <div>
                        <p className='paragraph font-bold'>Certificate in Screen Acting</p>
                        <p className='paragraph font-bold'>Duration: 3 months</p>
                    </div>
                    <div className='mt-4'>
                        <Link to="/apply/acting" className="applyButton">Apply Here</Link>
                    </div>
                </div>

                {/* course with two image */}
                <div className='flex flex-col gap-6'>
                    <div className='grid grid-cols-2 gap-1 md:gap-4'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/acting/five.jpg`} alt=""/>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/acting/six.jpg`} alt=""/>
                    </div>
                    <h2 className='heading2'>Diploma in Foundational Course In Acting</h2>
                    <p className='paragraph'>
                        The foundation diploma course concentrates on building a foundation in the craft of acting
                        using training techniques rooted in the theater but applicable to screen acting.
                        Students participate in a broad array of core classes that introduce them to finding the actor within while
                        simultaneously training their instrument to do the kind of technical, emotional and physical work necessary
                        for film acting.
                    </p>
                    <div>
                        <p className='paragraph font-bold'>Duration: 6 months</p>
                    </div>
                    <div className='mt-4'>
                        <Link to="/apply/acting" className="applyButton">Apply Here</Link>
                    </div>
                </div>

                {/* course with one image and subheading */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/acting/seven.jpg`} alt=""/>
                    <h2 className='heading2'>Full Fledged Actor: 1 Year Diploma in Intensive Acting</h2>
                    <h4 className='subheading'>“If you can commit one year of your life - you can begin your acting career right here.”</h4>
                    <p className='paragraph'>
                        The 1 year diploma in intensive acting course at ISA extends the core instrument skills of acting and
                        introduces advancements on practical craft, allowing the student to refine their acting skills to meet the
                        obligations of text and the requirements of performance as it applies to both theatre and screen. Through
                        the application of supporting production skills such as developing storylines for film, directing performers
                        And meeting production requirements the students then complete ISA’s unique ‘Actor as Filmmaker’ project
                        integrating acting technique with the language of film, allowing each student to develop their unique screen
                        aesthetic as performers and filmmakers.
                    </p>
                    <div>
                        <p className='paragraph font-bold'>Diploma Course</p>
                        <p className='paragraph font-bold'>Duration: 1 year</p>
                    </div>
                    <div className='mt-4'>
                        <Link to="/apply/acting" className="applyButton">Apply Here</Link>
                    </div>
                </div>

                {/* course with one image and subheading */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/acting/eight.jpg`} alt=""/>
                    <h2 className='heading2'>Full Metal Jacket: 2 years Advance Diploma In Professional Acting</h2>
                    <h4 className='subheading'>“If you can commit one year of your life - you can begin your acting career right here.”</h4>
                    <p className='paragraph'>
                        The two years advance diploma in professional acting course is for those who really want to study acting
                        in depth to become a professional trained actor. With the goal of strengthening the actor’s experience in
                        front of the camera and audience in a professional setting while deepening the actor’s relationship with their
                        physical and vocal work, all students participate in an intensive sequence of classes in: Advanced Acting
                        Technique, Acting for the Camera, Performance, Advance Speech and Dialect, Advanced Voice, Advanced
                        Movement, Character Study, Physical Characterization and Physical Theatre.
                    </p>
                    <div>
                        <p className='paragraph font-bold'>Diploma Course</p>
                        <p className='paragraph font-bold'>Duration: 2 years</p>
                    </div>
                    <div className='mt-4'>
                        <Link to="/apply/acting" className="applyButton">Apply Here</Link>
                    </div>
                </div>

                {/* course with one image */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/acting/nine.jpg`} alt=""/>
                    <h2 className='heading2'>Weekend Courses: The Indian School of Acting | ISA Part Time Courses</h2>
                    <p className='paragraph'>
                        Part time courses that is open to everyone and fits around your other commitments.
                    </p>
                    <div>
                        <p className='paragraph font-bold'>Certificate and diploma courses</p>
                        <p className='paragraph font-bold'>Working Professionals | Students</p>
                    </div>
                    <div className='mt-4'>
                        <Link to="/apply/acting" className="applyButton">Apply Here</Link>
                    </div>
                </div>

                {/* course with two image */}
                <div className='flex flex-col gap-6'>
                    <div className='grid grid-cols-2 gap-1 md:gap-4'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/acting/ten.jpg`} alt=""/>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/acting/eleven.jpg`} alt=""/>
                    </div>
                    <h2 className='heading2'>Weekend Foundation Course in Acting</h2>
                    <p className='paragraph'>
                        The weekend foundation course in acting at The Indian School of Acting provides students with a thorough
                        foundation of acting skills with a specific focus on acting for films. Many students find the weekend acting
                        courses at ISA fit conveniently into their schedule.
                    </p>
                    <div>
                        <p className='paragraph font-bold'>Diploma Course</p>
                        <p className='paragraph font-bold'>Duration: 6 months</p>
                    </div>
                    <div className='mt-4'>
                        <Link to="/apply/acting" className="applyButton">Apply Here</Link>
                    </div>
                </div>

                {/* image right text left */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6'>
                    <div className='flex flex-col gap-10'>
                        <h1 className='heading1'>Weekend Crash Course in Screen Acting</h1>
                        <p className='paragraph'>
                            The three months weekend acting crash course
                            gives students an understanding of the rigorous
                            requirements of the film actor. The workshop is
                            constructed to deliver a great deal of acting
                            training in a short time and is an exceptional
                            opportunity for a total immersion experience in three months.
                        </p>
                        <div>
                            <p className='paragraph font-bold'>Certificate Course</p>
                            <p className='paragraph font-bold'>Duration: 3 months</p>
                        </div>
                        <div className='mt-4'>
                            <Link to="/apply/acting" className="applyButton">Apply Here</Link>
                        </div>
                    </div>
                    <div>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/acting/twelve.jpg`} alt="girl smiling"/>
                    </div>
                </div>

                {/* course with one image */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/acting/thirteen.jpg`} alt=""/>
                    <h2 className='heading2'>1 year Part Time: Weekends Professional Acting Course</h2>
                    <p className='paragraph'>
                        The Indian School of Acting has been training part timers in the most flexible and customized manner which
                        helped ISA turning into one of the best weekend acting classes in India. <br />
                        In this part time program students gain tools and techniques to better engage their imagination, to analyze
                        text deeply and accurately and to create rich, specific characters while also preparing for the creative
                        challenges of Bollywood and industries in Film, Television and Theater.
                    </p>
                    <div>
                        <p className='paragraph font-bold'>Advance Diploma course</p>
                        <p className='paragraph font-bold'>Duration: 1 year</p>
                    </div>
                    <div className='mt-4'>
                        <Link to="/apply/acting" className="applyButton">Apply Here</Link>
                    </div>
                </div>

                {/* course with one image and floating tabs */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/acting/fourteen.jpg`} alt=""/>
                    <h2 className='heading2'>Courses Inclusions</h2>
                    <p className='paragraph'>
                        Our job is to make you a complete actor. Everybody has different sorts of requirements so we train in a
                        customized fashion working on aspects that you need to learn the best. However, certain things remain common for all.
                    </p>
                    <div className='flex flex-wrap gap-2 md:gap-6 justify-center items-center'>
                        <div className="tabs">Acting for Cinema </div>
                        <div className="tabs">Body Movement</div>
                        <div className="tabs">Voice and Speech</div>
                        <div className="tabs">Aspects of Theatre</div>
                        <div className="tabs">Film Appreciation</div>
                        <div className="tabs">Different Types of Methods</div>
                        <div className="tabs">Natyashastra and Rasa Theory</div>
                        <div className="tabs">Character Development</div>
                        <div className="tabs">Special Guest Lectures</div>
                        <div className="tabs">Auditioning</div>
                        <div className="tabs">Dance Session</div>
                        <div className="tabs">Music Sessions</div>
                        <div className="tabs">Yoga Sessions</div>
                        <div className="tabs">Action Session(including MMA)</div>
                        <div className="tabs">Character Design</div>
                        <div className="tabs">Showreel/ Profiles</div>
                        <div className="tabs">Monologues and Scene work</div>
                        <div className="tabs">Improvisations</div>
                        <div className="tabs">Dramaturgy</div>
                        <div className="tabs">Emotional Exercises</div>
                        <div className="tabs">Camera Facing</div>
                        <div className="tabs">Placements and Casting Support</div>
                        <div className="tabs">Approaching a Role</div>
                        <div className="tabs">Personality Development</div>
                        <div className="tabs">Diction and Language</div>
                        <div className="tabs">Storymaking</div>
                        <div className="tabs">Sense Memory</div>
                        <div className="tabs">Filmmaking</div>
                        <div className="tabs">Imagination Exercises</div>
                    </div>
                </div>
                
                {/* just heading */}
                <h1 className='heading1 text-center'>The Indian School of Acting<br/>Online Courses</h1>

                {/* course with one image */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/acting/fifteen.jpg`} alt=""/>
                    <h2 className='heading2'>Foundation of Acting: 12 week Programme in Acting</h2>
                    <p className='paragraph'>
                        Structured as per our offline classes, this would be a 3 months course with 2 hours of daily class practice
                        covering all the aspects of acting from basics to advance. Also giving you a chance to be a part of
                        placement and the casting house of The Indian School of Acting. This is an online diploma course.
                    </p>
                    <div className='mt-4'>
                        <Link to="/apply/acting" className="applyButton">Apply Here</Link>
                    </div>
                </div>

                {/* course with one image */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/acting/sixteen.jpg`} alt=""/>
                    <h2 className='heading2'>ISA Acting Guidebook: A must have guide to be an Actor</h2>
                    <p className='paragraph'>
                        100 Monologues, cracking the industry, plays, stories and more.
                        The ISA Acting Guidebook is the ultimate collection of the best plays from around the world, more than
                        monologues, stories, acting books and contacts of numerous casting directors and filmmakers.
                        Finally a book that has it all, this guidebook helps you in understanding how to build a network and make
                        your place in the competitive showbiz world. <br />
                        The book also helps in guiding you on how to build a network and get a role in the competitive industry.
                    </p>
                    <div className='mt-4'>
                        <Link to="/apply/acting" className="applyButton">Apply Here</Link>
                    </div>
                </div>

                {/* course with one image */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/acting/seventeen.jpg`} alt=""/>
                    <h2 className='heading2'>Private Classes: Live sessions by our Experts</h2>
                    <p className='paragraph'>
                        If you are looking for personal tuitions and interactive live online classes by The Indian School Acting,
                        we can arrange the best tutors and acting coaches. Learn acting from ISA and be a part of The Indian
                        School of Acting from anywhere in the world.
                    </p>
                    <div className='mt-4'>
                        <Link to="/apply/acting" className="applyButton">Apply Here</Link>
                    </div>
                </div>

                {/* image right text left */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6'>
                    <div className='flex flex-col gap-10'>
                        <h1 className='heading2'>Acting classes for kids</h1>
                        <p className='paragraph'>
                            Whether your kid is destined for a
                            star on the Bollywood walk of fame
                            or simply wants to let loose
                            and have fun, acting classes at
                            ISA are a great way to build self
                            confidence and teach them how to express themselves. <br/><br/>
                            The Indian School of Acting is pleased to offer film acting and theatre courses (ages 4 -13) in one,
                            three, six
                            and twelve months courses during the school year. We have designed our kids programs with the same high
                            standards that we apply to our adults programs. In the acting classes for kids in The Indian School of
                            Acting
                            the students learn on professional equipment from instructors with advanced degrees and industry
                            experience.
                            The Indian School of Acting is the best acting school for kids in India. The Indian School of Acting has
                            the best
                            acting classes for kids in Delhi - NCR.
                        </p>
                        <div>
                            <p className='paragraph font-bold'>Certificate and Diploma</p>
                            <p className='paragraph font-bold'>Duration: 3 months, 6 months, 1 year</p>
                        </div>
                        <div className='mt-4'>
                            <Link to="/?page=19" className="applyButton">Contact Us</Link>
                        </div>
                    </div>
                    <div>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/acting/eighteen.jpg`} alt="girl smiling"/>
                    </div>
                </div>

                {/* course with one image */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/acting/nineteen.jpg`} alt=""/>
                    <h2 className='heading2'>Summer Camp | Winter Workshops</h2>
                    <p className='paragraph'>
                        Tailored programs according to the needs to make the best use of Summers and Winters.
                    </p>
                    <div className='mt-4'>
                        <Link to="/?page=19" className="applyButton">Contact Us</Link>
                    </div>
                </div>

                {/* course with one image */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/acting/twentyfour.jpg`} alt=""/>
                    <h2 className='heading2'>Workshop for Schools, Colleges and Institutes</h2>
                    <p className='paragraph'>
                        ISA’s special programs offers outstanding performing arts educational activities for both students and
                        teachers,
                        providing specialist training and access to industry professionals and guest artists. Reflective of ISA’s
                        worldrenowned approach to education and training, the programs are carefully designed to provide dynamic and
                        engaging skills development to enhance the early childhood, primary and secondary syllabus.
                    </p>
                    <div className='mt-4'>
                        <Link to="/?page=19" className="applyButton">Contact Us</Link>
                    </div>
                </div>

                {/* course with two image */}
                <div className='flex flex-col gap-6'>
                    <div className='grid grid-cols-2 gap-1 md:gap-4'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/acting/twentyfive.jpg`} alt=""/>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/acting/twentysix.jpg`} alt=""/>
                    </div>
                    <h2 className='heading2'>For Corporates</h2>
                    <p className='paragraph'>
                        We help corporates with drama-based learning initiatives that build a more sensitive, capable and involved
                        workforce. Our partners are some of the most experienced drama based corporate trainers in the country –
                        a community of actors, psychotherapists and learning & development professionals specialized in delivering
                        high quality learning and development programmes using exciting and innovative methods.
                    </p>
                    <div className='mt-4'>
                        <Link to="/?page=19" className="applyButton">Contact Us</Link>
                    </div>
                </div>

                {/* one image and text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/acting/twenty.jpg`} alt=""/>
                    <h2 className='heading2'>ISA Casting Support: Placements in Acting</h2>
                    <p className='paragraph'>
                        Our mission is to train actors so that they can go to work. We do this by immersing you in a
                        professional environment from Day 1. We give you the practical tools, skills, knowledge and
                        experience. To help you get the job and once you have the job, to nail it, so you build a
                        reputation that people trust. The Indian School of Acting has one of the strongest placement
                        support systems in India. However, as any smart person would be aware, there cannot be a
                        placement guarantee. During the courses and even after it, ISA sends students to various auditions,
                        be it for Films/ TV or Web Series. Many of our students crack the auditions in their early attempts
                        and get the job. ISA is not limited to polishing the skills of the students but also works a lot on
                        awareness of the students and help them build a very strong network in the industry of Films
                        and TV so that it is easier for them to get roles in films and other media.
                    </p>
                </div>

                {/* two image and text */}
                <div className='flex flex-col gap-6'>
                    <div className='grid grid-cols-2 gap-1 md:gap-4'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/acting/twentyone.jpg`} alt=""/>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/acting/twentytwo.jpg`} alt=""/>
                    </div>
                    <h2 className='heading2'>Eligibility</h2>
                    <p className='paragraph'>
                        At ISA, we are looking for creative, motivated, committed individuals with original ideas and the
                        determination
                        to succeed in this most competitive industry. Our students come from all over the country and even abroad. Our
                        current students come from New Zealand, Kenya and different states of India. We don’t seek a prior
                        experience or academic qualification. There is no age bar to apply.
                        However the selections and admissions are strictly on the basis of applications followed by an interview.
                    </p>
                </div>

                {/* one image and text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/acting/twentythree.jpg`} alt=""/>
                    <h2 className='heading2'>How to Apply</h2>
                    <p className='paragraph'>
                        The admissions are strictly on the basis of applications. Every application duly submitted is screened by ISA.
                        We accept applications throughout the year and hold a telephonic interview/ auditions at regular intervals.
                        The
                        first stage is to contact us for an application form, submit it and then we will contact you regarding a date
                        for a
                        telephonic interview/ audition. The applicant thereafter has to deposit registration fees towards the
                        confirmation
                        of their seat, since the batch limit is restricted to limited students only. This registration amount shall be
                        adjusted
                        against the course fee and the applicant shall have to pay the balance amount at the time of admission.
                    </p>
                </div>

                {/* one image and text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/acting/twentyseven.jpg`} alt=""/>
                    <h2 className='heading2'>Accommodation Facilities</h2>
                    <p className='paragraph'>
                        The best acting school of India, The Indian School of Acting is located in Vaishali, Ghaziabad which is part
                        of the
                        National Capital Region, Delhi - NCR. Vaishali is very well connected to the Delhi Metro. Vaishali has an
                        elevated
                        metro station located on the branch line of the Blue Line of the Delhi Metro. So it is in the very close
                        proximity of Delhi.
                        The Indian School of Acting is located at a walkable distance of less than 2km from the Vaishali metro
                        station.
                    </p>
                </div>

                {/* subheading and text */}
                <div className='flex flex-col gap-6'>
                    <h3 className='subheading'>Student Housing Options</h3>
                    <p className='paragraph'>
                        Outstation students can choose between various accommodation preferences including Paying Guest, Hotels,
                        Service Apartments and Rentals facilities. Expenses for accommodation in NCR starts from Rs 4,000 per month
                        for hostel facilities, PG facilities and onwards depending on the preferred type of accommodation and
                        location.
                        A list of accommodation facilities that has been compiled by us from contacts received by our students. Many
                        of the ISA students are staying in PG and flats. For help and guidance on accommodation, you may contact on
                        this number: <a className='font-bold text-blue-700' href="tel:+918077441855">+91 - 8077441855</a>.
                        <br/><br/>
                        Please note that The Indian School of Acting is not associated in any manner with any accomodation entities
                        and these are just suggestions to help outstation students. ISA doesn’t provide in house hostel facilities.
                        Applicants
                        are advised to conduct due diligence before patronizing these facilities. Please make sure you verify the
                        authenticity
                        of the company/ agent/ broker before you transfer any funds for such a facility.
                    </p>
                </div>

                {/* one image and terms */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/acting/twentyeight.jpg`} alt=""/>
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

                {/* Apply here section */}
                <div className='flex flex-col gap-10'>
                    <h1 className='heading1'>Application Form</h1>
                    <div className='mt-4'>
                        <Link to="/apply/acting" className="border border-black text-lg px-10 py-4 font-bold hover:text-white hover:bg-blue-800">Apply Here</Link>
                    </div>
                </div>


            </div>
            <SubpageFooter />
        </div>
    )
}

export default ActingPage;