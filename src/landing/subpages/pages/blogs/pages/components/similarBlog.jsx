import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePrismicDocumentByUID } from '@prismicio/react'

const SimilarBlogWidget = ({id}) => {

    const [doc, { state }] = usePrismicDocumentByUID('blog', id ? id : null)

    const ellipsisStyle = {
        maxWidth: '100%',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    };

    useEffect(() => {
        console.log(doc);
    }, [doc])
    

    if(state === 'loaded') return (
        <div className='pb-14'>
            <div className='max-w-6xl mx-auto space-y-4'>
                <div className='border-t border-black/30 mt-10 md:mt-16 mb-10'></div>   
                <h2 className='text-4xl font-bold text-pink-600 py-2'>Next article</h2>
                <div className=''>
                    <div className='grid grid-cols-1 gap-14 md:gap-6'>
                        <Link to={`/blogs/${doc.uid}`} className='grid grid-cols-1 gap-6 cursor-pointer'>
                            <div className='relative rounded-md overflow-hidden' style={{paddingTop: '25%'}}>
                                <div className='absolute top-0 left-0 h-full w-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url("${doc.data['main-image'].url}")`}}></div>
                            </div>
                            <div className='space-y-2'>
                                <p className='text-gray-600 text-xs pb-2'>{doc.data.date}</p>
                                <h2 className='text-3xl font-semibold pb-2'>{doc.data['blog-title'][0].text}</h2>
                                <p className='text-base text-gray-500 text-elipsis' style={ellipsisStyle}>{doc.data['short-description'][0].text}</p>
                                <p className={`flex gap-4 items-center hover:gap-12 duration-500 mt-4 drop-shadow-dark2 text-blue-600 font-semibold`}>
                                    <span className='text-sm'>Continue reading</span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 11C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13V11ZM3 13C2.44771 13 2 12.5523 2 12C2 11.4477 2.44771 11 3 11V13ZM17 13H3V11H17V13Z" fill="currentColor"/>
                                        <path d="M21.7152 11.7966L16.265 7.90356C15.7355 7.52535 15 7.90385 15 8.55455V15.4454C15 16.0961 15.7355 16.4746 16.265 16.0964L21.7152 12.2034C21.8548 12.1037 21.8548 11.8963 21.7152 11.7966Z" fill="currentColor"/>
                                    </svg>
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    ) 
    else {
        return <div></div>
    }
}

export default SimilarBlogWidget;