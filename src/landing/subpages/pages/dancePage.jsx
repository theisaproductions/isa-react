import React from 'react';
import MetaTags from 'react-meta-tags';
import SubpageFooter from '../components/subpageFooter';
import TopMediaComponent from '../components/topMediaComponent';
import './common.css';

const DancePage = () => {

    return (
        <div className=''>
            <MetaTags>
                <title>ISA Dance School</title>
                <meta name="description" content=""/>
            </MetaTags>
            <TopMediaComponent type="video" mediaUrl='dance.mp4' />
            <div className='max-w-5xl mx-auto px-4 py-14 flex flex-col gap-14 md:gap-28'>

                {/* just center text */}
                <div className='text-center flex flex-col gap-10'>
                    <h1 className='heading1'>ISA Dance School</h1>
                    <h2 className='subheading'>ISA looks for students who are strong individuals yet possess a sense of group dynamics.</h2>
                    <h3 className='quote'>“Dancing uplifts the soul to spiritual realms.”</h3>
                </div>

                {/* just left text */}
                <div className='flex flex-col gap-10'>
                    <h1 className='heading2'>ISA Dance School</h1>
                    <p className='paragraph font-semibold'>
                        1 and 2 years Diploma Courses
                        <br/> Short Certificate Courses
                    </p>
                    <p className='paragraph'>
                        At ISA Dance School we foster the love of dance
                        while nurturing each student’s confidence,
                        self-esteem, imagination and creativity.
                    </p>
                </div>

                {/* Overview section */}
                <div className='flex flex-col md:flex-row gap-6'>
                    <h1 className="heading1">Overview</h1>
                    <div className='space-y-6'>
                        <p className='paragraph'>
                            At ISA Dance School, you will be encouraged to become a versatile and nuanced performer
                            through the exploration
                            of classical, modern and contemporary techniques. We provide technical dance training with an emphasis on
                            developing positive body awareness and self-expression. Our classes are for all age groups and engaging with a
                            wide range of options across all styles.
                        </p>
                    </div>
                </div>

                {/* Quote */}
                <h2 className='quote text-center'>“It’s the heart afraid of breaking that never learns to dance.”</h2>

                {/* two image and two text */}
                <div className='flex flex-col gap-6'>
                    <div className='grid grid-cols-1 gap-1 md:gap-4'>
                        <div className='grid grid-cols-2 gap-2 md:gap-6'>
                            <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/dance/1.jpg`} alt=""/>
                            <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/dance/2.jpg`} alt=""/>
                        </div>
                        <div className='grid grid-cols-2 gap-2 md:gap-6'>
                            <div className='flex flex-col gap-6'>
                                <h2 className='heading2'>Bollywood Dance</h2>
                                <p className='paragraph'>
                                    Be Bollywood Ready <br/>
                                    Bollywood Freestyle <br/>
                                    For all age groups.
                                </p>
                            </div>
                            <div className='flex flex-col gap-6'>
                                <h2 className='heading2'>Hip Hop</h2>
                                <p className='paragraph'>
                                    Features innovative combinations and stylized hip hop techniques to the latest music.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* two image and two text */}
                <div className='flex flex-col gap-6'>
                    <div className='grid grid-cols-1 gap-1 md:gap-4'>
                        <div className='grid grid-cols-2 gap-2 md:gap-6'>
                            <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/dance/3.jpg`} alt=""/>
                            <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/dance/4.jpg`} alt=""/>
                        </div>
                        <div className='grid grid-cols-2 gap-2 md:gap-6'>
                            <div className='flex flex-col gap-6'>
                                <h2 className='heading2'>Contemporary</h2>
                                <p className='paragraph'>
                                    An amalgamation of several dance genres <br/>
                                    Like classical ballet, modern, lyrical and jazz.
                                </p>
                            </div>
                            <div className='flex flex-col gap-6'>
                                <h2 className='heading2'>Jazz</h2>
                                <p className='paragraph'>
                                    Widely diverse form and can constitute bits and pieces of ballet,
                                    modern, hip-hop, lyrical and Latin styles into an urban funky style.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/dance/5.jpg`} alt=""/>
                    <h2 className='heading2'>ISA Zumba</h2>
                    <p className='paragraph font-semibold'>
                        For all age groups <br/>
                        Packages: Quarterly, Half yearly, Yearly
                    </p>
                    <p className="paragraph">
                        Set to hypnotic Latin dance rhythms, these easy to
                        follow routines, feel more like a celebration rather
                        than a workout. The classes integrate fast and slow
                        rhythms that are designed to tone your body while
                        burning fat. A total body workout combining cardio,
                        muscle conditioning, balance and flexibility.
                    </p>
                </div>

                {/* two image and two text */}
                <div className='flex flex-col gap-6'>
                    <div className='grid grid-cols-1 gap-1 md:gap-4'>
                        <div className='grid grid-cols-2 gap-2 md:gap-6'>
                            <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/dance/6.jpg`} alt=""/>
                            <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/dance/7.jpg`} alt=""/>
                        </div>
                        <div className='grid grid-cols-2 gap-2 md:gap-6'>
                            <div className='flex flex-col gap-6'>
                                <h2 className='heading2'>Ballet</h2>
                                <p className='paragraph'>
                                    Ballet is the base for so many <br/>
                                    other forms of dance which is why it is
                                    so popular form on its own and as a
                                    starting point for so many other disciplines.
                                </p>
                            </div>
                            <div className='flex flex-col gap-6'>
                                <h2 className='heading2'>Belly Dance</h2>
                                <p className='paragraph'>
                                    Belly Dance moves are about isolating different
                                    parts like hips, stomach, shoulders and chest
                                    and learning to move them in a dance-like fashion
                                    with special emphasis on the hips.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* two image and two text */}
                <div className='flex flex-col gap-6'>
                    <div className='grid grid-cols-1 gap-1 md:gap-4'>
                        <div className='grid grid-cols-2 gap-2 md:gap-6'>
                            <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/dance/8.jpg`} alt=""/>
                            <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/dance/9.jpg`} alt=""/>
                        </div>
                        <div className='grid grid-cols-2 gap-2 md:gap-6'>
                            <div className='flex flex-col gap-6'>
                                <h2 className='heading2'>Salsa</h2>
                                <p className='paragraph'>
                                    Salsa is, by far, the most
                                    popular of all Latin Dance styles
                                    and has grown into an international
                                    phenomenon which has taken the
                                    the world by storm.
                                </p>
                            </div>
                            <div className='flex flex-col gap-6'>
                                <h2 className='heading2'>Popping, Locking, Break</h2>
                                <p className='paragraph'>
                                    Popping and locking seem like similar
                                    street dance moves however, they are
                                    two different dance styles which work
                                    brilliantly together. Both dance styles
                                    originated differently and have been
                                    combined since in many street dance
                                    performances.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* just left text */}
                <div className='flex flex-col gap-10'>
                    <h1 className='heading2'>ISA Classical Dances</h1>
                    <p className='paragraph font-semibold'>
                        1 and 2 years Diploma Courses
                        <br/> Short Certificate Courses
                    </p>
                    <p className='paragraph'>
                        At ISA Dance School we foster the love of dance
                        while nurturing each student’s confidence,
                        self-esteem, imagination and creativity.
                    </p>
                    <h3 className='quote'>
                        “Indian Classical dance is a medium that searches
                        for life’ meaning, enhances wellness of individual
                        physically, mentally and spiritually.“
                    </h3>
                </div>

                {/* Overview section */}
                <div className='flex flex-col md:flex-row gap-6'>
                    <h1 className="heading1">Overview</h1>
                    <div className='space-y-6'>
                        <p className='paragraph'>
                            “Different colours of Indian Classical dance forms at one place, we develop a good aesthetic taste & balance in life
                            through our traditional classical art forms. Training given under renowned Gurus and academically trained teachers”
                            It is a perfect mix of yoga, meditation and art. Classical dance is holistic, it heals the body and mind and enhances
                            personal growth and joyousness. ISA School of Dance is the best place to learn classical dance in Delhi-NCR.
                        </p>
                    </div>
                </div>

                {/* image with row of items */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/dance/10.jpg`} alt="classical dance"/>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col gap-4 border-t-8 border-gray-300 pt-4">
                            <h2 className="subheading">KATHAK</h2>
                        </div>
                        <div className="flex flex-col gap-4 border-t-8 border-gray-300 pt-4">
                            <h2 className="subheading">BHARATNATYAM</h2>
                        </div>
                        <div className="flex flex-col gap-4 border-t-8 border-gray-300 pt-4">
                            <h2 className="subheading">ODISSI</h2>
                        </div>
                    </div>
                </div>

                {/* image left text right */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'>
                    <div>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/dance/11.jpg`} alt="girl dancing"/>
                    </div>
                    <div className='flex flex-col gap-6 md:gap-10'>
                        <h3 className="heading2">ISA Dance for Kids</h3>
                        <p className="paragraph font-semibold">
                            Age: 4 - 14 years <br/>
                            Diploma and Certificate Courses
                        </p>
                        <p className='paragraph'>
                            Our mission is to develop each student to reach
                            their full potential in dance whilst looking after the
                            well being of each performer and preserving the
                            innocence of the child. We believe dancing creates
                            self-confidence and life long memories.
                        </p>
                    </div>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/dance/12.jpg`} alt=""/>
                    <h2 className='heading2'>Weddings and Events Choreography</h2>
                    <p className="paragraph">
                        ISA Wedding and Events Choreography will turn the biggest amateurs into confident dancers
                        that turn heads. If you have a mission to impress on your loved one’s wedding day or a special birthday.
                        ISA dance classes are the best option for your big day. We will send you the best choreographers in the city.
                        ISA has the best wedding choreographers from all over the country.
                    </p>
                </div>

                {/* image right text left */}
                 {/* fix - image right text left */}
                {/* this has fix for up down issue for sm devices for*/}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-10'>
                        <h1 className='heading2'>Corporate Workshops</h1>
                        <p className='paragraph font-semibold'>
                            For a team size 10 - 10,000
                        </p>
                        <p className='paragraph'>
                            ISA endeavour to provide the best corporate dance activities, from team building sessions to mass
                            scale events. We give our corporate clients a bespoke experience by giving them the freedom to choose
                            the theme, music and content that matches their business goals and employee’s needs.
                        </p>
                    </div>
                    <div className='order-first md:order-last'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/dance/13.jpg`} alt="girl smiling"/>
                    </div>
                </div>

                {/* image left text right */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'>
                    <div>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/dance/14.jpg`} alt="girl dancing"/>
                    </div>
                    <div className='flex flex-col gap-6 md:gap-10'>
                        <h3 className="heading2">Personal at Home Classes</h3>
                        <p className="paragraph font-semibold">
                            All forms of dance <br/>
                            Trustworthy and certified trainers
                        </p>
                        <p className='paragraph'>
                            Our at home dance classes is your opportunity
                            to learn dance from the comfort of your own
                            house. You'll have access to a vast array of
                            different dance styles and flexible schedules
                            along with our studio expertise and best faculty.
                        </p>
                    </div>
                </div>

                {/* one image with text */}
                <div className='flex flex-col gap-6'>
                    <img className='w-full' src={`${process.env.PUBLIC_URL}/assets/images/subpagepics/dance/15.jpg`} alt=""/>
                    <h2 className='heading2'>For Schools, Colleges and Institutes</h2>
                    <p className="paragraph">
                        We love to connect people of all ages with dance. With young people in mind, we have created some highly
                        enjoyable activities for students. Our program introduces young people to dance through a series of workshops
                        in schools and colleges. Physical, creative movement and repertoire workshops designed to deliver fun, safe,
                        and inspiring dance experiences for all ages and abilities.
                    </p>
                </div>

                



            </div>
            <SubpageFooter />
        </div>
    )
}

export default DancePage;