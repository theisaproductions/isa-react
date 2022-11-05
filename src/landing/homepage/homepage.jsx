import React from 'react';
import HomePageSlider from './components/homeSlider';
import MetaTags from 'react-meta-tags';

const HomePage = () => {
    return(
        <div className='h-screen bg-black'>
            <MetaTags>
                <title>Best Acting School In India | The Indian School of Acting</title>
                <meta name="description" content={`The Indian School of Acting is the best acting school in India. We offer a wide range of production services and training programs at our award-winning film school.`}/>
            </MetaTags>
            <HomePageSlider />
        </div>
    )
}

export default HomePage;