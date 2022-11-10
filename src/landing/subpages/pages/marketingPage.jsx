import React from 'react';
import {Helmet} from "react-helmet";
import SubpageFooter from '../components/subpageFooter';
import TopMediaComponent from '../components/topMediaComponent';
import './common.css';

const MarketingPage = () => {

    return (
        <div className=''>
            <Helmet>
                <title>ISA School of Marketing</title>
                <meta name="description" content=""/>
            </Helmet>
            <TopMediaComponent type="video" mediaUrl='marketing.mp4' />
            <div className='max-w-5xl mx-auto px-4 py-14 flex flex-col gap-14 md:gap-28'>

                {/* just center text */}
                <div className='text-center flex flex-col gap-10'>
                    <h1 className='heading1'>ISA School of Marketing</h1>
                    <p className='paragraph font-bold'>Digital Marketing <br/> Branding <br/> Web Designing</p>
                    <h2 className="quote">“The best marketing doesn’t feel like marketing.”</h2>
                    <p className="paragraph">
                        ISA Marketing courses gives you comprehensive
                        knowledge on most important digital marketing domains.
                    </p>
                </div>

                {/* Overview section */}
                <div className='flex flex-col md:flex-row gap-6'>
                    <h1 className="heading1">Overview</h1>
                    <div className='space-y-6'>
                        <p className='paragraph'>
                            Here at ISA School of Digital Marketing, we make sure that each and every student understands
                            the concept with practical knowledge and insights which helps in making a subject more engrossing.
                            Digital marketing is making a strong impact on both advertising and marketing. After successful
                            completion of the digital marketing program, besides getting certificates, you not only become
                            capable to track & monitor digital marketing performance but will be able to plan, conceptualize and
                            implement marketing strategies, ideas and campaigns yourself. Our digital marketing courses
                            are for innovators and entrepreneurs, career changers, upskillers, digital specialist-seekers and anyone
                            with a vision and a message.
                        </p>
                    </div>
                </div>

                {/* just quote */}
                <h3 className='quote'>"Don’t be afraid to get creative and experiment with your marketing."</h3>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/marketing/1.jpg`} alt=""/>
                    <h2 className='heading2'>Digital Marketing Training Program</h2>
                    <p className="paragraph font-bold">Classroom Training - 3 Months <br/> Online Classes - 4 or 7 months</p>
                    <p className="paragraph">
                        You will learn various techniques of digital marketing through a series of various modules. The number of
                        modules in this digital marketing course for each domain will vary based on the importance and effectiveness
                        of each domain. Each module will typically be delivered in one week. For you to learn all the modules of
                        digital marketing in the duration promised, we will conduct multiple online classes every week. We believe
                        that taking up an digital marketing course is the best way to get trained in the digital marketing space.
                    </p>
                </div>

                {/* just heading */}
                <h1 className='heading1'>Modules</h1>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/marketing/2.jpg`} alt=""/>
                    <h2 className='heading2'>Fundamentals of Marketing</h2>
                    <p className="paragraph">
                        This course will give you an overview of the fundamentals of marketing including Search
                        Engine Optimization, Digital Analytics, Google Analytics.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/marketing/3.jpg`} alt=""/>
                    <h2 className='heading2'>Demystifying Digital Channels</h2>
                    <p className="paragraph">
                        This course will make you an expert on digital channels and how to target the right audience. You will learn about
                        Pay Per Click, Google Ads, social media, Facebook marketing, YouTube marketing, Twitter, email and mobile
                        marketing, programmatic buying.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/marketing/4.jpg`} alt=""/>
                    <h2 className='heading2'>Conversion and Strategy</h2>
                    <p className="paragraph">
                        This digital marketing course on conversion and strategy covers the basics of website
                        Conversion Rate Optimization, marketing automation tools and digital marketing strategies.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/marketing/5.jpg`} alt=""/>
                    <h2 className='heading2'>Advanced Web Analytics</h2>
                    <p className="paragraph">
                        This Advanced Web Analytics certification training course helps you master the critical elements of social media
                        web, mobile, and content analytics. Learn how to optimize your organization’s ability to make highly informed
                        business decisions based on data analytics.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/marketing/6.jpg`} alt=""/>
                    <h2 className='heading2'>Advanced Search Engine Optimization (SEO)</h2>
                    <p className="paragraph">
                        The Advanced Search Engine Optimization (SEO) course is designed to transform you into an industry-ready
                        SEO professional from day one. You’ll master the many facets of SEO including the process of organically
                        driving traffic to your websites with keyword management and research, on-page and off-page optimization,
                        link building, URL building, SEO analytics and more.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/marketing/7.jpg`} alt=""/>
                    <h2 className='heading2'>Advanced Pay Per Click (PPC) Certification Program</h2>
                    <p className="paragraph">
                        The Advanced PPC Course is designed to transform you into an industry-ready paid marketing professional.
                        Follow our clear, structured learning path recommended by industry experts and fast-track your career. You will
                        learn to master the nuances of Pay Per Click, display advertising, conversion optimization and web analytics.
                        You’ll acquire extensive project experience to prepare you for managing paid marketing initiatives.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/marketing/8.jpg`} alt=""/>
                    <h2 className='heading2'>Advanced Social Media</h2>
                    <p className="paragraph">
                        The Advanced Social Media Course will transform you into an industry-ready social media marketer. It combines
                        the disciplines of advanced social media, advanced content marketing and advanced web analytics course to help
                        you elevate your brand and execute compelling social campaigns. Fast-track your marketing career with this
                        complete, structured advanced social media course.
                    </p>
                </div>

                {/* just heading */}
                <h1 className='heading1'>Short Courses</h1>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/marketing/9.jpg`} alt=""/>
                    <h2 className='heading2'>Social Media Marketing Certification</h2>
                    <p className='paragraph font-semibold'>Flexible Online Learning (30 Hrs)</p>
                    <p className="paragraph">
                        This dynamic specialized online social marketing course covering Facebook, LinkedIn, Snapchat, YouTube and
                        Instagram gives you the skills, know-how, strategy and techniques to be that change. Here is power. The power to
                        influence. To speak to billions of people.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/marketing/10.jpg`} alt=""/>
                    <h2 className='heading2'>Search Marketing Professional: Certificate Course</h2>
                    <p className='paragraph font-semibold'>Flexible Online Learning (30 Hrs)</p>
                    <p className="paragraph">
                        This dynamic specialized online search marketing course covering SEO, paid search (PPC), Google Adwords,
                        Microsoft Ads (Bing Ads) and digital display advertising gives you the skills, know-how, strategy and
                        techniques to be that change. Here is power. The power to influence. To speak to billions of people.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/marketing/11.jpg`} alt=""/>
                    <h2 className='heading2'>Digital Marketing Specialist: Certification Course</h2>
                    <p className='paragraph font-semibold'>Flexible Online Learning (30 Hrs)</p>
                    <p className="paragraph">
                        Our specialist course in Digital Strategy & Planning gets you certified in digital marketing and immerses you
                        in digital communications, analytics, marketing automation, budget & strategy formulation and more. Here is
                        the power of the Big Picture. The power to think, to lead, to create.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/marketing/12.jpg`} alt=""/>
                    <h2 className='heading2'>Digital and Social Selling Specialist: Certification Courses</h2>
                    <p className='paragraph font-semibold'>Flexible Online Learning (30 Hrs)</p>
                    <p className="paragraph">
                        Specialization is for when you don’t just want to play the digital marketing game anymore, you want to
                        drive it. To change it. This dynamic online social selling course gives you the social selling tools and
                        techniques that are now an essential part of any successful sales strategy and are revolutionizing sales
                        and prospecting Become a Member. Connect to the industry and white-hot opportunities. Here is the power
                        to speak your brand’s truth across platforms and continents. To lead. To influence. To convert.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/marketing/13.jpg`} alt=""/>
                    <h2 className='heading2'>For Corporates</h2>
                    <p className="paragraph">
                        We manoeuvre enterprise training and workshops in a manner that makes it possible for trainees to jump-start
                        their projects without further support. Our style of company training focuses on enhancing the individual
                        capability of each team member. That’s done with the sole purpose of equipping them with the confidence and
                        competence to execute tasks without requiring any additional support. Basically, our methodology is aimed at
                        setting your team members free.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/marketing/14.jpg`} alt=""/>
                    <h2 className='heading2'>For Colleges, Schools and Institutes</h2>
                    <p className="paragraph">
                        Curriculum for different educational organizations developed by Digital Marketing Thought Leaders with over 15
                        years of Digital Marketing Industry experience. The classes are customized to the requirements of students and
                        management and includes experiential workshops, live & hands-on exercises and learning delivered through
                        relevant global & local case studies.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/marketing/15.jpg`} alt=""/>
                    <h2 className='heading2'>Branding, Marketing, Designing: Hire our Professionals and work with us</h2>
                    <p className="paragraph">
                        We help in realizing brand aspirations through our in-depth research & analytics and translate them into
                        irreverent creative ideas. We always remember that there’s more to marketing communication than top-funnel awareness
                        building through BTL, ATL, Outdoor or Digital Media Publishing. If you are looking for digital solutions or branding,
                        your search ends here.
                    </p>
                </div>

                {/* just heading */}
                <h2 className='heading1'>Web Designing</h2>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/marketing/16.jpg`} alt=""/>
                    <h2 className='heading2'>Branding, Marketing, Designing: Hire our Professionals and work with us</h2>
                    <p className="paragraph">
                        Whether you want to design and create a website for the first time or you’ve been designing websites for years,
                        our expert-taught classes have something for you. Learn to use WordPress or jQuery, design with CSS or write HTML,
                        and even publish content. <br/> <br/>
                        After successful completion of the Web Designing module offered by ISA, students will become able to design the
                        desired Front-End of a website in an appropriate manner. This training module basically focuses on imparting students
                        concepts on advanced topics such as Html5, jQuery, JavaScript and responsive web design in order to meet the
                        current demands of the IT world.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/marketing/17.jpg`} alt=""/>
                    <h2 className='heading2'>Get Your Website Made by us</h2>
                    <p className="paragraph">
                        ISA is providing the specialized services to various industries across several physiographiques including
                        United Kingdom, Australia and India. We build the foundation for the intellective business by working with the
                        upcoming technologies in creating a beautiful customized website for clients to provide them with personalized
                        services and enhanced collaboration.
                    </p>
                </div>



            </div>
            <SubpageFooter />
        </div>
    )
}

export default MarketingPage;