import React from 'react'

const BlogPageTopSection = () => {
    return (
        <div className='bg-black pt-36 pb-10 px-5vw'>
            <div className='max-w-6xl mx-auto space-y-4'>
                <h2 className='text-5xl font-black text-white'>The Indian School of Acting</h2>
                <div className="flex items-end gap-4 invert">
                    <a tabIndex={-1} target="_blank" href="https://www.facebook.com/theindianschoolofacting/" className='duration-200 hover:opacity-80 '>
                        <img className='h-6' src={`${process.env.PUBLIC_URL}/assets/images/utility/icons/social/facebook.png`} alt="facebook"/>
                    </a>
                    <a tabIndex={-1} target="_blank" href="https://www.instagram.com/theindianschoolofacting/" className='duration-200 hover:opacity-80'>
                        <img className='h-6' src={`${process.env.PUBLIC_URL}/assets/images/utility/icons/social/instagram.png`} alt="instagram"/>
                    </a>
                    <a tabIndex={-1} target="_blank" href="https://twitter.com/ISAFilmschool" className='duration-200 hover:opacity-80'>
                        <img className='h-6' src={`${process.env.PUBLIC_URL}/assets/images/utility/icons/social/twitter.png`} alt="twitter"/>
                    </a>
                    <a tabIndex={-1} target="_blank" href="https://www.linkedin.com/company/the-indian-school-of-acting/" className='duration-200 hover:opacity-80'>
                        <img className='h-6' src={`${process.env.PUBLIC_URL}/assets/images/utility/icons/social/linkedin.png`} alt="linkedin"/>
                    </a>
                    <a tabIndex={-1} target="_blank" href="https://www.youtube.com/channel/UCXRE4_lhZmwD_5xPLoTiiYg" className='duration-200 hover:opacity-80'>
                        <img className='h-6' src={`${process.env.PUBLIC_URL}/assets/images/utility/icons/social/youtube.png`} alt="youtube"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BlogPageTopSection;