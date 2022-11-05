import React from 'react';
import MetaTags from 'react-meta-tags';
import SubpageFooter from '../components/subpageFooter';
import TopMediaComponent from '../components/topMediaComponent';
import './common.css';

const ProductionPage = () => {

    return (
        <div className=''>
            <MetaTags>
                <title>ISA Productions</title>
                <meta name="description" content=""/>
            </MetaTags>
            <TopMediaComponent type="video" mediaUrl='production.mp4' />
            <div className='max-w-5xl mx-auto px-4 py-14 flex flex-col gap-14 md:gap-28'>

                {/* just center text */}
                <div className='text-center flex flex-col gap-10'>
                    <h1 className='heading1'>ISA Productions</h1>
                    <h2 className="subheading">“Visionaries. Creatives. Story tellers.”</h2>
                    <p className="paragraph">
                        We collaborate with brands and agencies to create memorable experiences. And we make films.
                    </p>
                </div>

                {/* Overview section */}
                <div className='flex flex-col gap-6'>
                    <h1 className="heading1">Overview</h1>
                    <div className='space-y-6'>
                        <p className='paragraph'>
                            ISA Productions is a collaborative platform for making a wide range of content for any medium through imagination,
                            storytelling and innovative technology. ISA Productions has a long reputation of high production-value and highly
                            creative live action storytelling. ISA fosters an international roster of directors that are dedicated to telling beautiful
                            stories in any genre and create groundbreaking content for the biggest international agencies, brands and
                            creative partners. From Corporate ads, Feature Films, Short Films, Web Series to TV Shows.
                        </p>
                    </div>
                </div>

                {/* Left text */}
                <div className='flex flex-col gap-6'>
                    <h1 className="heading1">Brands</h1>
                    <div className='space-y-6'>
                        <p className='paragraph'>
                            Our approach is to create engaging & entertaining stories around your brand that connects with your consumers
                            on an emotional level - inspiring them to take action. Looking for a highlight reel that gives people reasons to
                            become a fan of your brand? We'll create core values-focused company videos you can use to anchor your website,
                            shake up social media, amaze your email database or tickle your target market wherever you want to boost brand
                            enthusiasm.
                        </p>
                    </div>
                </div>

                {/* Left text */}
                <div className='flex flex-col gap-6'>
                    <h1 className="heading1">Films</h1>
                    <div className='space-y-6'>
                        <p className='paragraph'>
                            From Production Assistant through to Executive Producer, ISA Productions is home to highly experienced world
                            class staff. Over 15 years of experience of creative solutions and full range all-in production services for
                            film and television industries worldwide, ISA Films is an international feature film production, servicing, and
                            distributioncompany.
                        </p>
                    </div>
                </div>

                {/* Left text */}
                <div className='flex flex-col gap-6'>
                    <h1 className="heading1">What do you get, you ask?</h1>
                    <div className='space-y-6'>
                        <p className='paragraph font-semibold'>
                            | A Business Partner <br/> | The Best of Stories <br/> | A Better Reputation <br/> | Sense of Cool
                        </p>
                    </div>
                </div>

                {/* HEading with row of items */}
                <div className='flex flex-col gap-14'>
                    <h1 className="heading1 text-center mb-4">Core Values</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
                        <div className='flex flex-col gap-6'>
                            <div className='flex items-center justify-center'>
                                <img className='w-1/3 md:w-1/2' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/production/icons/1.png`} alt=""/>
                            </div>
                            <h3 className='subheading text-center'>Tell It Like It Is</h3>
                            <p className='paragraph text-center'>
                                We’re in the business of clear, up-front communication. Honesty is key,
                                with our clients and employees.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <div className='flex items-center justify-center'>
                                <img className='w-1/3 md:w-1/2' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/production/icons/2.png`} alt=""/>
                            </div>
                            <h3 className='subheading text-center'>Better is Best</h3>
                            <p className='paragraph text-center'>
                                We innovate aggressively because video is ALWAYS improving. Today’s
                                “better” leads to tomorrow’s “best.” That’s how we keep our clients ahead
                                of the curve.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <div className='flex items-center justify-center'>
                                <img className='w-1/3 md:w-1/2' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/production/icons/3.png`} alt=""/>
                            </div>
                            <h3 className='subheading text-center'>We’re All Ears</h3>
                            <p className='paragraph text-center'>
                                We want to listen well in order to fully learn your needs and values. We
                                make sure we heard right and only then do we get to work.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <div className='flex items-center justify-center'>
                                <img className='w-1/3 md:w-1/2' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/production/icons/4.png`} alt=""/>
                            </div>
                            <h3 className='subheading text-center'>No Surprises</h3>
                            <p className='paragraph text-center'>
                                Expectations are everything. We take care to lay out a complete plan
                                alongside clients, so what you expect is what you get.
                            </p>
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <h3 className='heading2'>People are the Best Investment</h3>
                        <p className='paragraph'>
                            We dedicate our time and resources to empowering our team of professionals.
                            Their individual growth adds up to a higher bar all around.
                        </p>
                    </div>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/production/1.jpg`} alt=""/>
                    <h2 className='heading1'>Services</h2>
                    <p className="quote">
                        Meaningful video storytelling is easy. - Said No One, ever.
                    </p>
                </div>

                {/* one image with two text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/production/2.jpg`} alt=""/>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='space-y-4'>
                            <h2 className='heading2'>Films</h2>
                            <p className="paragraph">
                                Feature Films, Short Films, Line production
                                Crew and Equipments, Locations, Talent Post Production.
                            </p>
                        </div>
                        <div className='space-y-4'>
                            <h2 className='heading2'>Distribution</h2>
                            <p className="paragraph">
                                Media Buying, Internet Distribution, OTT
                                Video Search Engine Optimization(VSEO).
                            </p>
                        </div>
                    </div>
                </div>

                {/* one image with two text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/production/3.jpg`} alt=""/>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='space-y-4'>
                            <h2 className='heading2'>Scripted Video</h2>
                            <p className="paragraph">
                                From script-writing to editing,
                                our team has years of experience
                                creating documentaries,
                                identity videos, advertisements.
                            </p>
                        </div>
                        <div className='space-y-4'>
                            <h2 className='heading2'>TV Production</h2>
                            <p className="paragraph">
                                Commercials, DRTV, Documercials, Infomercials
                                Web Series, Explainers and more.
                            </p>
                        </div>
                    </div>
                </div>

                {/* one image with two text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/production/4.jpg`} alt=""/>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='space-y-4'>
                            <h2 className='heading2'>Brand Videos</h2>
                            <p className="paragraph">
                                Our approach is to create engaging
                                & entertaining stories around your
                                brand that connects with your
                                consumers on an emotional level
                                inspiring them to take action.
                            </p>
                        </div>
                        <div className='space-y-4'>
                            <h2 className='heading2'>Corporate Videos</h2>
                            <p className="paragraph">
                                Corporate videos help your viewers understand
                                exactly why your company is different. They open
                                the doors to your business, giving your customers
                                a better idea of your values, mission, team members,
                                and culture. They also get you more traffic, increase
                                engagement, improve brand awareness and provide
                                a better ROI than other content types.
                            </p>
                        </div>
                    </div>
                </div>

                {/* one image with two text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/production/5.jpg`} alt=""/>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='space-y-4'>
                            <h2 className='heading2'>Animated Videos</h2>
                            <p className="paragraph">
                                Want to simplify a complex or
                                complicated product, service or
                                company story?
                                <br/> Our animation team creates videos
                                that are super effective tools for
                                simplifying and clarifying
                                information fast and to the point.
                            </p>
                        </div>
                        <div className='space-y-4'>
                            <h2 className='heading2'>Explainer Videos</h2>
                            <p className="paragraph">
                                Explainer videos are short, animated videos
                                used to explain services or products in an
                                engaging and easy to understand way. They can
                                include helpful tips, walk viewers through
                                steps or teach them how to solve a difficult
                                problem.
                            </p>
                        </div>
                    </div>
                </div>

                {/* one image with two text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/production/6.jpg`} alt=""/>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='space-y-4'>
                            <h2 className='heading2'>Product Videos</h2>
                            <p className="paragraph">
                                Make your product stand out on the shelf
                                with a product video. <br/>
                                Product videos are 4X more likely to be
                                watched than read about in text. They
                                allow you to communicate the benefits and
                                uses of your product in an entertaining and
                                compelling way. This creates a better
                                lasting impression in the viewers mind,
                                and leaves the product features to be
                                experienced rather than explained.
                                Make product videos while working from anywhere.
                            </p>
                        </div>
                        <div className='space-y-4'>
                            <h2 className='heading2'>Testimonial Videos</h2>
                            <p className="paragraph">
                                Testimonial videos give your potential clients
                                the ability to see actual clients share their real
                                opinions about your company’s products or
                                services. Client testimonials give viewers the
                                opportunity to hear from someone who isn’t
                                connected to the brand which helps build
                                credibility and trust in your business, increasing
                                referrals and strengthening your overall
                                reputation.
                            </p>
                        </div>
                    </div>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/production/7.jpg`} alt=""/>
                    <h2 className='heading2'>Post Productions</h2>
                    <p className="paragraph">
                        Recognised both internationally and domestically for its exceptional post production capabilities and, in particular,
                        the ability to maintain high creative standards, the company also boasts excellent technical standards aiming to
                        serve our customers at a level that is designed to exceed expectations.
                    </p>
                </div>

                {/* just heading */}
                <h2 className='heading1'>Hire from Us</h2>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/production/8.jpg`} alt=""/>
                    <h2 className='heading2'>ISA Film Army: Hire a Crew</h2>
                    <p className="paragraph">
                        Welcome to the largest global network of film, video, TV, live event and post-production professionals. Whether
                        you need a camera operator for one day, a video editor for one month or a full-time producer, we help you find
                        exactly what you need for your production. With film and video content more popular than ever, we help connect
                        businesses with the creative professionals needed to make content to delight your target audience. No matter
                        what goals you want to achieve, we'll help you find the qualified professionals and resources you need to make
                        your ideas become a reality – anywhere around the world.
                        <br/><br/>
                        With film and video content more popular than ever, we help connect businesses with the creative professionals
                        needed to make content to delight your target audiences. No matter what goals you want to achieve, we'll help
                        you find the qualified professionals and resources you need to make your ideas.
                    </p>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/production/9.jpg`} alt=""/>
                    <h2 className='heading2'>Rent Equipments</h2>
                    <p className="paragraph">
                        We offer a large collection of cameras, lenses (anamorphic, spherical, vintage and specialty), filters and diopters,
                        grip equipment (Dollies, Cranes, Remote and Stabilized Heads etc.) lightning equipment (LED systems, Tungsten,
                        Fluorescent, Daylight lamp heads etc.) as well as high quality, well-maintained equipment, outstanding service, and
                        fantastic cinematic tools, that make ISA a powerful, reliable partner for filmmakers. ISA embodies a huge wealth of
                        technical knowledge and industry experience which enables us to offer expert advice and support throughout the
                        entire production process. Also, we continually invest in the latest products from leading industry
                        manufacturers.
                    </p>
                </div>


            </div>
            <SubpageFooter />
        </div>
    )
}

export default ProductionPage