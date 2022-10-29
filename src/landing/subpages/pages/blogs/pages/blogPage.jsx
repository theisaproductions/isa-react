import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { usePrismicDocumentByUID } from '@prismicio/react';
import BlogSubNavbar from './components/subNavbar';
import SimilarBlogWidget from './components/similarBlog';
import useDocumentTitle from '../../../../components/documentTitle';
import BlogSuggestionWidget from './components/blogSuggestion';

const BlogPage = () => {

    const documentID = useParams();
    const [doc, { state }] = usePrismicDocumentByUID('blog', documentID.id)

    useEffect(() => {
        console.log(doc, state)
    }, [doc]);

    // set page title for seo
    useDocumentTitle(doc?.data['blog-title'][0].text);

    return(
        <div className='min-h-screen'>
            {/* top section */}
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

            <div className='px-5vw'>
                <div className='max-w-6xl mx-auto'>
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
                    doc ?
                    <div className='space-y-14'>
                        {/* sub-navbar */}
                        <BlogSubNavbar showNav={true}/>

                        {/* blog */}
                        <article className='space-y-2'>
                            <p className='text-gray-600 text-sm pb-2'>{doc.data.date}</p>
                            <h1 className='text-5xl font-semibold pb-6'>{doc.data['blog-title'][0].text}</h1>
                            {
                                doc.data['full-content'].map((item, index) => {
                                    return (
                                        <p key={index} className='text-base'>{item.text}</p>
                                    )
                                })
                            }
                        </article>
                        {
                            doc.data.similar_blog &&
                            <SimilarBlogWidget id={doc.data.similar_blog.uid} />
                        }
                    </div>
                    :
                    <div className='space-y-10 py-10'>
                        <div className='space-y-2'>
                            <h2 className='text-4xl font-bold'>OOPS!</h2>
                            <p className='text-lg'>The page you are looking for is not found.</p>
                            <p className='text-lg'>
                                <span>Go back to </span>
                                <Link to={'/blogs'} className="font-semibold hover:text-blue-600">Blogs page</Link>
                                <span> or </span>
                                <Link to={'/'} className="font-semibold hover:text-blue-600">Home page</Link>
                            </p>
                        </div>
                        
                        <BlogSuggestionWidget />
                    </div>
                    }
                </div>
            </div>
            {/* similar blogs */}
        </div>
    )
}

export default BlogPage;