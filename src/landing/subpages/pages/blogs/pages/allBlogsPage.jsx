import React, { useEffect, useState } from 'react';
import { useAllPrismicDocumentsByType } from '@prismicio/react'
import { Link } from 'react-router-dom';
import BlogSubNavbar from './components/subNavbar';
import useDocumentTitle from '../../../../components/documentTitle';

const AllBlogsPage = () => {

    const ellipsisStyle = {
        maxWidth: '100%',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    };

    const type = 'blog';
    let [primaryBlogItems, setPrimaryBlofItems] = useState([]);
    let [secondaryBlogItems, setSecondaryBlogItems] = useState([]);
    let [restBlogItems, setRestBlogItems] = useState([]);

    const [documents, { state }] = useAllPrismicDocumentsByType(type);

    // set page title for seo
    useDocumentTitle('ISA Blogs');

    useEffect(() => {
        if(!documents) return;
        let primary = [];
        let secondary = [];
        let rest = [];
        documents.map((item, index) => {
            if(index < 1) {
                primary.push(item);
            } else if (index >= 1 && index <= 3) {
                secondary.push(item);
            } else {
                rest.push(item);
            }
        })
        setPrimaryBlofItems(primary);
        setSecondaryBlogItems(secondary);
        setRestBlogItems(rest);

    }, [documents])

    return(
        <div>
            <div className='bg-black pt-36 pb-10 px-5vw'>
                <div className='max-w-6xl mx-auto space-y-4'>
                    <h1 className='text-5xl font-black text-white'>The Indian School of Acting</h1>
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
            <div className='px-5vw'>
                <div className='pb-14 max-w-6xl mx-auto'>
                    {state === 'loading' ?
                        <div className='space-y-10 py-10'>
                            <div className='space-y-4'>
                                <div className='animate-pulse bg-gray-300 h-10 rounded w-1/2'></div>
                                <div className='animate-pulse bg-gray-300 h-6 rounded w-2/3'></div>
                                <div className='animate-pulse bg-gray-300 h-44 rounded w-full'></div>
                            </div>
                            <div className='space-y-4'>
                                <div className='animate-pulse bg-gray-300 h-10 rounded w-1/2'></div>
                                <div className='animate-pulse bg-gray-300 h-6 rounded w-2/3'></div>
                                <div className='animate-pulse bg-gray-300 h-44 rounded w-full'></div>
                            </div>
                        </div>
                    : 
                        documents &&
                        <div className='space-y-14'>
                            {/* sub-navbar */}
                            <BlogSubNavbar />

                            <h1 className='text-6xl font-black mt-6'>Blogs</h1>

                            {/* primary blogs */}
                            {
                                primaryBlogItems.map((item,index) => {
                                    return (
                                        <Link key={index} to={`/blogs/${item.uid}`} className='grid grid-cols-1 md:grid-cols-2 gap-6 cursor-pointer'>
                                            <div className='relative rounded-md overflow-hidden' style={{paddingTop: '56%'}}>
                                                <div className='absolute top-0 left-0 h-full w-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url("${item.data['main-image'].url}")`}}></div>
                                            </div>
                                            <div className='space-y-2'>
                                                <p className='text-gray-600 text-xs pb-2'>{item.data.date}</p>
                                                <h2 className='text-5xl font-semibold pb-6'>{item.data['blog-title'][0].text}</h2>
                                                <p className='text-base text-gray-500 text-clip'>{item.data['short-description'][0].text}</p>
                                                <p className={`flex gap-4 items-center hover:gap-12 duration-500 mt-4 drop-shadow-dark2 text-blue-600 font-semibold`}>
                                                    <span className='text-sm'>Continue reading</span>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17 11C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13V11ZM3 13C2.44771 13 2 12.5523 2 12C2 11.4477 2.44771 11 3 11V13ZM17 13H3V11H17V13Z" fill="currentColor"/>
                                                        <path d="M21.7152 11.7966L16.265 7.90356C15.7355 7.52535 15 7.90385 15 8.55455V15.4454C15 16.0961 15.7355 16.4746 16.265 16.0964L21.7152 12.2034C21.8548 12.1037 21.8548 11.8963 21.7152 11.7966Z" fill="currentColor"/>
                                                    </svg>
                                                </p>
                                            </div>
                                        </Link>
                                    )
                                })
                            }

                            {/* secondary blogs */}
                            {secondaryBlogItems.length > 0 && 
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-6'>
                                    {
                                        secondaryBlogItems.map((item,index) => {
                                            return (
                                                <Link key={index} to={`/blogs/${item.uid}`} className='grid grid-cols-1 gap-6 cursor-pointer'>
                                                    <div className='relative rounded-md overflow-hidden' style={{paddingTop: '56%'}}>
                                                        <div className='absolute top-0 left-0 h-full w-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url("${item.data['main-image'].url}")`}}></div>
                                                    </div>
                                                    <div className='space-y-2'>
                                                        <p className='text-gray-600 text-xs pb-2'>{item.data.date}</p>
                                                        <h2 className='text-3xl font-semibold pb-2'>{item.data['blog-title'][0].text}</h2>
                                                        <p className='text-base text-gray-500 text-elipsis' style={ellipsisStyle}>{item.data['short-description'][0].text}</p>
                                                        <p className={`flex gap-4 items-center hover:gap-12 duration-500 mt-4 drop-shadow-dark2 text-blue-600 font-semibold`}>
                                                            <span className='text-sm'>Continue reading</span>
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M17 11C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13V11ZM3 13C2.44771 13 2 12.5523 2 12C2 11.4477 2.44771 11 3 11V13ZM17 13H3V11H17V13Z" fill="currentColor"/>
                                                                <path d="M21.7152 11.7966L16.265 7.90356C15.7355 7.52535 15 7.90385 15 8.55455V15.4454C15 16.0961 15.7355 16.4746 16.265 16.0964L21.7152 12.2034C21.8548 12.1037 21.8548 11.8963 21.7152 11.7966Z" fill="currentColor"/>
                                                            </svg>
                                                        </p>
                                                    </div>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            }

                            {/* rest blogs */}
                            {restBlogItems.length > 0 && 
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-6'>
                                    {
                                        restBlogItems.map((item,index) => {
                                            return (
                                                <Link key={index} to={`/blogs/${item.uid}`} className='grid grid-cols-1 gap-6 cursor-pointer'>
                                                    <div className='relative rounded-md overflow-hidden' style={{paddingTop: '56%'}}>
                                                        <div className='absolute top-0 left-0 h-full w-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url("${item.data['main-image'].url}")`}}></div>
                                                    </div>
                                                    <div className='space-y-2'>
                                                        <p className='text-gray-600 text-xs pb-2'>{item.data.date}</p>
                                                        <h2 className='text-xl font-semibold pb-2'>{item.data['blog-title'][0].text}</h2>
                                                        <p className='text-base text-gray-500 text-elipsis' style={ellipsisStyle}>{item.data['short-description'][0].text}</p>
                                                        <p className={`flex gap-4 items-center hover:gap-12 duration-500 mt-4 drop-shadow-dark2 text-blue-600 font-semibold`}>
                                                            <span className='text-sm'>Continue reading</span>
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M17 11C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13V11ZM3 13C2.44771 13 2 12.5523 2 12C2 11.4477 2.44771 11 3 11V13ZM17 13H3V11H17V13Z" fill="currentColor"/>
                                                                <path d="M21.7152 11.7966L16.265 7.90356C15.7355 7.52535 15 7.90385 15 8.55455V15.4454C15 16.0961 15.7355 16.4746 16.265 16.0964L21.7152 12.2034C21.8548 12.1037 21.8548 11.8963 21.7152 11.7966Z" fill="currentColor"/>
                                                            </svg>
                                                        </p>
                                                    </div>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            }
                            

                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default AllBlogsPage;