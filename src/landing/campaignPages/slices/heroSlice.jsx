import { useEffect, useState } from "react";
import ContactFormComponent from "../components/contactFormComponent";

const HeroSlice = ({slice}) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if(slice?.primary?.theme === 'Dark') {
            setDarkMode(true);
        }
    })
    return(
        <section className='bg-cover bg-black bg-center bg-no-repeat md:px-16 md:py-16' style={{backgroundImage: `url("${slice?.primary?.background?.url}")`}}>
            <div className={`h-full ${darkMode ? 'bg-white/40 backdrop-blur-lg' : 'bg-white/20 backdrop-blur'} px-6 md:px-10 py-10 flex flex-col md:flex-row gap-6`}>
                <div className='md:w-1/2 space-y-6'>
                    {
                        darkMode ? 
                        <img className='h-16 md:h-28' src={`${process.env.PUBLIC_URL}/assets/images/logo/black.png`} alt="Logo"/>
                        :
                        <img className='h-16 md:h-28' src={`${process.env.PUBLIC_URL}/assets/images/logo/white.png`} alt="Logo"/>
                    }
                    <h1 className={`${darkMode ? 'text-black':'text-white'} text-6xl`}>{slice?.primary?.title}</h1>
                    <p className={`${darkMode ? 'text-black':'text-white'} text-xl font-light`}>{slice?.primary?.sub_heading}</p>
                </div>
                <div className='md:w-1/2'>
                    <ContactFormComponent darkMode={darkMode} />
                </div>
            </div>
        </section>
    )
}

export default HeroSlice;