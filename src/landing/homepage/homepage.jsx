import React from 'react';
import HomePageSlider from './components/homeSlider';
import {Helmet} from "react-helmet";


const HomePage = () => {
    return(
        <div className='h-screen bg-black'>
            <Helmet>
                <title>Best Acting School In India | The Indian School of Acting</title>
                <meta name="description" content={`The Indian School of Acting is the best acting school in India. We offer a wide range of production services and training programs at our award-winning film school.`}/>
            </Helmet>
            <HomePageSlider />
        </div>
    )
}

export default HomePage;